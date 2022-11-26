import formulas, { type FormulaTypeItem, type FormulaItem } from './components/LatexEditor/components/tool/formula'
import './init.scss'

interface ModuleParam {
  container: string
  handleClickFormula: (e: Event, signItem: FormulaItem) => void
}

class LatexTool {
  private container: HTMLDivElement
  private handleClickFormula: (e: Event, signItem: FormulaItem) => void
  constructor(parameters: ModuleParam) {
    const ele = document.querySelector(parameters.container) as HTMLDivElement
    !ele && new Error(`找不到${parameters.container}`)
    this.container = ele
    this.handleClickFormula = parameters.handleClickFormula
    this.init()
  }
  init() {
    const htmlStr = this.createFormulesDom()
    Array.from(new DOMParser().parseFromString(htmlStr, 'text/html').body.children).forEach(child => {
      this.container.appendChild(child)
    })
    this.listenFormulaItemClick(this.handleClickFormula)
  }
  createFormulesDom(): string {
    let htmlResult = ''
    for (let i = 0; i < formulas.length; i++) {
      htmlResult += '<div class="formula-type">'

      htmlResult += `<img src="${formulas[i].icon}"/>`
      htmlResult += `<div class="type-name">${formulas[i].name}</div>`

      htmlResult += '<div class="formula-item-list">'
      for (let j = 0; j < formulas[i].data.length; j++) {
        htmlResult += `<div class="formula-item" sign="${formulas[i].data[j].formula}">`
        htmlResult += `<img src="${formulas[i].data[j].icon}"/>`
        htmlResult += `<div class="formula-name">${formulas[i].data[j].name}</div>`
        htmlResult += '</div>'
      }
      htmlResult += '</div>'

      htmlResult += '</div>'
    }
    return htmlResult
  }
  listenFormulaItemClick(cb) {
    // console.log(cb)
    var formulaList = document.querySelectorAll('.formula-item') as unknown as HTMLDivElement[]
    Array.from(formulaList).forEach(formulaItem => {
      formulaItem.onclick = function (e: Event) {
        const signItemNode = e.target?.parentNode as unknown as HTMLDivElement
        const signItem = formulas.map(type => {
          return type.data.find(item => item.formula === signItemNode.getAttribute('sign'))
        })[0]

        cb(e, signItem)
      }
    })
  }
}

globalThis.latexTool = LatexTool
