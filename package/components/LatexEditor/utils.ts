import { parseStrRecursive, resetData } from './latex/parse'
import { NameType, SignItem } from './latex/type'

// 设置光标的位置
export function setSelectionRange(node: HTMLElement | null, selectionStart?: number, selectionEnd?: number) {
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
export function insertContent(content: string, str: string, index: number | null) {
  if (index === null) {
    return content + str
  } else {
    return content.slice(0, index) + str + content.slice(index)
  }
}

// content解析成HTML
export function contentToHtml(str: string): {
  resultHtml: string
  contentTree: SignItem[]
} {
  resetData()
  const contentTree = parseStrRecursive(str)
  let resultHtml = getRecursiveHtml(contentTree)
  console.log('latex 公式树：', contentTree)
  console.log('latex HTML串：', resultHtml)
  return { resultHtml, contentTree }
}
function getRecursiveHtml(contentTree: SignItem[]): string {
  let resultHtml = ''
  contentTree.forEach(item => {
    if (item.name === NameType.latex) {
      resultHtml += `<span class='${item.brackets ? 'bracket' : ''} lx-${item.__id}' style='color:${item.brackets ? '#008de9' : '#eb1e1e'};'>${item.value}`
      if (item.brackets) {
        resultHtml += `<span style='color:#608b4e;'>{</span>`
        for (const key in item.brackets) {
          resultHtml += getRecursiveHtml(item.brackets[key])
        }
        resultHtml += `<span style='color:#608b4e;'>}</span>`
      }
      resultHtml += '</span>'
    } else {
      resultHtml += `<span class='tx-${item.__id}' style='color:#d9822b;'>${item.value}</span>`
    }
  })
  return resultHtml
}

// 获取最深层元素

export function getNodeIdByDeep(signTree: SignItem[], id: string, noSame: boolean = false): SignItem | null {
  console.log(signTree, id)
  let node: SignItem | null = null
  let isDeep = false

  for (let index = 0; index < signTree.length; index++) {
    let item = signTree[index]
    if (!noSame && item.__id.toString() === id) {
      isDeep = true
    }
    if (item.brackets) {
      for (const key in item.brackets) {
        node = getNodeIdByDeep(item.brackets[key], id, true)
      }
    }
    if (item.__id.toString() === id && !item.brackets) {
      console.log(222, item)
      node = item
      break
    }

    if (!isDeep && noSame && !item.brackets) {
      console.log(111, isDeep)
      node = item
      break
    }
  }
  isDeep = false
  return node
}

//监听元素是否变化
export async function observerNode(node: HTMLElement) {
  const observer = new MutationObserver(function (mutationList) {
    mutationList.forEach(mutation => {
      switch (mutation.type) {
        case 'characterData':
          console.log('characterData')
          break
        case 'childList':
          console.log('childList')
          break
      }
    })
  })
  observer.observe(node, {
    childList: true,
    characterData: true,
  })
}
export type CursorInfo =
  | {
      cursorNode: HTMLElement | null
      cursorNodeIndex: number
      cursorContentIndex: number
      currentNodeId: number
    }
  | undefined

/**
 *
 * 如果 cursorNode 是文字节点，那么cursorNodeIndex就是从该文字节点的第一个字开始，直到被选中的第一个字之间的字数（如果第一个字就被选中，那么偏移量为零）再加上被选中文字的长度。
 * 如果 cursorNode 是一个元素，那么cursorNodeIndex就是在选区最后一个节点的同级节点总数的下标。(这些节点都是 cursorNode 的子节点)
 */
export function getCursorInfo(node: SignItem): CursorInfo {
  console.log(node)
  console.log('node-signItem:', Object.assign({}, node))
  let cursorNode: HTMLElement | null = null
  let cursorNodeIndex = 0
  let cursorContentIndex = 0
  let currentNodeId = 0
  if (node.name === NameType.txt) {
    // 文本型节点
    cursorNode = document.querySelector(`.tx-${node.__id}`) as HTMLDivElement
    cursorNodeIndex = node.end
    cursorContentIndex = node.__end
    currentNodeId = node.__id
  } else {
    if (!node.brackets) {
      cursorNode = document.querySelector(`.lx-${node.__id}`) as HTMLElement
      cursorNodeIndex = node.end
      cursorContentIndex = node.__end
      console.log('cursorNode.childNodes', cursorNode.childNodes)
      if (cursorNode.childNodes.length) {
        const lastChildTextNode = Array.from(cursorNode.childNodes).slice(-1)[0] as Text
        if (lastChildTextNode?.nodeName === '#text') {
          // 文本型节点
          currentNodeId = node.__id + 1
          cursorNode = lastChildTextNode as unknown as HTMLElement
          cursorNodeIndex = lastChildTextNode.length
        }
      }
    }
  }

  console.log('cursorNode:', cursorNode, 'cursorNodeIndex:', cursorNodeIndex, 'cursorContentIndex:', cursorContentIndex)

  return {
    cursorNode: cursorNode as HTMLElement,
    cursorNodeIndex,
    cursorContentIndex,
    currentNodeId,
  }
}
