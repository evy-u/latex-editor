import { FormulaItem } from './index'

const fonts = [
  {
    name: '分式',
    icon: 'frac',
    formula: '\\frac{分子}{分母}',
    exampleList: [
      {
        content: '正确写法：\\frac{1}{2}',
        isLatex: false,
      },
      {
        content: '\\frac{1}{2}',
        isLatex: true,
      },
      {
        content: '错误写法：\\frac{1}',
        isLatex: false,
      },
      {
        content: '\\frac{1}',
        isLatex: true,
      },
    ],
  },
] as FormulaItem[]

export default fonts
