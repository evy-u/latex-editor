import formulas, { type FormulaTypeItem, type FormulaItem } from '../LatexEditor/components/tool/formula'
import './tool.scss'

interface ModuleParam {
  container: string
  handleClickFormula: (e: Event, signItem: FormulaItem) => void
}

class LatexTool {
  private container: HTMLDivElement
  private handleClickFormula: (e: Event, signItem: FormulaItem) => void
  constructor(parameters: ModuleParam) {
    const ele = document.querySelector(parameters.container) as HTMLDivElement
    if (!ele) {
      throw new Error(`找不到${parameters.container}`)
    }
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
        htmlResult += `<img src="${formulas[i].data[j].icon}" sign="${formulas[i].data[j].formula}"/>`
        htmlResult += `<div class="formula-name" sign="${formulas[i].data[j].formula}">${formulas[i].data[j].name}</div>`
        htmlResult += '</div>'
      }
      htmlResult += '</div>'

      htmlResult += '</div>'
    }
    return htmlResult
  }

  listenFormulaItemClick(cb) {
    var formulaList = document.querySelectorAll('.formula-item') as unknown as HTMLDivElement[]
    Array.from(formulaList).forEach(formulaItem => {
      formulaItem.onclick = function (e: Event) {
        e.stopPropagation()
        e.preventDefault()
        const signItem = formulas
          .map(type => {
            return type.data.find(item => item.formula == e.target?.getAttribute('sign'))
          })
          .filter(i => i)[0]

        cb(e, signItem)
      }
    })
  }
}

export default LatexTool
