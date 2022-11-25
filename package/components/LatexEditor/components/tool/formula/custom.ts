import { FormulaItem } from '.'

const customs = [
  {
    name: '带分数',
    icon: 'mix',
    formula: '\\mix, (这个符号实际不会出现不需要展示)',
  },
  {
    name: '删除',
    icon: 'deletion',
    formula: '\\deletion{xx}, (直接删除)',
  },
  {
    name: '大省略符号',
    icon: 'omitted',
    formula: "\\omitted， (学生写的大省略符号，直接替换成'---')",
  },
  {
    name: '空格',
    icon: 'tab',
    formula: 'A\\tabB， (直接替换成空格)',
  },
  {
    name: '对号',
    icon: 'cmark',
    formula: '\\cmark',
  },
  {
    name: '错号',
    icon: 'xmark',
    formula: '\\xmark',
  },
  {
    name: '插入',
    icon: 'insert',
    formula: '\\insert{+3},( 直接删除，需要连带后面的一个{}删除)',
  },
  {
    name: '颠倒符号',
    icon: 'reverse',
    formula: '\\reverse{好}{你}',
  },
  // {
  //   name: '下划线',
  //   icon: '\\underline{这句话带有下划线}',
  //   formula: '\\underline{这句话带有下划线}',
  // },
  // {
  //   name: '波浪线',
  //   icon: '\\uwave{这句话有波浪线}',
  //   formula: '\\uwave{这句话有波浪线}',
  // },
  {
    name: '错误的中文汉字',
    icon: 'wrong',
    formula: '\\wrong{我}, 待定',
  },
  {
    name: '米字格',
    icon: 'chnfield',
    formula: '\\chnfield{ab}， (直接删除，需要连带后面的一个{}删除。)',
  },
  {
    name: '英语格',
    icon: 'engfield',
    formula: '\\engfield{ab}， (直接删除，需要连带后面的一个{}删除。)',
  },
  // {
  //   name: '斜体',
  //   icon: '\\textit{我}',
  //   formula: '\\textit{我}',
  // },
  // {
  //   name: '粗体',
  //   icon: '\\textbf{我}',
  //   formula: '\\textbf{我}',
  // },
  // {
  //   name: '文字颜色',
  //   icon: '字颜色显示为红色, 例如\\textcolor{red}{错误}',
  //   formula: '文字颜色显示为红色, 例如\\textcolor{red}{错误}',
  // },
  {
    name: '<s>',
    icon: '<s>',
    formula: '直接删除',
  },
  {
    name: '</s>',
    icon: '</s>',
    formula: '直接删除',
  },
  {
    name: '<unk>',
    icon: '<unk>',
    formula: '直接删除',
  },
] as FormulaItem[]
export { customs }
