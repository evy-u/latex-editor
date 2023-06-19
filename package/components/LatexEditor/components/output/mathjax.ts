import { mathJaxConfig, mathJaxScriptBaseUrl } from '@evyu/common-lib'
import html2canvas from 'html2canvas'

export type MathJaxObject = {
  [x: string]: any
  tex2chtmlPromise: (input: string) => Promise<HTMLElement>
}

declare global {
  const MathJax: MathJaxObject
  interface Window {
    MathJax: MathJaxObject
  }
}

const mathJaxScriptId = 'MathJax-script'
const mathJaxScriptSrc = mathJaxScriptBaseUrl + '/tex-mml-chtml.js'
let isAddScript = false
let isReady = false

function initMathJaxConifg(newConfig?: Record<string, any>) {
  if (globalThis.window) {
    let config = mathJaxConfig
    if (newConfig) {
      config = {
        ...mathJaxConfig,
        ...newConfig,
      }
    }
    globalThis.window.MathJax = {
      ...config,
      startup: {
        pageReady: () => {
          isReady = true
        },
      },
    } as unknown as MathJaxObject
  }
}
function addMathJaxScript() {
  return new Promise((resolve, reject) => {
    if (isReady) {
      return resolve('')
    } else {
      if (!isAddScript) {
        let ele = document.createElement('script')
        ele.src = mathJaxScriptSrc
        ele.id = mathJaxScriptId
        ele.onerror = err => {
          reject(err)
        }
        document.body.appendChild(ele)
        isAddScript = true
      }
      let interval = setInterval(() => {
        if (isReady) {
          clearInterval(interval)
          return resolve('')
        }
      }, 1000)
    }
  })
}

export function setMathJaxConfig(mathJaxConfig?: Record<string, any>) {
  initMathJaxConifg(mathJaxConfig)
}

export function renderLatex(ele: HTMLElement) {
  return addMathJaxScript().then(() => {
    return MathJax.typesetPromise([ele])
  })
}

export function htmlToImageBase64(ele?: HTMLDivElement): Promise<string> {
  if (!ele) {
    alert(ele)
    throw new Error('ele 不存在')
  }
  return new Promise(resolve => {
    html2canvas(ele).then(canvas => {
      const url = canvas.toDataURL('image/png')
      resolve(url)
    })
  })
}
