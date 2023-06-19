export declare const fontIconBaseUrl = 'https://homework-webfront.oss-cn-beijing.aliyuncs.com/LatexIcon/'
export interface FormulaItem {
  name: string
  icon: string
  formula: string
  isHandWrite?: boolean
  exampleList: {
    content: string
    isLatex: boolean
  }[]
}
export interface FormulaTypeItem {
  id: number
  name: string
  icon: string
  data: FormulaItem[]
  visibleDataList?: boolean
  isBase?: boolean
  desc?: string
}
declare const list: FormulaTypeItem[]
export default list
