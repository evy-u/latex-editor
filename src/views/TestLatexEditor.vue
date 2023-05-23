<template>
  <div class="test-latex-editor">
    <div class="latex-editor"></div>
  </div>
</template>
<script setup lang="ts">
import { LatexEditor } from 'latex-editor'
import { onMounted } from 'vue'
// 'jjj\\becausehhh\\therefore\\frac{分子\\div}{分母\\textcircled{10}}123\\frac{1}{2}\\angleyyy\\simuuu'
// jjj\\becausehhh\\therefore\\frac{分子\\div}{分母\\textcircled{10}}aaa\\frac{分子\\div}{分母\\textcircled{10}}\\angleyyy\\simuuu
// \\frac{分子\\div}{分母\\textcircled{10}222\\textcircled{20}\\angle}
// \\frac{分子\\div}{分母\\underline{\\textcircled{10}}222\\textcircled{20}\\angle}
onMounted(() => {
  const editor = new LatexEditor(document.querySelector('.latex-editor'), {
    content: 'f(x)=\\left\\{\\frac{2x^{2}+2x}{x+1},x\\neq-1,\\\\x-1,x=-1.\\right\\}则函数f(x)奇偶性如何?',
  })
})
</script>
<style scoped lang="scss">
.test-latex-editor {
  box-sizing: border-box;
  padding: 20px;
  height: 100vh;
  .latex-editor {
    height: 100%;
  }
}
</style>
