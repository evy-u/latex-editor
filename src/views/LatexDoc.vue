<template>
  <div class="page-doc" :index-list="indexList">
    <index-bar>
      <index-anchor v-for="(item, index) in indexList" :key="index" :index="item">
        <cell title="文本" />
      </index-anchor>
    </index-bar>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { IndexBar, IndexAnchor, Cell } from 'vant'
import 'vant/es/index-bar/style'
import { formulaTypeList } from 'latex-editor'
console.log(formulaTypeList, '99')

let indexList = $computed(() => {
  return formulaTypeList.map(item => item.name)
})
</script>
<style scoped lang="scss"></style>
