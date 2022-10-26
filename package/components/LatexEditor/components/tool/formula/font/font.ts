import underlineIcon from './img/underline.png'
import textbfIcon from './img/textbf.png'
import textitIcon from './img/textit.png'
import { FormulaItem } from '../index'

const fonts = [
	{
		name: '下划线',
		icon: underlineIcon,
		formula: '\\underline{}',
		desc: '',
	},
	{
		name: '斜体',
		icon: textitIcon,
		formula: '\\textit{}',
		desc: '',
	},
	{
		name: '粗体',
		icon: textbfIcon,
		formula: '\\textbf{}',
		desc: '',
	},
] as FormulaItem[]
export default fonts
