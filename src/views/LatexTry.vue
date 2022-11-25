<template>
  <div class="page-latex-try">
    <div class="option-panel">
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
      </div>
      <div class="option-item">
        <span class="label">wrapMathrm:</span>
        <el-checkbox id="display" v-model="options.wrapMathrm"></el-checkbox>
      </div>
      <div class="option-item">
        <span class="label">punctuation:</span>
        <el-checkbox id="display" v-model="options.punctuation"></el-checkbox>
      </div>
    </div>

    <div class="try-container">
      <div class="content-textarea">
        <el-input type="textarea" :rows="10" :cols="100" v-model="content" :autosize="{ minRows: 10, maxRows: 10 }"></el-input>
      </div>
      <div class="latex-preview">
        <div class="title">Letax Render: <el-button :type="'primary'" @click="doGlobalRender">Do Render</el-button></div>
        <div class="preview-container">
          <KeMathJax
            :content="content"
            :display="options.lineBreak ? 'block' : 'inline-block'"
            :wrapMathrm="options.wrapMathrm"
            :text-color="options.textColor"
            :global-render="options.globalRender"
            ref="latexRef"
          ></KeMathJax>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { KeMathJax, setMathJaxConfig, TransformerConfig, globalRender } from 'learnable-lib'
import 'learnable-lib/dist/style.css'

type OptionType = TransformerConfig & {
  // display?: 'block' | 'inline-block'
  lineHeight?: string
  textColor?: string
  alignBetween?: boolean // 两端对齐
  globalRender?: boolean
}

let content = $ref('这是一个latex渲染的例子\\frac{分子}{分母}\n7878')
let options = $ref<OptionType>({
  wrapMathrm: true,
  punctuation: false,
  // lineClass: false,
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

let latexRef = $ref<InstanceType<typeof KeMathJax>>()

watch(
  () => options,
  () => {
    console.log(222)
    // if(options.globalRender) {
    //   globalRender()
    // }else {
    //   latexRef?.render()
    // }
    latexRef?.render()
  },
  {
    deep: true,
  }
)

function doGlobalRender() {
  globalRender()
}

onMounted(() => {
  console.log('onMounted')
})
</script>
<style scoped lang="scss">
.page-latex-try {
  display: flex;
  background: #e7f0f4;
  height: 100vh;
  font-family: Segoe UI Semibold, sans-serif;
  .title {
    line-height: 40px;
    font-size: 24px;
    margin-bottom: 16px;
  }
  .option-panel {
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
