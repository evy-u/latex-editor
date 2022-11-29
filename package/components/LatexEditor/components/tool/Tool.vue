<template>
  <div class="formula-list">
    <el-popover v-for="item in formulas" :key="item.name" placement="bottom-start" v-model:visible="item.visibleDataList">
      <template #reference>
        <div class="type-btn" @click="item.visibleDataList = true">
          <img :src="`${fontIconBaseUrl}${item.data[0].icon}.svg`" /><span>{{ item.name }}</span>
        </div>
      </template>
      <div v-for="dataItem in item.data" :key="dataItem.name" class="formula-item" @click="handleClickFormula(dataItem)">
        <img :src="`${fontIconBaseUrl}${dataItem.icon}.svg`" />
      </div>
    </el-popover>
  </div>
</template>
<script setup lang="ts">
import formulas, { FormulaItem, fontIconBaseUrl } from './formula/index'
import { ElPopover } from 'element-plus'
import { defineEmits } from 'vue'

const emits = defineEmits<{
  (event: 'handleClickFormula', param: FormulaItem): void
}>()

async function handleClickFormula(dataItem: FormulaItem) {
  emits('handleClickFormula', dataItem)
}
</script>

<style scoped lang="scss">
.formula-list {
  display: flex;
}
.type-btn {
  display: flex;
  flex-direction: column;
  height: 70px;
  justify-content: space-between;
  margin-right: 20px;
  cursor: pointer;
  img {
    width: auto;
    height: 30px;
  }
}
.formula-item {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0.3rem 0.55rem 0.2rem;
  margin-right: 6px;
  margin-bottom: 6px;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  img {
    width: auto;
    height: 24px;
    margin-right: 4px;
  }
}
.latex-transform-container {
  width: 100%;
  -webkit-user-select: none;
  vertical-align: middle;
  border-style: none;
}
.operate-btns {
  margin-top: 20px;
}
</style>
