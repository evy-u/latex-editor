import list, { fontIconBaseUrl, type FormulaItem } from '../../formula'
import './tool.scss'
let formulas = list.map(item => {
  item.data = item.data
    .map(dataItem => {
      if (dataItem.icon) {
        return dataItem
      }
    })
    .filter(i => i)
  return item
})

// console.log(formulas, 'formulas')
interface ModuleParam {
  container: string
  handleClickFormula: (e: Event, signItem: FormulaItem) => void
}

class Tool {
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
    // this.createFormulesList()
  }

  createFormulesDom(): string {
    let htmlResult = ''
    for (let i = 0; i < formulas.length; i++) {
      htmlResult += '<div class="formula-type-container"><div class="formula-type">'

      htmlResult += `<img src="${fontIconBaseUrl}${formulas[i].data[0].icon}.svg"/>`
      htmlResult += `<div class="type-name">${formulas[i].name}</div>`

      htmlResult += '<div class="formula-item-list noselect">'
      for (let j = 0; j < formulas[i].data.length; j++) {
        htmlResult += `<div class="formula-item" sign="${formulas[i].data[j].formula}" >`
        htmlResult += `<img src="${fontIconBaseUrl}${formulas[i].data[j].icon}.svg" sign="${formulas[i].data[j].formula}" />`
        htmlResult += '</div>'
      }
      htmlResult += '</div>'

      htmlResult += '</div></div>'
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

  hidden() {
    Array.from(document.querySelectorAll('.formula-item-list')).forEach(item => {
      item.style.display = 'none'
    })
  }
}

export default Tool
