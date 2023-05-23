import { flattenDeep, uniq } from 'lodash'
import formulaList from '../formula/index'

export const otherList = ['\n', '^', '_']
const inFormulaListOther = ['begin', 'end', 'left', 'right', 'limits']

function getSignList() {
  return uniq(flattenDeep(formulaList.map(item => item.data.map(sub => sub.icon))))
}

export default getSignList().concat(otherList).concat(inFormulaListOther)
