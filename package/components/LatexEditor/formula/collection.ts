import { FormulaItem } from './index'

const collection = [
  {
    name: '并集，v0中为\\bigcup',
    icon: 'cup',
    formula: '\\cup',
  },
  {
    name: '交集，v0中为\\bigcap',
    icon: 'cap',
    formula: '\\cap',
  },
  {
    name: '子集',
    icon: 'subset',
    formula: '\\subset',
  },
  {
    name: '父集',
    icon: 'supset',
    formula: '\\supset',
  },
  {
    name: '属于',
    icon: 'in',
    formula: '\\in',
  },
  {
    name: '不属于',
    icon: 'notin',
    formula: '\\notin',
  },
  {
    name: '包含',
    icon: 'ni',
    formula: '\\ni',
  },
  {
    name: '不包含',
    icon: 'notni',
    formula: '\\notni',
  },
  {
    name: '空集',
    icon: 'emptyset',
    formula: '\\emptyset',
  },
  {
    name: '补集',
    icon: 'complement',
    formula: '\\complement',
  },
  {
    name: '父集或等于 ',
    icon: 'subseteq',
    formula: '\\subseteq',
  },
  {
    name: '超集或等于',
    icon: 'supseteq',
    formula: '\\supseteq',
  },
  {
    name: '非子集',
    icon: 'nsubset',
    formula: '\\nsubset',
  },
  {
    name: '非超集',
    icon: '',
    formula: '\\nsupset',
  },
  {
    name: '子集且不等于',
    icon: 'subsetneq',
    formula: '\\subsetneq',
  },
  {
    name: '父集且不等于',
    icon: 'supsetneq',
    formula: '\\supsetneq',
  },
  {
    name: '非子集也不等于',
    icon: 'nsubseteq',
    formula: '\\nsubseteq',
  },
  {
    name: '非父集也不等于',
    icon: 'nsupseteq',
    formula: '\\nsupseteq',
  },
] as FormulaItem[]
export { collection }
