import { renderLatex, setMathJaxConfig, htmlToImageBase64 } from './mathjax'
import { TransformerConfig, transformer } from 'learnable-lib'
import './output.scss'

export type MathjaxOptionType = TransformerConfig & {
  lineHeight?: string
  textColor?: string
  alignBetween?: boolean // 两端对齐
  globalRender?: boolean
}

interface LatexOutputParam {
  container: string
  content: string
  options?: MathjaxOptionType
}

class LatexOupt {
  private container: HTMLDivElement
  private content: string = ''
  private defaultConfig: MathjaxOptionType = {
    lineBreak: true,
    globalRender: false,
    lineHeight: '20px',
    punctuation: false,
    textColor: '#000',
    underlineClass: undefined,
    divideChinese: false,
    wrapMathrm: true,
  }
  private config: MathjaxOptionType = {}
  constructor(parameters: LatexOutputParam) {
    this.container = document.querySelector(parameters.container) as HTMLDivElement
    if (!this.container) {
      throw new Error(`找不到${parameters.container}`)
    }
    this.config = parameters.options || {}
    this.init()
  }
  init() {
    setMathJaxConfig(this.container)
  }

  setContent(content: string) {
    this.content = content
    const __config = Object.assign(this.defaultConfig, this.config)
    const innerHtml = transformer(this.content, __config)
    this.container.innerText = __config.divideChinese ? innerHtml : `$$${innerHtml}$$`
    this.container.style.color = __config.textColor || '#333'
    renderLatex(this.container)
  }

  latexToImage() {
    return new Promise(resolve => {
      htmlToImageBase64(this.container).then(base64 => {
        resolve(base64)
      })
    })
  }

  changeOption(options: MathjaxOptionType) {
    this.config = options
  }
}

export default LatexOupt
