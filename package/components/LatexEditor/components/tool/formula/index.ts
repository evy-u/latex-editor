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
export const fontIconBaseUrl = 'https://homework-webfront.oss-cn-beijing.aliyuncs.com/LatexIcon/'

export interface FormulaItem {
  name: string
  icon: string
  formula: string
  example: string
  exampleList: {
    content: string
    isLatex: boolean
  }[]
}

export interface FormulaTypeItem {
  name: string
  icon: string
  data: FormulaItem[]
  visibleDataList?: boolean
}
const list: FormulaTypeItem[] = [
  {
    name: '逻辑符号',
    icon: '',
    data: because,
  },
  {
    name: '几何符号',
    icon: '',
    data: geometry,
  },
  {
    name: '顶部符号',
    icon: '',
    data: upper,
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
    name: '希腊字母',
    icon: '',
    data: greek,
  },
  {
    name: '字体',
    icon: '',
    data: fonts,
  },
]

export default list
