import { FormulaItem } from './index'

const fonts = [
  {
    name: '正负号',
    icon: 'pm',
    formula: '\\pm',
  },
  {
    name: '负正号',
    icon: 'mp',
    formula: '\\mp',
  },

  {
    name: '点乘号',
    icon: 'cdot',
    formula: '\\cdot',
  },
  {
    name: '叉乘号',
    icon: 'times',
    formula: '\\times',
  },
  {
    name: '除号',
    icon: 'div',
    formula: '\\div',
  },
  {
    name: '绝对值',
    icon: 'mid',
    formula: '\\mid',
  },
  {
    name: '求积',
    icon: 'prod',
    formula: '\\prod',
  },
  {
    name: '求和',
    icon: 'sum',
    formula: '\\sum',
  },
] as FormulaItem[]

export default fonts
