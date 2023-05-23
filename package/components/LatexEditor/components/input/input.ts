import { deleteByBlock, observerNode, textToTextTag } from '../../utils'
import './input.scss'
import { Shortcuts } from 'shortcuts'
import { el, mount } from 'redom'
// import OptionsPanel from './options-panel'
// import formulas, { fontIconBaseUrl, type FormulaItem } from '../../formula'
// import { flatMapDeep, flattenDeep } from 'lodash'

interface LatexInputParam {
  container: string
  content?: string
  contentChange?: (content: string, selection: Selection | null) => void
}

class LatexInput {
  public container: HTMLDivElement

  private editContent: string = ''

  private contentChange: LatexInputParam['contentChange']
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
      // TODO: suggest options
      // if (ev.keyCode === 220) {
      //   let data = flattenDeep(
      //     formulas.map(item => {
      //       if (Array.isArray(item.data)) {
      //         return item.data.map(sub => sub.formula)
      //       }
      //     })
      //   )
      //   OptionsPanel(data)
      // }
    }
  }
}

export default LatexInput
