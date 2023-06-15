import { createElement, deleteByBlock, getPosition, insertHtmlAtCaret, observerNode, recursiveFindDeepNode, textToTextTag } from '../../utils'
import './input.scss'
import { Shortcuts } from 'shortcuts'
import { el, mount } from 'redom'
import { flattenDeep } from 'lodash'
import OptionsPanel from './options-panel'
import formulas, { fontIconBaseUrl, type FormulaItem } from '../../formula'
import parseRecursive from '../../utils/parse'
import _ from 'lodash'
// import { flatMapDeep, flattenDeep } from 'lodash'

interface LatexInputParam {
  container: string
  content?: string
  contentChange?: (content: string, selection: Selection | null) => void
}

class LatexInput {
  readonly container: HTMLDivElement
  private editContent: string = ''
  private contentChange: LatexInputParam['contentChange']
  /**
   * suggest attr start
   */
  private keyLanguage: 'en' | 'zh' = 'en'
  private suggestVal: string = ''
  /**
   * suggest attr end
   */

  constructor(parameters: LatexInputParam) {
    this.container = document.querySelector(parameters.container) as HTMLDivElement
    if (!this.container) {
      throw new Error(`找不到${parameters.container}`)
    }
    this.editContent = parameters.content || ''
    this.contentChange = parameters.contentChange
    this.init()
  }

  init() {
    this.container.contentEditable = 'true'
    this.container.classList.add('latex-editor-content')
    this.container.focus()
    observerNode(this.container, this.observerContentChange.bind(this))
    this.observerDelete()
    this.removeFontTag()
    this.addKeyEvent()
  }

  observerDelete() {
    const shortcuts = new Shortcuts()
    shortcuts.add([
      {
        shortcut: 'Backspace',
        handler: event => {
          return deleteByBlock()
        },
      },
    ])
  }

  observerContentChange(mutation: MutationRecord) {
    this.editContent = ''
    this.setEditContent()
    textToTextTag(mutation)
    if (mutation.type === 'characterData' && mutation.target) {
      this.keyLanguage = 'en'
      const targetElement = mutation.target as HTMLElement
      let newValue = targetElement.nodeValue || ''
      let oldValue = mutation.oldValue || ''
      if (newValue.length > oldValue?.length) {
        // 输入
        let insertStr = newValue.slice(newValue.indexOf(oldValue) + oldValue.length)
        this.suggestVal += insertStr
        this.visibleSuggestionOption(this.suggestVal)
      } else {
        // 删除
        this.suggestVal = ''
      }
    }
  }

  setEditContent() {
    const selection = window.getSelection()
    const ele = document.createElement('div')
    ele.innerHTML = this.container.innerHTML
    this.editContent = ele.innerText || ''
    this.contentChange!(this.editContent, selection)
  }

  getContainer() {
    return this.container
  }

  getContent() {
    return this.container.innerText || ''
  }

  visibleSuggestionOption(val: string = '') {
    if (!val && !this.suggestVal) {
      this.suggestVal = '\\'
    }
    if (this.keyLanguage === 'zh' || (val && !val.includes('\\'))) {
      // 中文输入法的时候不显示suggest框
      return
    }
    let data = flattenDeep(
      formulas.map(item => {
        if (Array.isArray(item.data)) {
          return item.data.map(sub => sub.formula)
        }
      })
    )
    if (val) {
      data = data.filter(item => item.includes(val))
    }
    let position = getPosition()
    if (!position || (!position.left && !position.top)) {
      return
    }
    OptionsPanel(data, position)
    const ele = this.getSuggestPanelEle()
    if (!data.length && ele) {
      // 搜索不到的时候，隐藏suggest框
      this.hideSuggestPanelEle(ele)
      return
    }
    ele?.addEventListener('click', evt => {
      const target = evt.target as HTMLElement
      const formulaStr = target?.innerText || ''
      if (formulaStr) {
        let node = recursiveFindDeepNode(window.getSelection()?.anchorNode!)
        let endIndex = window.getSelection()?.anchorOffset || 0
        let startIndex = endIndex - this.suggestVal.length
        const str = (node.nodeValue?.slice(0, startIndex) || '') + (node.nodeValue?.slice(endIndex) || '')
        const astTree = parseRecursive(formulaStr)
        const element = createElement(astTree)
        insertHtmlAtCaret(element.outerHTML)
        node.nodeValue = str
        this.suggestVal = ''
      }
    })
  }

  addKeyEvent() {
    document.onclick = (ev: MouseEvent) => {
      // 点击别处，隐藏suggest框
      const ele = this.getSuggestPanelEle()
      let target = ev.target as HTMLElement
      if (ele && !target?.className?.includes('latex-editor-content')) {
        this.hideSuggestPanelEle(ele)
      }
    }
    this.container.onkeyup = ev => {
      const ele = this.getSuggestPanelEle()
      if (ele && !this.suggestVal) {
        this.hideSuggestPanelEle(ele)
      }
      if (ev.keyCode === 220) {
        this.visibleSuggestionOption()
      }
    }
    document.body.addEventListener('compositionend', () => {
      // 只有中文输入法才会触发
      // 为了区分、和 \
      this.keyLanguage = 'zh'
    })
  }

  removeFontTag() {
    this.container.onkeyup = ev => {
      let fontNode = this.container.querySelector('font')
      if (fontNode) {
        let data = fontNode!.innerText
        const selection = window.getSelection()
        let focusNode = selection?.focusNode as HTMLElement
        if (!focusNode.innerHTML?.trimStart() && focusNode.innerHTML?.length === 1) {
          mount(fontNode.parentElement!, el('span.lt', data))
          let node = fontNode.parentElement!.lastChild as HTMLElement
          let text = node.innerText
          focusNode.remove()
          const range = new Range()
          range.setStart(node!, text.length)
          range.setEnd(node!, text.length)
          selection?.removeAllRanges()
          selection?.addRange(range)
        }
      }
    }
  }

  getSuggestPanelEle() {
    const ele = document.querySelector('.suggest-option-panel') as HTMLElement | null
    return ele
  }

  hideSuggestPanelEle(ele: HTMLElement) {
    ele.style!.display = 'none'
    this.suggestVal = ''
    ele.removeEventListener(
      'click',
      () => {
        console.log('remove suggest option click event')
      },
      true
    )
  }
}

export default LatexInput
