import { parseStrRecursive, resetData } from './latex/parse'
import { NameType, SignItem } from './latex/type'
import _ from 'lodash'

// 设置光标的位置
export function setSelectionRange(node: HTMLElement | undefined, selectionStart?: number, selectionEnd?: number) {
  if (!node) return
  const selection = window.getSelection() as Selection
  selection.removeAllRanges()
  if (selectionStart !== undefined && selectionEnd !== undefined) {
    const range = document.createRange()
    range.setStart(node, selectionStart)
    range.setEnd(node, selectionEnd)
    selection.addRange(range)
  } else {
    selection.selectAllChildren(node) // 选择元素下所有子内容
    selection.collapseToEnd()
  }
}

export function downloadImg(url: string) {
  const node = document.createElement('a') as HTMLAnchorElement
  node.href = url
  node.click()
}

// 拼接content
// function insertContent(content: string, str: string, index: number | null) {
//   if (index === null) {
//     return content + str
//   } else {
//     return content.slice(0, index) + str + content.slice(index)
//   }
// }

// 插入节点
export function insertNode(
  str: string,
  parentNode: HTMLElement | undefined,
  nodeIndex: number
): {
  cursorNode: HTMLElement | undefined
  cursorIndex: number
} {
  const { contentTree, resultHtml } = contentToHtml(str)
  const child = new DOMParser().parseFromString(resultHtml, 'text/html').querySelector('body')?.children[0] as HTMLElement
  if (child) {
    parentNode && parentNode.insertBefore(child, parentNode?.childNodes[nodeIndex])
    const deepNode = getNodeByDeep(child) as HTMLElement
    const signNode = getNodeIdByDeep(contentTree, deepNode?.className.split('-')[1] || '')
    if (signNode?.name === NameType.txt) {
      return {
        cursorNode: deepNode,
        cursorIndex: 0,
      }
    } else if (signNode?.name === NameType.latexText) {
      return {
        cursorNode: deepNode,
        cursorIndex: 1,
      }
    }
  }
  return {
    cursorNode: parentNode,
    cursorIndex: 0,
  }
}

// content解析成HTML
function contentToHtml(str: string): {
  contentTree: SignItem[]
  resultHtml: string
} {
  resetData()
  const contentTree = parseStrRecursive(str)
  let resultHtml = getRecursiveHtml(contentTree)
  // console.log('latex 公式树：', contentTree)
  // console.log('latex HTML串：', resultHtml)
  return { contentTree, resultHtml }
}
function getRecursiveHtml(contentTree: SignItem[]): string {
  let resultHtml = ''
  contentTree.forEach(item => {
    if (item.name === NameType.latex) {
      resultHtml += `<span class='${item.brackets ? 'bracket' : ''} lx-${item.__id}' style='color:${item.brackets ? '#008de9' : '#eb1e1e'};'>${item.value}`
      if (item.brackets) {
        for (const key in item.brackets) {
          resultHtml += `<span style='color:#608b4e;'>{</span>`
          resultHtml += getRecursiveHtml(item.brackets[key])
          resultHtml += `<span style='color:#608b4e;'>}</span>`
        }
      }
      resultHtml += '</span>'
    } else {
      resultHtml += `<span class='tx-${item.__id}' style='color:#d9822b;'>${item.value}</span>`
    }
  })
  return resultHtml
}

// 获取signTree的最深层元素
function getNodeIdByDeep(signTree: SignItem[], id: string, noSame: boolean = false): SignItem | null {
  // console.log('getNodeIdByDeep', id, signTree)
  let node: SignItem | null = null
  for (let index = 0; index < signTree.length; index++) {
    let item = signTree[index]

    if (item.brackets) {
      for (const key in item.brackets) {
        node = getNodeIdByDeep(item.brackets[key], id, true)
      }
    }
    if (!noSame) {
      // 外层
      if (!item.brackets && item.__id.toString() === id) {
        node = item
        break
      }
    } else {
      // 里层
      if (item.__id.toString() === id && !item.brackets) {
        node = item
        break
      }
      if (item.__id.toString() !== id && !item.brackets && item.name === 'txt') {
        node = item
        break
      }
    }
  }
  return node
}

// 获取HTMLElENT最里层的元素
function getNodeByDeep(ele?: HTMLElement): HTMLElement | undefined {
  if (ele?.children?.length) {
    let children = _.reverse(Array.from(ele?.children))
    for (let i = 0; i < children.length; i++) {
      // 最后一个有latex标识的地方
      const node = getNodeByDeep(children[i] as HTMLElement)
      if (node) {
        return node
      }
    }
  }
  if (!ele?.children?.length && ele?.nodeType === 1 && ele.className.length) {
    return ele
  }
}

//监听元素是否变化
export async function observerNode(node: HTMLElement, cb: (selection: Selection | null) => void) {
  if (!node) return
  const observer = new MutationObserver(function (mutationList) {
    mutationList.forEach(mutation => {
      switch (mutation.type) {
        case 'characterData':
          const selection = window.getSelection()
          cb(selection)
          break
        case 'childList':
          const __selection = window.getSelection()
          cb(__selection)
          break
        // case 'attributes':
        //   console.log('attributes')
        //   break
      }
    })
  })
  observer.observe(node, {
    childList: true, //target 节点中发生的节点的新增与删除（同时，如果 subtree 为 true，会针对整个子树生效
    characterData: true,
    subtree: true,
  })
}
export type CursorInfo = {
  cursorNode: HTMLElement | undefined
  cursorNodeIndex: number
}

export function getSelection(isChangeCursor: boolean):
  | (CursorInfo & {
      isChangeCursor: boolean
    })
  | null {
  const selection = window.getSelection()
  if (selection && selection.anchorNode) {
    let cursorInfo = {
      cursorNodeIndex: 0,
      cursorNode: undefined,
    }
    if (selection?.anchorNode.nodeType === 3) {
      const { anchorOffset } = selection
      Array.from(selection.anchorNode.parentNode?.childNodes || []).forEach((child, index) => {
        if (selection.containsNode(child, true)) {
          isChangeCursor = false
          child.splitText(anchorOffset)
          cursorInfo.cursorNodeIndex = index + 1
          cursorInfo.cursorNode = selection.anchorNode!.parentNode || undefined
          // setSelectionRange(cursorInfo.cursorNode, cursorInfo.cursorNodeIndex, cursorInfo.cursorNodeIndex)
        }
      })
    } else if (selection?.anchorNode.nodeType === 1) {
      cursorInfo.cursorNode = selection?.anchorNode
      cursorInfo.cursorNodeIndex = selection?.anchorOffset
    }
    return {
      ...cursorInfo,
      isChangeCursor,
    }
  }
  return null
}
