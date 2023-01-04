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
  name: string
  icon: string
  data: FormulaItem[] | string[]
  visibleDataList?: boolean
  isBase?: boolean
  desc?: string
}
const list: FormulaTypeItem[] = [
  {
    name: '直接使用',
    icon: '',
    data: baseIcon,
    isBase: true,
  },
  {
    name: '需要转义',
    icon: '',
    data: transIcon,
    isBase: true,
    desc: `escape字符表示原义时，前面加 \\，代表的是这个符号本身
由于以下字符在LaTeX中有特殊含义，例如：\\frac{1}{2} 中的大括号。
为了防止混淆，在以下字符表示自身含义时，需要在其前加 \\`,
  },
  {
    name: '希腊字母',
    icon: '',
    data: greek,
  },
  {
    name: '运算符号',
    icon: '',
    data: calculate,
  },
  {
    name: '比较符号',
    icon: '',
    data: compare,
    desc: `大于号及小于号直接使用 >, <`,
  },
  {
    name: '几何符号',
    icon: '',
    data: geometry,
  },
  // TODO:

  {
    name: '逻辑符号',
    icon: '',
    data: because,
  },

  {
    name: '顶部符号',
    icon: '',
    data: upper,
  },

  {
    name: '比较符号',
    icon: '',
    data: compare,
  },
  {
    name: '三角函数',
    icon: '',
    data: trigonometricFunction,
  },
  {
    name: '含圈符号',
    icon: '',
    data: circle,
  },
  {
    name: '形状符号',
    icon: '',
    data: shape,
  },
  {
    name: '分式',
    icon: '',
    data: frac,
  },
  {
    name: '根式',
    icon: '',
    data: radicals,
  },

  {
    name: '字体',
    icon: '',
    data: fonts,
  },
]

export default list
