type OptionsT = {
  showTool?: boolean
  content?: string
  mathOption?: MathjaxOptionType
}

import tool from './components/tool/tool'
import input from './components/input/input'
import output, { MathjaxOptionType } from './components/output/output'
import { FormulaItem } from './formula'
import { createElement, insertHtmlAtCaret, recursiveFindDeepNode } from './utils'
import { el, mount } from 'redom'
import parseRecursive from './utils/parse'

class LatexEditor {
  public showTool: boolean
  public content: string = ''
  private container: HTMLElement
  private Tool: InstanceType<typeof tool> | undefined
  private Input: InstanceType<typeof input> | undefined
  private Output: InstanceType<typeof output> | undefined
  private mathOption: MathjaxOptionType | undefined

  constructor(ele, options: OptionsT) {
    if (!ele) {
      throw new Error(`HtmlElement is not found`)
    }
    this.container = ele
    this.showTool = options?.showTool || true
    if (this.showTool === undefined) {
      this.showTool = true
    }
    this.content = options?.content || ''
    this.mathOption = options.mathOption
    this.init()
  }
  init() {
    if (this.showTool) {
      this.createTool()
    }
    this.createInput()
    this.createOutput()
    if (this.content) {
      this.inserContent(this.content)
      this.Output?.setContent(this.content)
    }
  }
  createTool() {
    mount(this.container, el('div.tool'))
    this.Tool = new tool({
      container: '.tool',
      handleClickFormula: this.handleClickFormula.bind(this),
    })
  }
  createInput() {
    mount(this.container, el('div.input'))
    this.Input = new input({
      container: '.input',
      contentChange: val => {
        this.content = val
        if (!this.mathOption?.globalRender) {
          this.Output?.setContent(this.content)
        }
      },
    })
  }
  createOutput() {
    mount(this.container, el('div.output'))
    this.Output = new output({
      container: '.output',
      content: this.content,
      options: this.mathOption,
    })
  }
  inserContent(str: string) {
    const astTree = parseRecursive(str)
    const element = createElement(astTree)
    insertHtmlAtCaret(element.outerHTML)
    if (!this.mathOption?.globalRender) {
      this.content = this.Input?.getContent() || ''
      this.Output?.setContent(this.content)
    }
  }

  handleClickFormula(ev, data: FormulaItem) {
    const formulaStr = data.formula
    this.inserContent(formulaStr)
  }

  getRangeInfo() {
    const sel = window.getSelection()
    let range = sel?.getRangeAt(0)
    range?.deleteContents()
  }

  optionChange(config: MathjaxOptionType) {
    this.mathOption = config
    this.Output?.changeOption(this.mathOption)
  }

  globalRenderContent() {
    const __content = this.Input?.getContent() || ''
    console.log(__content)
    this.Output?.setContent(__content)
  }
}

export default LatexEditor
