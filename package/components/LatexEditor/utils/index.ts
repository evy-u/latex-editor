import { MatchItem, MathType } from './parse'
import { el, html, mount, text } from 'redom'

function createBracketEle(signItem: MatchItem, prev: MatchItem, next: MatchItem) {
  let str = signItem.match
  if (signItem.type === MathType.latex) {
    if (signItem.children.length) {
      return [
        el('span.bk.start', getBracket(prev?.match, 'start')),
        ...signItem.children.map((item, index) => createBracketEle(item, signItem.children[index - 1], signItem.children[index + 1])),
        el('span.bk end', getBracket(prev?.match, 'end')),
        // for: 在latex标识符后输入的文字颜色是黑色
        // 多括号的， 只在最后一个括号后面加
        // (prev?.match.at(0) === '{' && prev?.match.at(-1) === '}') ||
        // (prev?.match.includes('\\') && !next) ||
        // (otherList.some(ot => prev?.match.includes(ot)) && prev?.children.length)
        //   ? el('text', ' ')
        //   : '',
      ]
    } else if (str.at(0) === '{' && str.at(-1) === '}') {
      return [
        el('span.bk start', '{'),
        text(str.slice(1, str.length - 1)),
        el('span.bk end', '}'),
        // for: 在latex标识符后输入的文字颜色是黑色
        // 多括号的， 只在最后一个括号后面加
        // prev && ((prev.match.at(0) === '{' && prev.match.at(-1) === '}') || prev.match.includes('\\') || otherList.some(ot => prev.match.includes(ot)))
        //   ? el('text', ' ')
        //   : '',
      ]
    } else {
      return [
        el(`span.${signItem.type === MathType.latex ? 'lx' : 'lt'}`, text(signItem.match)),
        // for: 在latex标识符后输入的文字颜色是黑色
        // signItem.type === MathType.latex && ((next && next.match.at(0) !== '{' && next.match.at(-1) !== '}') || !next) ? el('text', ' ') : '',
      ]
    }
  } else {
    return text(str)
  }
}

function getBracket(val: string, type: 'start' | 'end') {
  if (val === '\\left') {
    return type === 'start' ? '\\{' : '\\}'
  } else {
    return type === 'start' ? '{' : '}'
  }
}

export function createElement(astTree: MatchItem[]): HTMLElement {
  const element = html(
    'span.latex-root',
    astTree.map((item, index) => createBracketEle(item, astTree[index - 1], astTree[index + 1]))
  )
  return element
}

// range.collapsed true表示end=start
function addRange(
  sel: Selection,
  config: {
    startNode: HTMLElement
    start: number
    endNode: HTMLElement
    end: number
  }
) {
  const range = new Range()
  range.setStart(config.startNode, config.start)
  range.setEnd(config.endNode, config.end)
  sel?.removeAllRanges()
  sel?.addRange(range)
}

// 在光标处插入
export function insertHtmlAtCaret(html: string) {
  let sel, range
  if (window.getSelection) {
    // IE9 and non-IE
    sel = window.getSelection()

    if (!sel.focusNode) {
      const parentNode = document.querySelector('.latex-editor-content') as HTMLElement
      //  parentNode?.childNodes.length, parentNode?.childNodes.length
      //  parentNode
      addRange(sel, {
        startNode: parentNode,
        endNode: parentNode,
        start: parentNode?.childNodes.length,
        end: parentNode?.childNodes.length,
      })
    }
    sel = window.getSelection()
    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0)
      range.deleteContents()

      // Range.createContextualFragment() would be useful here but is
      // non-standard and not supported in all browsers (IE9, for one)
      let el = document.createElement('div')
      el.innerHTML = html
      let frag = document.createDocumentFragment(),
        node,
        lastNode
      while ((node = el.firstChild)) {
        lastNode = frag.appendChild(node)
      }
      range.insertNode(frag)
      // Preserve the selection
      if (lastNode) {
        range = range.cloneRange()
        range.setStartAfter(lastNode)
        range.collapse(true)
        sel.removeAllRanges()
        sel.addRange(range)
      }
    }
  } else if (document.selection && document.selection.type != 'Control') {
    // IE < 9
    document.selection.createRange().pasteHTML(html)
  }
}

//监听元素是否变化
export async function observerNode(node: HTMLElement, cb: (mutation: MutationRecord) => void) {
  if (!node) return
  const observer = new MutationObserver(function (mutationList) {
    mutationList.forEach(mutation => {
      switch (mutation.type) {
        case 'characterData':
          cb(mutation)
          break
        case 'childList':
          console.log('childList')
          cb(mutation)
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
    characterDataOldValue: true,
  })
}

export function deleteByBlock(): boolean {
  const selection = window.getSelection()
  if (selection && selection?.isCollapsed) {
    let endContainer: HTMLElement | null = null
    if (selection!.anchorNode?.nodeType === 3) {
      endContainer = selection!.anchorNode as HTMLElement
    } else {
      endContainer = recursiveFindDeepNode(selection!.anchorNode!) as HTMLElement
    }
    const parentNode = endContainer.parentNode as HTMLElement
    if (endContainer.nodeType === 3 && parentNode.nodeType === 1) {
      if (parentNode.className.includes('lx')) {
        addRange(selection, {
          startNode: parentNode,
          endNode: parentNode,
          start: 0,
          end: 1,
        })
        return true
      }
      if (parentNode.className.includes('bk')) {
        const lxStartEle = recursiveFindPrevNode(parentNode)
        const lxEndEle = parentNode
        addRange(selection, {
          startNode: lxStartEle,
          endNode: lxEndEle,
          start: 0,
          end: 1,
        })
        return true
      }
    }
  }
  return false
}

// function getRangeElements(startNode: HTMLElement, endNode: HTMLElement, result: HTMLElement[]): HTMLElement[] {
//   result.push(startNode)
//   let nextEle = startNode.nextSibling as HTMLElement
//   if (nextEle !== endNode) {
//     getRangeElements(nextEle, endNode, result)
//   } else {
//     result.push(endNode)
//   }
//   return result
// }

export function recursiveFindDeepNode(node: Node): HTMLElement {
  let children = Array.from(node?.childNodes)
    ?.map(item => {
      if (item?.innerText?.length || item.nodeValue?.length) {
        return item
      }
    })
    .filter(i => i) as HTMLElement[]
  if (children?.length) {
    return recursiveFindDeepNode(children[children.length - 1])
  } else {
    return node as HTMLElement
  }
}

export function textToTextTag(mutation: MutationRecord) {
  const selection = window.getSelection()
  const deepNode = recursiveFindDeepNode(selection!.focusNode!) as HTMLElement
  let parentNode = deepNode.parentNode as HTMLElement
  let oldValue = mutation.oldValue || ''
  let newValue = mutation.target.nodeValue || ''
  if (deepNode.nodeType === 3 && parentNode.className.includes('lx') && newValue.length > oldValue?.length) {
    let lastStr = newValue.slice(newValue.indexOf(oldValue) + oldValue.length)
    parentNode.innerHTML = oldValue
    const textEle = el('text', lastStr)
    mount(parentNode, textEle)
    addRange(selection!, {
      startNode: textEle,
      endNode: textEle,
      start: lastStr.length,
      end: lastStr.length,
    })
  }
}

function recursiveFindPrevNode(node: HTMLElement): HTMLElement {
  let prevEle = node?.previousSibling as HTMLElement
  if (prevEle) {
    if (prevEle?.className?.includes('lx')) {
      return node.previousSibling as HTMLElement
    } else {
      return recursiveFindPrevNode(prevEle)
    }
  } else {
    return node
  }
}
