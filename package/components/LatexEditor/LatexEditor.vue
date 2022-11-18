<template>
  <Tool v-if="isTool" :editRef="editRef" @handleClickFormula="handleClickFormula"></Tool>
  <div contenteditable="true" class="editor-content" ref="editRef" v-bind:innerHTML="editHtmlStr"></div>
  {{ editContent.length }}
</template>
<script setup lang="ts">
import Tool from './components/tool/Tool.vue'

import { withDefaults, defineProps, watch, onMounted, nextTick } from 'vue'
import { setSelectionRange, insertContent, contentToHtml, observerNode, getNodeIdByDeep, getCursorInfo, CursorInfo } from './utils'
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
      if (editRef && !cursorInfo?.cursorNodeIndex) {
        setDefaultCursorPosition()
      }
      if (editRef && cursorInfo?.cursorNodeIndex) {
        // let id = cursorInfo?.cursorNode?.className.split('-')[1] || ''
        if (!cursorInfo.currentNodeId) return
        console.log(cursorInfo.currentNodeId, 'id-89898', signTree)
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
  const lastItem = Array.from(editRef.childNodes).slice(-1)[0] as HTMLElement // 最后一个元素
  console.log(lastItem.className.split('-')[1])
  if (lastItem.className.includes('lx-')) {
    const node = getNodeIdByDeep(signTree, lastItem.className.split('-')[1])
    if (!node) {
      setCursorEnd()
      return
    }
    cursorInfo = getCursorInfo(node)
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
