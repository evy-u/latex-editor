<template>
	<div class="formula-list">
		<el-popover v-for="item in formulas" :key="item.name" placement="bottom-start" v-model:visible="item.visibleDataList">
			<template #reference>
				<div class="type-btn" @click="item.visibleDataList = true">
					<img :src="item.icon" /><span>{{ item.name }}</span>
				</div>
			</template>
			<div v-for="dataItem in item.data" :key="dataItem.name" class="formula-item" @click="handleClickFormula(dataItem)">
				<img :src="dataItem.icon" /> {{ dataItem.desc }}
			</div>
		</el-popover>
	</div>
	
</template>
<script setup lang="ts">
import formulas, { FormulaTypeItem, FormulaItem } from './formula/index'
import { ElPopover, ElButton } from 'element-plus'
// import { KeMathJax, htmlToImageBase64, ImageType } from 'learnable-lib'
// import { InputHTMLAttributes, onMounted } from 'vue-demi'
// import { RefTypes } from 'vue/macros'
import { nextTick, defineEmits } from 'vue'
import { getCursorPosition } from '../../utils';
// import { setSelectionRange, downloadImg, getCursorPosition } from './latexEditor'
import {withDefaults,defineProps } from "vue"

const props = withDefaults(defineProps<{
  editRef: InstanceType<typeof HTMLDivElement>
}>(), {
})



const emits = defineEmits<{
  (event: 'handleClickFormula', param:FormulaItem):void
}>()
// let cursorPosition = $ref<number>(0) // 光标位置

async function handleClickFormula(dataItem: FormulaItem) {
  emits('handleClickFormula', dataItem)
	// const { formula } = dataItem
	// const { start } = getCursorPosition(props.editRef) // 获取光标所在位置
	// cursorPosition = start
	// content = content.substring(0, cursorPosition) + formula + content.substring(cursorPosition, content.length) // 往光标所在位置插入内容

	// await nextTick()
	// if ((formula.at(-1) === '}' && formula.at(-2) === '{') || (formula.at(-1) === ']' && formula.at(-2) === '[')) {
	// 	// 如果latex符号末尾是带大括号和中括号的，鼠标定位在括号内
	// 	cursorPosition += formula.length - 1
	// } else {
	// 	cursorPosition += formula.length as number
	// }
	// console.log('cursorPosition', cursorPosition, textareaRef)

	// setSelectionRange(textareaRef, cursorPosition, cursorPosition)
}

// async function exportImg(type: ImageType) {
// 	const ele = document.querySelector('.latex-transform-container mjx-container') as HTMLDivElement
// 	if (!ele) {
// 		return
// 	}

// 	const url = await htmlToImageBase64(ele, type)
// 	downloadImg(url)
// }

// const valueLength = $computed(() => {
// 	return content.length
// })

// onMounted(() => {
// 	setSelectionRange(textareaRef, valueLength, valueLength)
// })
</script>
<style scoped lang="scss">
.formula-list {
	display: flex;
}
.type-btn {
	display: flex;
	flex-direction: column;
	height: 70px;
	justify-content: space-between;
	margin-right: 20px;
	cursor: pointer;
	img {
		width: 60px;
	}
}
.formula-item {
	width: 80px;
	margin-right: 20px;
	margin-top: 10px;
	margin-bottom: 10px;
	cursor: pointer;
	img {
		width: 50px;
	}
}
.latex-transform-container {
	border: 1px solid #999;
	width: 100%;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.operate-btns {
	margin-top: 20px;
}
</style>
