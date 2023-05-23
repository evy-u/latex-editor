import { FormulaItem } from './index'

const others = [
  {
    name: '下划线',
    icon: 'underline',
    formula: '\\underline{下划线}',
  },
  {
    name: '波浪线',
    icon: 'uwave',
    formula: '\\uwave{波浪线}',
  },
  {
    name: '斜体',
    icon: 'textit',
    formula: '\\textit{斜体}',
  },
  {
    name: '粗体',
    icon: 'textbf',
    formula: '\\textbf{粗体}',
  },
  {
    name: '颜色',
    icon: 'textcolor',
    formula: '\\textcolor{red}{红色}',
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
  {
    name: '下划线',
    icon: 'uline',
    formula: '\\_{10}',
  },
  {
    name: '四线三格',
    icon: 'fourlineruled',
    formula: '\\fourlineruled{10}',
  },
] as FormulaItem[]

export default others
