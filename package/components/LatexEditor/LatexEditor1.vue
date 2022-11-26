<template>
  <Tool v-if="isTool" @handleClickFormula="handleClickFormula"></Tool>
  <div contenteditable="true" class="editor-content" ref="editRef"></div>
  <div>{{ editContent }}</div>
  <div>
    <KeMathJax :content="editContent" lineHeight="20px" class="latex-container"></KeMathJax>
  </div>
</template>
<script setup lang="ts">
import Tool from './components/tool/Tool.vue'
import { withDefaults, defineProps, watch, onMounted, nextTick } from 'vue'
import { setSelectionRange, CursorInfo, insertNode, observerNode } from './utils'
import { FormulaItem } from './components/tool/formula'
import { SignItem } from './latex/type'
import { watchOnce } from '@vueuse/shared'
import { KeMathJax } from 'learnable-lib'
import 'learnable-lib/dist/style.css'

const props = withDefaults(
  defineProps<{
    isTool?: boolean
  }>(),
  {
    isTool: true,
  }
)
let editContent = $ref('') // latex公式串 \\frac{}{}\\sin777\\sqrt{66\\cos}hh
const editRef = $ref<InstanceType<typeof HTMLDivElement>>() // 编辑框元素
let cursorInfo = $ref<CursorInfo>({
  cursorNodeIndex: 0, // 光标在元素的index
  cursorNode: editRef, // 光标所在的元素(直接父元素，包含Text型元素)
  cursorContentIndex: 0, // 光标在editContent中的index
  currentNodeId: 0, // 光标所在节点的id
})

onMounted(() => {
  cursorInfo.cursorNode = editRef as HTMLElement
})
watch(
  () => cursorInfo,
  () => {
    console.log('cursorInfo:', cursorInfo)
  },
  {
    deep: true,
  }
)

watch(
  () => [cursorInfo.cursorNode, editContent],
  () => {
    observerNode(editRef, (selection: Selection | null) => {
      if (selection && selection?.anchorNode) {
        if (selection?.anchorNode.nodeType === 1) {
          if (selection?.anchorNode.childNodes[0]?.nodeName === 'BR') {
            selection?.anchorNode.removeChild(selection?.anchorNode.childNodes[0])
          }
          cursorInfo.cursorNode = selection.anchorNode as HTMLElement
          cursorInfo.cursorNodeIndex = selection.anchorOffset
        } else {
          cursorInfo.cursorNode = editRef
          cursorInfo.cursorNodeIndex = 0
        }
        setEditContent()
      }
    })
  },
  {
    immediate: true,
  }
)

// 点击公式
function handleClickFormula(dataItem: FormulaItem) {
  const { formula } = dataItem
  const __cursorInfo = insertNode(formula, cursorInfo!.cursorNode)
  console.log('handleClickFormula: ', __cursorInfo)
  if (__cursorInfo) {
    cursorInfo.cursorNode = __cursorInfo.cursorNode
    cursorInfo.cursorNodeIndex = __cursorInfo.cursorIndex
    setSelectionRange(cursorInfo.cursorNode, cursorInfo.cursorNodeIndex, cursorInfo.cursorNodeIndex)
  }
  setEditContent()
}

function setEditContent() {
  editContent = editRef?.innerText || ''
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
