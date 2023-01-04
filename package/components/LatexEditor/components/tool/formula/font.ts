import { FormulaItem } from './index'

const fonts = [
  {
    name: '下划线',
    icon: 'underline',
    formula: '\\underline{}',
  },
  {
    name: '斜体',
    icon: 'textit',
    formula: '\\textit{}',
  },
  {
    name: '粗体',
    icon: 'textbf',
    formula: '\\textbf{}',
  },
  {
    name: '上角标',
    icon: 'sub',
    formula: '^{}',
  },
  {
    name: '下角标',
    icon: 'sup',
    formula: '_{}',
  },
] as FormulaItem[]

export default fonts
