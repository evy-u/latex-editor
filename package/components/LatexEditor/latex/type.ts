import { type MatchRecursiveValueNameMatch } from 'xregexp'

export enum NameType {
  txt = 'txt', // 文本
  latex = 'latex', // latex符号
  latexText = 'latexText', // latex符号
  special = 'special', // 换行符
  between = 'between',
}

export type MatchValueItem = SignItem & MatchRecursiveValueNameMatch

// \\sqrt{3\\sqrt{4}}  length:16
export interface SignItem {
  brackets?: {
    [key: number]: SignItem[]
  }
  name: NameType
  value: string // 只有latex关键字  比如\\sqrt
  __value: string // 带括号以及括号里面的内容, 比如 \\sqrt{3\\sqrt{4}}
  start: number // 在小范围内文本串中的位置, 3\\sqrt{4} 0
  end: number // 在小范围内文本串中的位置 3\\sqrt{4} 9
  __start: number // 在整个latex文本串中的位置 3\\sqrt{4} 6
  __end: number // 在整个latex文本串中的位置  3\\sqrt{4} 15
  parentNode?: SignItem
  __id: number
}
