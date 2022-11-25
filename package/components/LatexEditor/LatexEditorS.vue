<template>
  <Tool v-if="isTool" :editRef="editRef" @handleClickFormula="handleClickFormula"></Tool>
  <div contenteditable="true" class="editor-content" ref="editRef" v-bind:innerHTML="editHtmlStr"></div>
  <div>{{ editContent }}</div>
  {{ editContent.length }}
</template>
<script setup lang="ts">
import Tool from './components/tool/Tool.vue'

import { withDefaults, defineProps, watch, onMounted, nextTick } from 'vue'
import { setSelectionRange, insertContent, contentToHtml, getNodeByDeep, getNodeIdByDeep, getCursorInfo, CursorInfo } from './utils'
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
let editContent = $ref<string>('\\sqrt{11\\bar{v\\sqrt{5}}}22\\sqrt{66\\sqrt{3}}') // latex公式串 \\frac{}{}\\sin777\\sqrt{66\\cos}hh
let signTree = $ref<SignItem[]>([]) // latex 公式树
let editHtmlStr = $computed(() => {
  // latex HTML串
  const { resultHtml, contentTree } = contentToHtml(editContent)
  signTree = contentTree
  return resultHtml
})

let cursorInfo = $ref<CursorInfo>({
  cursorNodeIndex: 0, // 光标在元素的index
  cursorNode: null, // 光标所在的元素(直接父元素，包含Text型元素)
  cursorContentIndex: 0, // 光标在editContent中的index
  currentNodeId: 0, // 光标所在节点的id
})

watch(
  () => signTree,
  () => {
    nextTick(() => {
      if (editRef && !cursorInfo?.cursorNodeIndex !== null) {
        setDefaultCursorPosition()
      }
      if (editRef && cursorInfo?.cursorNodeIndex !== null) {
        if (!cursorInfo?.currentNodeId) return
        const node = getNodeIdByDeep(signTree, String(cursorInfo.currentNodeId))
        if (!node) return
        cursorInfo = getCursorInfo(node)
        if (cursorInfo && cursorInfo!.cursorNode) {
          setSelectionRange(cursorInfo.cursorNode, cursorInfo.cursorNodeIndex, cursorInfo.cursorNodeIndex)
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
  editContent = insertContent(editContent, formula, cursorInfo!.cursorContentIndex)
}

/**
 * @description  默认光标位置
 *
 * 如果最后一个元素带括号，默认光标在最后一个括号里的最后一位
 * 否则，默认光标在editRef的最后一位
 */
function setDefaultCursorPosition() {
  const lastItem = getNodeByDeep(editRef) as HTMLElement // 最后一个元素
  // console.log('lastItem:', lastItem, lastItem?.className.split('-')[1])
  if (lastItem?.className.includes('lx-') || lastItem?.className.includes('tx-')) {
    const node = getNodeIdByDeep(signTree, lastItem?.className.split('-')[1])
    if (!node) {
      setCursorEnd()
      return
    }
    cursorInfo = getCursorInfo(node)
    // console.log('cursorInfo:', cursorInfo)
    if (cursorInfo) {
      setSelectionRange(cursorInfo.cursorNode, cursorInfo.cursorNodeIndex, cursorInfo.cursorNodeIndex)
    }
  } else {
    setCursorEnd()
  }
}

function setCursorEnd() {
  cursorInfo!.cursorNode = editRef
  setSelectionRange(cursorInfo!.cursorNode)
}
</script>
<style scoped lang="scss">
.editor-content {
  box-sizing: border-box;
  margin-top: 30px;
  outline: none;
  min-width: 100%;
  min-height: 200px;
  padding: 16px;
  border: 2px solid rgb(206, 212, 218);
  border-radius: 6px;
  font-family: Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  font-size: 1.4rem;
  span {
    color: #f99 !important;
  }
  span [class~='lx'] {
    color: red;
  }
  span[class~='tx'] {
    color: red;
  }
}
</style>
