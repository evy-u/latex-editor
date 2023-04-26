import radicals from './radical'
import trigonometricFunction from './trigonometricFunction'
import fonts from './font'
import because from './because'
import geometry from './geometry'
import upper from './upper'
import calculate from './calculate'
import compare from './compare'
import circle from './circle'
import shape from './shape'
import frac from './frac'
import greek from './greek'
import { baseIcon, transIcon } from './base'
export const fontIconBaseUrl = 'https://homework-webfront.oss-cn-beijing.aliyuncs.com/LatexIcon/'

export interface FormulaItem {
  name: string
  icon: string
  formula: string
  isHandWrite?: boolean
  // example: string
  exampleList: {
    content: string
    isLatex: boolean
  }[]
}

export interface FormulaTypeItem {
  id: number
  name: string
  icon: string
  data: FormulaItem[] | string[]
  visibleDataList?: boolean
  isBase?: boolean
  desc?: string
}
const list: FormulaTypeItem[] = [
  {
    id: 1,
    name: '直接使用',
    icon: '',
    data: baseIcon,
    isBase: true,
  },
  {
    id: 2,
    name: '需要转义',
    icon: '',
    data: transIcon,
    isBase: true,
    desc: `escape字符表示原义时，前面加 \\，代表的是这个符号本身
由于以下字符在LaTeX中有特殊含义，例如：\\frac{1}{2} 中的大括号。
为了防止混淆，在以下字符表示自身含义时，需要在其前加 \\`,
  },
  {
    id: 3,
    name: '希腊字母',
    icon: '',
    data: greek,
  },
  {
    id: 4,
    name: '运算符号',
    icon: '',
    data: calculate,
  },
  {
    id: 5,
    name: '比较符号',
    icon: '',
    data: compare,
    desc: `大于号及小于号直接使用 >, <`,
  },
  {
    id: 6,
    name: '几何符号',
    icon: '',
    data: geometry,
  },
  // TODO:

  {
    id: 7,
    name: '逻辑符号',
    icon: '',
    data: because,
  },

  {
    id: 8,
    name: '顶部符号',
    icon: '',
    data: upper,
  },

  {
    id: 9,
    name: '三角函数',
    icon: '',
    data: trigonometricFunction,
  },
  {
    id: 11,
    name: '含圈符号',
    icon: '',
    data: circle,
  },
  {
    id: 12,
    name: '形状符号',
    icon: '',
    data: shape,
  },
  {
    id: 13,
    name: '分式',
    icon: '',
    data: frac,
  },
  {
    id: 14,
    name: '根式',
    icon: '',
    data: radicals,
  },

  {
    id: 15,
    name: '字体',
    icon: '',
    data: fonts,
  },
]

export default list
