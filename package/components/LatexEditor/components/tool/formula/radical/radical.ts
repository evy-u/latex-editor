import { FormulaItem } from '../index'
import sqrtIcon from './img/sqrt.jpg'
import sqrtnIcon from './img/sqrt_n.jpg'

const radicals = [
	{
		name: '开平方',
		icon: sqrtIcon,
		formula: '\\sqrt{}',
		desc: '',
	},
	{
		name: '开n次方',
		icon: sqrtnIcon,
		formula: '\\sqrt[]{}',
		desc: '',
	},
] as FormulaItem[]

export default radicals
