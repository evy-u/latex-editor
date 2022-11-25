import { renderLatex, setMathJaxConfig, htmlToImageBase64 } from './mathjax'
import { transformer } from 'learnable-lib'
import './output.scss'

interface LatexOutputConfig {
  display?: 'block' | 'inline-block'
  globalRender?: boolean
  lineHeight?: string
  punctuation?: boolean
  textColor?: string
  lineClass?: boolean
  divideChinese?: boolean
}

interface LatexOutputParam {
  container: string
  content: string
  config: LatexOutputConfig
}

class LatexOupt {
  private container: HTMLDivElement
  private content: string = ''
  private defaultConfig: LatexOutputConfig = {
    display: 'block',
    globalRender: false,
    lineHeight: '20px',
    punctuation: false,
    textColor: '#000',
    lineClass: false,
    divideChinese: false,
  }
  private config: LatexOutputConfig = {}
  constructor(parameters: LatexOutputParam) {
    this.container = document.querySelector(parameters.container) as HTMLDivElement
    if (!this.container) {
      throw new Error(`找不到${parameters.container}`)
    }
    this.config = parameters.config
    this.init()
  }
  init() {
    setMathJaxConfig(this.container)
  }

  setContent(content: string) {
    this.content = content
    const __config = Object.assign(this.defaultConfig, this.config)
    const innerHtml = transformer(this.content, __config)
    this.container.innerHTML = __config.divideChinese ? innerHtml : `$$${innerHtml}$$`
    renderLatex(this.container)
  }

  latexToImage() {
    return new Promise(resolve => {
      htmlToImageBase64(this.container).then(base64 => {
        resolve(base64)
      })
    })
  }
}

export default LatexOupt
