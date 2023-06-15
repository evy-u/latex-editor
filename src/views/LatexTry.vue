<template>
  <div class="page-latex-try">
    <div class="try-option-panel">
      <div class="title">Latex Options</div>
      <div class="secondary-title">Common:</div>
      <div class="options-group">
        <div class="option-item">
          <span class="label">换行：</span>
          <el-checkbox id="display" v-model="options.lineBreak"></el-checkbox>
        </div>
        <div class="option-item">
          <span class="label">颜色：</span>
          <el-color-picker v-model="options.textColor" size="small" />
        </div>
      </div>

      <div class="secondary-title">For Developer:</div>
      <div class="option-item">
        <span class="label">divideChinese：</span>
        <el-checkbox id="display" v-model="options.divideChinese"></el-checkbox>
      </div>
      <div class="option-item">
        <span class="label">globalRender:</span>
        <el-checkbox id="display" v-model="options.globalRender"></el-checkbox>
        <el-button v-if="options.globalRender" type="primary" size="small" @click="doGlobalRender">DoRender</el-button>
      </div>
      <!-- <div class="option-item">
        <span class="label">wrapMathrm:</span>
        <el-checkbox id="display" v-model="options.wrapMathrm"></el-checkbox>
      </div>
      <div class="option-item">
        <span class="label">punctuation:</span>
        <el-checkbox id="display" v-model="options.punctuation"></el-checkbox>
      </div> -->
    </div>

    <div class="try-container">
      <div class="latex-editor"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, watch, nextTick } from 'vue'
import 'learnable-lib/dist/style.css'
import { LatexEditor, MathjaxOptionType } from 'latex-editor'

let content = $ref('这是一个latex渲染的例子\\frac{分子}{分母}\n7878')
let options = $ref<MathjaxOptionType>({
  wrapMathrm: true,
  punctuation: false,
  divideChinese: false,
  lineBreak: true,
  lineOuterMax: 20,
  blankLight: true,
  // display: 'block',
  lineHeight: '20px',
  textColor: '#333',
  alignBetween: false,
  globalRender: false,
})

let editor = $ref<InstanceType<typeof LatexEditor>>()

watch(
  () => options,
  () => {
    editor?.optionChange(options)
    nextTick(() => {
      editor?.globalRenderContent()
    })
  },
  {
    deep: true,
    immediate: false,
  }
)

function doGlobalRender() {
  editor?.globalRenderContent()
}

onMounted(() => {
  editor = new LatexEditor(document.querySelector('.latex-editor'), {
    // =\\left\\{\\frac{2x^{2}+2x}{x+1},x\\neq-1,\nx-1,x=-1.\\right\\}则函数f(x)奇偶性如何?
    content: '',
    mathOption: options,
  })
})
</script>
<style scoped lang="scss">
.page-latex-try {
  display: flex;
  width: 100vw;
  height: 100vh;
  font-family: Segoe UI Semibold, sans-serif;
  // background: #e7f0f4;
  .title {
    line-height: 40px;
    font-size: 24px;
    margin-bottom: 16px;
  }
  .try-option-panel {
    box-sizing: border-box;
    width: 300px;
    height: 100vh;
    overflow-y: auto;
    padding-left: 12px;
    padding-top: 30px;
    background: #28393c;
    color: #e7f0f4;

    .secondary-title {
      font-size: 18px;
      line-height: 40px;
      padding-left: 14px;
      color: #fff;
    }
    .option-item {
      display: flex;
      align-items: center;
      line-height: 40px;
      padding-left: 28px;
      .label {
        font-size: 14px;
        color: #d1d1d1;
        padding-right: 8px;
      }
    }
  }
  .try-container {
    box-sizing: border-box;
    flex: 1;
    padding: 32px 40px;
  }
  .latex-preview {
    margin-top: 24px;
    .preview-container {
      background: #fff;
      padding: 14px;
      border-radius: 6px;
      min-height: 100px;
    }
  }
}
</style>
