import { FormulaItem } from './index'

const phonetics = [
  {
    name: '基本规则',
    icon: 'phonetic',
    formula: '\\[\\phonetic{}\\]',
  },
  {
    name: '长元音',
    icon: 'po_1',
    formula: 'ɑː',
  },
  {
    name: '长元音',
    icon: 'po_2',
    formula: 'ɔ:',
  },
  {
    name: '长元音',
    icon: 'po_3',
    formula: 'ɜː',
  },
  {
    name: '长元音',
    icon: 'po_4',
    formula: 'i:',
  },
  {
    name: '长元音',
    icon: 'po_5',
    formula: 'u:',
  },
  {
    name: '短元音',
    icon: 'po_6',
    formula: '^',
  },
  {
    name: '短元音',
    icon: 'po_7',
    formula: 'ɒ',
  },
  {
    name: '短元音',
    icon: 'po_8',
    formula: 'ə',
  },
  {
    name: '短元音',
    icon: 'po_9',
    formula: 'ɪ',
  },
  {
    name: '短元音',
    icon: 'po_10',
    formula: 'ʊ',
  },
  {
    name: '短元音',
    icon: 'po_11',
    formula: 'e',
  },
  {
    name: '短元音',
    icon: 'po_12',
    formula: 'æ',
  },
  {
    name: '双元音',
    icon: 'po_13',
    formula: 'eɪ',
  },
  {
    name: '双元音',
    icon: 'po_14',
    formula: 'aɪ',
  },
  {
    name: '双元音',
    icon: 'po_15',
    formula: 'ɔɪ',
  },
  {
    name: '双元音',
    icon: 'po_16',
    formula: 'ɪə',
  },
  {
    name: '双元音',
    icon: 'po_17',
    formula: 'eə',
  },
  {
    name: '双元音',
    icon: 'po_18',
    formula: 'ʊə',
  },
  {
    name: '双元音',
    icon: 'po_19',
    formula: 'əʊ',
  },
  {
    name: '双元音',
    icon: 'po_20',
    formula: 'aʊ',
  },
  {
    name: '清辅音',
    icon: 'po_21',
    formula: 'p',
  },
  {
    name: '清辅音',
    icon: 'po_22',
    formula: 't',
  },
  {
    name: '清辅音',
    icon: 'po_23',
    formula: 'k',
  },
  {
    name: '清辅音',
    icon: 'po_24',
    formula: 'f',
  },
  {
    name: '清辅音',
    icon: 'po_25',
    formula: 'θ',
  },
  {
    name: '清辅音',
    icon: 'po_26',
    formula: 's',
  },
  {
    name: '清辅音',
    icon: 'po_27',
    formula: 'b',
  },
  {
    name: '清辅音',
    icon: 'po_28',
    formula: 'd',
  },
  {
    name: '清辅音',
    icon: 'po_29',
    formula: 'g',
  },
  {
    name: '清辅音',
    icon: 'po_30',
    formula: 'v',
  },
  {
    name: '清辅音',
    icon: 'po_31',
    formula: 'ð',
  },
  {
    name: '清辅音',
    icon: 'po_32',
    formula: 'z',
  },
  {
    name: '清辅音',
    icon: 'po_33',
    formula: 'ʃ',
  },
  {
    name: '清辅音',
    icon: 'po_34',
    formula: 'h',
  },
  {
    name: '清辅音',
    icon: 'po_35',
    formula: 'ts',
  },
  {
    name: '清辅音',
    icon: 'po_36',
    formula: 'tʃ',
  },
  {
    name: '清辅音',
    icon: 'po_37',
    formula: 'j',
  },
  {
    name: '清辅音',
    icon: 'po_38',
    formula: 'tr',
  },
  {
    name: '浊辅音',
    icon: 'po_39',
    formula: 'ʒ',
  },
  {
    name: '浊辅音',
    icon: 'po_40',
    formula: 'r',
  },
  {
    name: '浊辅音',
    icon: 'po_41',
    formula: 'dz',
  },
  {
    name: '浊辅音',
    icon: 'po_42',
    formula: 'dʒ',
  },
  {
    name: '浊辅音',
    icon: 'po_43',
    formula: 'dr',
  },
  {
    name: '半元音',
    icon: 'po_44',
    formula: 'w',
  },
  {
    name: '鼻音',
    icon: 'po_45',
    formula: 'm',
  },
  {
    name: '鼻音',
    icon: 'po_46',
    formula: 'n',
  },
  {
    name: '鼻音',
    icon: 'po_47',
    formula: 'ŋ',
  },
  {
    name: '边音',
    icon: 'po_48',
    formula: 'l',
  },
] as FormulaItem[]

export default phonetics
