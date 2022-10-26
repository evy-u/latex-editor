<template>
  <Tool v-if="isTool" :editRef="editRef" @handleClickFormula="handleClickFormula"></Tool>
  <div contenteditable="true" class="editor-content" ref="editRef" v-bind:innerHTML="editHtmlStr"></div>
  {{ editContent.length }}
</template>
<script setup lang="ts">
import Tool from './components/tool/Tool.vue'

import { withDefaults, defineProps, watch, onMounted, nextTick } from 'vue'
import { setSelectionRange, insertContent, contentToHtml, observerNode, getNodeIdByDeep } from './utils'
import { FormulaItem } from './components/tool/formula'
import { SignItem, NameType } from './latex/type'
const props = withDefaults(
  defineProps<{
    isTool?: boolean
  }>(),
  {
    isTool: true,
  }
)

const editRef = $ref<InstanceType<typeof HTMLDivElement>>() // 编辑框元素
let editContent = $ref<string>('222\\sqrt{\\sqrt{}}') // latex公式串
let signTree = $ref<SignItem[]>([]) // latex 公式树
let editHtmlStr = $computed(() => {
  // latex HTML串
  const { resultHtml, contentTree } = contentToHtml(editContent)
  signTree = contentTree
  return resultHtml
})
let cursorNodeIndex = $ref<number | null>(null) // 光标在元素的index
let cursorParentNode = $ref<HTMLElement | null>(null) // 光标所在的元素(直接父元素，包含Text型元素)
let cursorContentIndex = $ref<number | null>(null) // 光标在editContent中的index

watch(
  () => signTree,
  () => {
    nextTick(() => {
      if (editRef && cursorNodeIndex === null) {
        setDefaultCursorPosition()
      }
      if (editRef && cursorNodeIndex !== null) {
        let id = cursorParentNode?.className.split('-')[1]
        console.log(11, cursorParentNode?.className)
        if (!id) return
        const node = getNodeIdByDeep(signTree, id)
        console.log(node, '888')
        if (!node) return
        if (node?.name === NameType.txt) {
          cursorParentNode = document.querySelector(`.tx-${node.__id}`) as HTMLElement
          cursorNodeIndex = node.end
          cursorContentIndex = node.__end
          setSelectionRange(cursorParentNode, cursorNodeIndex, cursorNodeIndex)
        }
        if (node?.name === NameType.latex && !node.brackets) {
          cursorParentNode = document.querySelector(`.lx-${node.__id}`) as HTMLElement
          cursorNodeIndex = node.end
          cursorContentIndex = node.__end
          let __node = cursorParentNode?.childNodes[0] as HTMLElement
          setSelectionRange(__node, cursorNodeIndex, cursorNodeIndex)
        }
      }
    })
  }
)

onMounted(() => {
  // observerNode(editRef)
})

// 点击公式
function handleClickFormula(dataItem: FormulaItem) {
  const { formula } = dataItem
  editContent = insertContent(editContent, formula, cursorContentIndex)
}

/**
 * @description  默认光标位置
 *
 * 如果最后一个元素带括号，默认光标在最后一个括号里的最后一位
 * 否则，默认光标在editRef的最后一位
 */
function setDefaultCursorPosition() {
  const lastItem = Array.from(editRef.childNodes).slice(-1)[0] as HTMLElement // 最后一个元素
  if (lastItem.className.includes('lx-')) {
    const node = getNodeIdByDeep(signTree, lastItem.className.split('-')[1])
    if (!node) {
      setCursorEnd()
      return
    }
    if (node.name == NameType.txt) {
      cursorParentNode = document.querySelector(`.tx-${node.__id}`) as HTMLElement
      cursorNodeIndex = node.end
      cursorContentIndex = node.__end
      setSelectionRange(cursorParentNode, cursorNodeIndex, cursorNodeIndex)
    }
  } else {
    setCursorEnd()
  }
}

function setCursorEnd() {
  cursorParentNode = editRef
  setSelectionRange(cursorParentNode)
}
</script>
<style scoped lang="scss">
.editor-content {
  box-sizing: border-box;
  margin-top: 30px;
  outline: auto;
  min-width: 100%;
  min-height: 200px;
  padding: 16px;
}
</style>
