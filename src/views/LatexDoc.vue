<template>
  <div class="page-doc">
    <el-input v-model="searchValue" placeholder="Please input" size="large" :suffix-icon="Search">
      <!-- <template #append>Cmd / Ctrl + K</template> -->
    </el-input>
    <van-index-bar :index-list="indexList" :sticky="false">
      <van-index-anchor v-for="item in formulaTypeList" :key="item.name" :index="item.name">
        <div class="type-item">{{ item.name }}</div>
        <van-cell :title="`${dataItem.name}`" v-for="(dataItem, dataIndex) in item.data" :key="dataIndex"></van-cell>
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>
<script setup lang="ts">
import { formulaTypeList } from 'latex-editor'
import { Search } from '@element-plus/icons-vue'

let indexList = $computed(() => {
  return formulaTypeList.map(item => item.name)
})
let searchValue = $ref('')
</script>
<style scoped lang="scss">
.page-doc {
  padding: 30px 100px;
  .type-item {
    font-size: 16px;
    line-height: 42px;
    font-weight: 600;
  }
}
</style>
