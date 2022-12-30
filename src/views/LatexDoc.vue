<template>
  <div class="page-doc">
    <el-input v-model="searchValue" placeholder="Please input" size="large" :suffix-icon="Search" class="search" @keyup.enter="doSearch">
      <!-- <template #append>Cmd / Ctrl + K</template> -->
    </el-input>
    <van-index-bar :index-list="indexList" :sticky="false">
      <van-index-anchor v-for="item in formulaTypeList" :key="item.name" :index="item.name">
        <div class="type-item">{{ item.name }}</div>
        <el-table :data="item.data" border stripe :show-header="false">
          <el-table-column>
            <template #default="scope">
              <div :name="scope.row.name" :icon="scope.row.icon" class="mr-[12px]">{{ scope.row.name }}</div></template
            >
          </el-table-column>
          <el-table-column>
            <template #default="scope">
              {{ scope.row.formula }}
            </template>
          </el-table-column>
          <el-table-column>
            <template #default="scope">
              <KeMathJax :content="scope.row.formula" :global-render="true" v-if="!scope.row.exampleList"></KeMathJax>
              <template v-else>
                <div v-for="(exampleItem, index) in scope.row.exampleList" :key="index" class="example-item">
                  <KeMathJax v-if="exampleItem.isLatex" :content="exampleItem.content" :global-render="true"></KeMathJax>
                  <div v-else>{{ exampleItem.content }}</div>
                </div>
              </template>
            </template>
          </el-table-column>
        </el-table>
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>
<script setup lang="ts">
import { formulaTypeList } from 'latex-editor'
import { Search } from '@element-plus/icons-vue'
import { KeMathJax, globalRender } from 'learnable-lib'
import { onMounted, watch, nextTick } from 'vue'

let indexList = $computed(() => {
  return formulaTypeList.map(item => item.name)
})

let searchValue = $ref('')

function doSearch() {}

watch(
  () => formulaTypeList,
  async () => {
    if (formulaTypeList.length) {
      await nextTick()
      globalRender()
    }
  },
  {
    immediate: true,
  }
)

onMounted(() => {
  // globalRender()
})
</script>
<style lang="scss">
.page-doc {
  padding: 30px 100px 40px 140px;
  .van-index-bar__sidebar {
    left: 0;
    right: auto;
  }
  .search {
    margin-bottom: 30px;
  }
  .type-item {
    font-size: 16px;
    line-height: 42px;
    font-weight: 700;
  }
  .van-cell__title {
    display: none !important;
  }
  .van-cell__value {
    text-align: left;
  }
  .example-item {
    position: relative;
    padding-left: 8px;
    &:nth-child(odd) {
      ::before {
        display: block;
        content: '';
        position: absolute;
        left: -2px;
        top: 9px;
        width: 4px;
        height: 4px;
        background: #1989fa;
        border-radius: 50%;
      }
    }
    &:nth-child(even) {
      padding-bottom: 12px;
    }
  }
}
</style>
