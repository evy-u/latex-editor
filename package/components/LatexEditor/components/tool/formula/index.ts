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
import { dots } from './dots'
import { collection } from './collection'
import { rangeList } from './range'
import arrows from './arrow'
import marks from './mark'
import orders from './order'
export const fontIconBaseUrl = 'https://homework-webfront.oss-cn-beijing.aliyuncs.com/LatexIcon/'
import { uniqueId } from 'lodash'
import iints from './iint'
import multipleLines from './multipleLine'
import matrixs from './matrix'
import chemistrys from './chemistry'
import { customs } from './custom'
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
  id: string
  name: string
  icon: string
  data: FormulaItem[] | string[]
  visibleDataList?: boolean
  isBase?: boolean
  desc?: string
}
const list: FormulaTypeItem[] = [
  {
    id: uniqueId(),
    name: '直接使用',
    icon: '',
    data: baseIcon,
    isBase: true,
  },
  {
    id: uniqueId(),
    name: '需要转义',
    icon: '',
    data: transIcon,
    isBase: true,
    desc: `escape字符表示原义时，前面加 \\，代表的是这个符号本身
由于以下字符在LaTeX中有特殊含义，例如：\\frac{1}{2} 中的大括号。
为了防止混淆，在以下字符表示自身含义时，需要在其前加 \\`,
  },
  {
    id: uniqueId(),
    name: '希腊字母',
    icon: '',
    data: greek,
  },
  {
    id: uniqueId(),
    name: '运算符号',
    icon: '',
    data: calculate,
  },
  {
    id: uniqueId(),
    name: '比较符号',
    icon: '',
    data: compare,
    desc: `大于号及小于号直接使用 >, <`,
  },
  {
    id: uniqueId(),
    name: '几何符号',
    icon: '',
    data: geometry,
  },
  {
    id: uniqueId(),
    name: '点',
    icon: '',
    data: dots,
  },
  {
    id: uniqueId(),
    name: '逻辑符号',
    icon: '',
    data: because,
  },
  {
    id: uniqueId(),
    name: '集合符号',
    icon: '',
    data: collection,
  },
  {
    id: uniqueId(),
    name: '范围',
    icon: '',
    data: rangeList,
  },
  {
    id: uniqueId(),
    name: '三角函数',
    icon: '',
    data: trigonometricFunction,
  },
  {
    id: uniqueId(),
    name: '箭头',
    icon: '',
    data: arrows,
  },
  {
    id: uniqueId(),
    name: '含圈符号',
    icon: '',
    data: circle,
  },
  {
    id: uniqueId(),
    name: '形状符号',
    icon: '',
    data: shape,
  },
  {
    id: uniqueId(),
    name: '标记',
    icon: '',
    data: marks,
  },
  {
    id: uniqueId(),
    name: '顶部符号',
    icon: '',
    data: upper,
  },
  {
    id: uniqueId(),
    name: '序号',
    icon: '',
    data: orders,
  },
  {
    id: uniqueId(),
    name: '分式',
    icon: '',
    data: frac,
  },
  {
    id: uniqueId(),
    name: '根式',
    icon: '',
    data: radicals,
  },
  {
    id: uniqueId(),
    name: '积分',
    icon: '',
    data: iints,
  },
  {
    id: uniqueId(),
    name: '多行表达式',
    icon: '',
    data: multipleLines,
    desc: '定义函数的时候经常需要分情况给出表达式，可使用\\left{…\\right}。其中，使用\\来分类，使用&指示需要对齐的位置。',
  },
  {
    id: uniqueId(),
    name: '矩阵',
    icon: '',
    data: matrixs,
    desc: '使用\\begin{matrix}…\\end{matrix}这样的形式来表示矩阵，在\\begin与\\end之间加入矩阵中的元素即可。矩阵的行之间使用\\分隔，列之间使用&分隔。如果要对矩阵加括号，可以像上文中提到的一样，使用\\left与\\right配合表示括号符号。也可以使用特殊的matrix。即替换\\begin{matrix}…\\end{matrix}中的matrix为pmatrix，bmatrix，Bmatrix，vmatrix, Vmatrix。',
  },
  {
    id: uniqueId(),
    name: '化学',
    icon: '',
    data: chemistrys,
    desc: '基本格式如下\\rightarrow\\limits^{}_{}, \\rightarrow可替换为\\rightleftarrow, \\leftarrow, =, ^{}和_{}可选，分别表示箭头上方和下方的内容',
  },
  {
    id: uniqueId(),
    name: '自定义',
    icon: '',
    data: customs,
  },
  // TODO: 音标
  {
    id: uniqueId(),
    name: '字体',
    icon: '',
    data: fonts,
  },
]

export default list

// TODO: try demo
