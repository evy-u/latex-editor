import { parseStrRecursive, resetData } from './latex/parse'
import { NameType, SignItem } from './latex/type'

// 设置光标的位置
export function setSelectionRange(node: HTMLElement, selectionStart?: number, selectionEnd?: number) {
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
      resultHtml += `<span class='lx-${item.__id}' style='color:#008de9;'>${item.value}`
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
  let node: SignItem | null = null
  for (let index = 0; index < signTree.length; index++) {
    let item = signTree[index]
    if (item.brackets) {
      for (const key in item.brackets) {
        node = getNodeIdByDeep(item.brackets[key], id, true)
      }
    } else if (item.__id.toString() === id || noSame) {
      node = item
      break
    }
  }
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

export function getCursorPosition(ele: InstanceType<typeof HTMLDivElement>): {
  start: number
  end: number
} {
  console.log(ele, ele.innerHTML)
  let start = 0
  let end = 0
  const isIE = !!document.all
  if (isIE) {
    //selection 当前激活选中区，即高亮文本块，和/或文当中用户可执行某些操作的其它元素。
    //createRange 从当前文本选中区中创建 TextRange 对象，
    //或从控件选中区中创建 controlRange 集合。
    let sTextRange = document.selection.createRange()

    //判断选中的是不是textarea对象
    if (sTextRange.parentElement() == ele) {
      //创建一个TextRange对象
      let oTextRange = document.body.createTextRange()
      //移动文本范围以便范围的开始和结束位置能够完全包含给定元素的文本。
      oTextRange.moveToElementText(ele)

      //此时得到两个 TextRange
      //oTextRange文本域(textarea)中文本的TextRange对象
      //sTextRange是选中区域文本的TextRange对象

      //compareEndPoints方法介绍，compareEndPoints方法用于比较两个TextRange对象的位置
      //StartToEnd  比较TextRange开头与参数TextRange的末尾。
      //StartToStart比较TextRange开头与参数TextRange的开头。
      //EndToStart  比较TextRange末尾与参数TextRange的开头。
      //EndToEnd    比较TextRange末尾与参数TextRange的末尾。

      //moveStart方法介绍，更改范围的开始位置
      //character 按字符移动
      //word       按单词移动
      //sentence  按句子移动
      //textedit  启动编辑动作

      //这里我们比较oTextRange和sTextRange的开头，的到选中区域的开头位置
      for (start = 0; oTextRange.compareEndPoints('StartToStart', sTextRange) < 0; start++) {
        oTextRange.moveStart('character', 1)
      }
      //需要计算一下\n的数目(按字符移动的方式不计\n,所以这里加上)
      for (let i = 0; i <= start; i++) {
        if (ele.innerHTML.charAt(i) == '\n') {
          start++
        }
      }

      //再计算一次结束的位置
      oTextRange.moveToElementText(ele)
      for (end = 0; oTextRange.compareEndPoints('StartToEnd', sTextRange) < 0; end++) {
        oTextRange.moveStart('character', 1)
      }
      for (let i = 0; i <= end; i++) {
        if (ele.innerHTML.charAt(i) == '\n') {
          end++
        }
      }
    }
  } else {
    start = ele.selectionStart
    end = ele.selectionEnd
  }
  return {
    start,
    end,
  }
}
