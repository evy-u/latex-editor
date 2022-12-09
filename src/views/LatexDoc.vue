<template>
  <div class="page-doc">
    <index-bar :index-list="indexList">
      <index-anchor v-for="(item, index) in formulaTypeList" :key="index" :index="item.name">
        <cell :title="`${dataItem.name}`" v-for="(dataItem, dataIndex) in item.data" :key="dataIndex" />
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
