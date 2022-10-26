import radicals from './radical/radical'
import trigonometricFunction from './trigonometricFunction/trigonometricFunction'
import fonts from './font/font'

import radicalIcon from './radical/img/icon.jpg'
import trigonometricFunctionIcon from './trigonometricFunction/img/icon.jpg'
import fontIcon from './font/img/icon.png'

export interface FormulaItem {
	name: string
	icon: string
	formula: string
	desc: string
}

export interface FormulaTypeItem {
	name: string
	icon: string
	data: FormulaItem[]
	visibleDataList?: boolean
}
const list: FormulaTypeItem[] = [
	{
		name: '根式角标',
		icon: radicalIcon,
		data: radicals,
	},
	{
		name: '三角函数',
		icon: trigonometricFunctionIcon,
		data: trigonometricFunction,
	},
	{
		name: '字体',
		icon: fontIcon,
		data: fonts,
	},
]

export default list
