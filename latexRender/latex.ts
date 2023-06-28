import { getPxByMm, mathJaxConfig, mathJaxScriptBaseUrl, transformer } from 'learnable-lib'
// import html2canvas from 'html2canvas'

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

setMathJaxConfig()

/**
 *
 * @param ele HTMLElement
 * @param content String
 * @param option Object 非必传
 * @returns
 */
export function latexRender(option?: {
  lineBreak?: boolean // 换行
  lineHeight?: string // 行高
  textColor?: string // 文字颜色
  divideChinese?: false
  wrapMathrm?: boolean
}) {
  let config = Object.assign(
    {
      lineBreak: true,
      lineHeight: '20px',
      textColor: '#333',
      divideChinese: false,
      wrapMathrm: true,
    },
    option
  )
  if (config?.lineBreak) {
    loadCssCode(
      `.ke-comp-math-jax mjx-math mjx-texatom mjx-mspace{display:${config.lineBreak ? 'block' : 'inline-block'};}
      .ke-comp-math-jax mjx-math>*,.ke-comp-math-jax mjx-math mjx-merror mjx-utext{min-height:${config.lineHeight};line-height:${config.lineHeight};}
      .ke-comp-math-jax mjx-math mjx-texatom{white-space: ${config.lineBreak ? 'normal' : 'nowrap'};}
      .ke-comp-math-jax .mjx-kz-underline{margin-bottom: calc(${config.lineHeight} / 2);}
      .ke-comp-math-jax .mjx-kz-underline > *{line-height: calc(${config.lineHeight} / 3) !important; min-height: calc(${config.lineHeight} / 3) !important;}
      .ke-comp-math-jax .fourlineruled mjx-mtd mjx-tstrut{height: ${getPxByMm(3) + 'px'}}`
    )
  }
  const eles = Array.from(document.querySelectorAll('latex-div')) as HTMLElement[]
  eles.forEach(ele => {
    if (ele instanceof HTMLElement) {
      ele.style.display = 'block'
      console.log(ele?.innerText)
      const content = ele?.innerHTML || ''
      const innerHtml = transformer(content, {
        lineBreak: ele.getAttribute('lineBreak') === 'true' ? true : config.lineBreak,
        divideChinese: ele.getAttribute('divideChinese') === 'true' ? true : config.divideChinese,
        wrapMathrm: ele.getAttribute('wrapMathrm') === 'true' ? true : config.wrapMathrm,
      })

      ele.classList.add('ke-comp-math-jax')
      ele.innerHTML = config?.divideChinese ? innerHtml : `$$${innerHtml}$$`

      let textColor = ele.getAttribute('textColor') || config.textColor
      ele.style.color = textColor
    }
  })

  return addMathJaxScript().then(() => {
    return MathJax.typesetPromise().then(() => {
      const eles = Array.from(document.querySelectorAll('latex-div')) as HTMLElement[]
      eles.forEach(ele => {
        let lineBreak = ele.getAttribute('lineBreak') === 'true' ? true : config.lineBreak
        if (lineBreak !== config.lineBreak) {
          const breakEle = ele.querySelector('mjx-math mjx-texatom') as HTMLElement
          const breakEle1 = ele.querySelector('mjx-math mjx-texatom mjx-mspace') as HTMLElement
          breakEle.style.whiteSpace = lineBreak ? 'normal' : 'nowrap'
          breakEle1.style.display = lineBreak ? 'block' : 'inline-block'
        }
        const lineHeight = ele.getAttribute('lineHeight') || config.lineHeight
        if (lineHeight !== config.lineHeight) {
          const lineHeightEles1 = Array.from([ele.querySelector('mjx-math > *')]) as HTMLElement[]
          const lineHeightEle2 = ele.querySelector('mjx-math mjx-merror mjx-utext') as HTMLElement
          const lineHeightEle3 = ele.querySelector('.mjx-kz-underline') as HTMLElement
          const lineHeightEles4 = Array.from(ele.querySelectorAll('.mjx-kz-underline > *')) as HTMLElement[]
          lineHeightEles1?.forEach(lhEle => {
            lhEle.style.lineHeight = lineHeight
            lhEle.style.minHeight = lineHeight
          })
          lineHeightEle2 && (lineHeightEle2.style.lineHeight = lineHeight)
          lineHeightEle2 && (lineHeightEle2.style.minHeight = lineHeight)
          lineHeightEle3 && (lineHeightEle3.style.marginBottom = `calc(${lineHeight} / 2)`)
          lineHeightEles4?.forEach(lhEle => {
            lhEle.style.lineHeight = `calc(${lineHeight} / 3) !important`
            lhEle.style.minHeight = `calc(${lineHeight} / 3) !important;`
          })
        }
      })
    })
  })
}

function loadCssCode(code) {
  const style = document.createElement('style') as HTMLStyleElement
  style.type = 'text/css'
  style.rel = 'stylesheet'
  try {
    //for Chrome Firefox Opera Safari
    style.appendChild(document.createTextNode(code))
  } catch (ex) {
    //for IE
    style.styleSheet.cssText = code
  }
  var head = document.getElementsByTagName('head')[0]
  head.appendChild(style)
}

// export function htmlToImageBase64(ele?: HTMLDivElement): Promise<string> {
//   if (!ele) {
//     alert(ele)
//     throw new Error('ele 不存在')
//   }
//   return new Promise(resolve => {
//     html2canvas(ele).then(canvas => {
//       const url = canvas.toDataURL('image/png')
//       resolve(url)
//     })
//   })
// }
