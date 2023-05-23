import { FormulaItem } from './index'

const iints = [
  {
    name: '积分',
    icon: 'int',
    formula: '\\int',
    exampleList: [
      {
        content: '\\int用来表示积分符号，同样地，其上下标表示积分的上下限',
        isLatex: false,
      },
      {
        content: '\\int_{1}^{\\infty}',
        isLatex: true,
      },
    ],
  },
  {
    name: '多重积分',
    icon: 'iint',
    formula: '\\iint',
  },
  {
    name: '多重积分',
    icon: 'iiint',
    formula: '\\iiint',
  },
  {
    name: '多重积分',
    icon: 'iiiint',
    formula: '\\iiiint',
  },
] as FormulaItem[]

export default iints
