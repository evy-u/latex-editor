<template>
  <div class="page-doc">
    <div class="header">
      <div class="logo">KeZhi LaTex</div>
      <div class="right">
        <el-select
          v-model="selectValue"
          placeholder="Please input"
          remote
          filterable
          style="width: 400px; margin-left: 110px"
          :suffix-icon="Search"
          :suffix-transition="false"
          class="search"
          ref="searchRef"
          :remote-method="filterMethod"
          value-key="id"
          :default-first-option="true"
          @change="val => doSearch(val)"
          @focus="searchFocus"
        >
          <template #prefix>Cmd / Ctrl + K </template>
          <el-option v-for="item in searchOptions" :key="item.id" :value="item"> {{ item.label }} {{ item.value }} </el-option>
        </el-select>
        <div class="nav">
          <div class="nav-item" @click="toDoc">DOC</div>
          <div class="nav-item" @click="toTry">TRY</div>
        </div>
      </div>
    </div>

    <van-index-bar :index-list="indexList" :sticky="false" :sticky-offset-top="64">
      <van-index-anchor v-for="item in formulaTypeList" :key="item.name" :index="item.name">
        <div class="type-item" :type-id="item.id">{{ item.name }}</div>
        <div class="type-desc">{{ item.desc }}</div>
        <div v-if="item.isBase" class="base-table">
          <div v-for="(baseIcon, baseIndex) in item.data" :key="baseIndex" class="base-item">{{ baseIcon }}</div>
        </div>
        <el-table
          v-else
          ref="latexTableRef"
          :data="item.data"
          border
          :show-header="false"
          class="mb-[12px]"
          current-row-key="icon"
          :row-class-name="tableRowClassName"
        >
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
              <!-- <KeMathJax :content="scope.row.example || scope.row.formula" :global-render="true"></KeMathJax> -->
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
import { formulaTypeAllList } from 'latex-editor'
import { Search } from '@element-plus/icons-vue'
import { KeMathJax, globalRender } from 'learnable-lib'
import { onMounted, watch, nextTick } from 'vue'
import { flatMapDeep } from 'lodash'
import { ElTable } from 'element-plus'
import { Shortcuts } from 'shortcuts'
import { FormulaTypeItem, FormulaItem } from '../../types/components/LatexEditor/components/tool/formula'
import _ from 'lodash'
import { useRouter } from 'vue-router'

type OptionItem = { label: string; value: any; id: number; parentId?: number }
let formulaTypeList = formulaTypeAllList as FormulaTypeItem[]

const router = useRouter()
let indexList = $computed(() => {
  return formulaTypeList.map(item => item.name)
})
const shortcuts = new Shortcuts()

let selectValue = $ref<string | OptionItem>('')
let searchOptions = $ref<OptionItem[]>([])
let latexTableRef = $ref<InstanceType<typeof ElTable>[]>([])
let searchRef = $ref<HTMLDivElement>()

function filterMethod(val: string) {
  if (!val) {
    searchOptions = flatMapDeep(
      formulaTypeList
        .map(item => {
          return {
            label: item.name,
            value: '',
            id: item.id,
          }
        })
        .filter(i => i) as OptionItem[]
    )
    return
  }
  searchOptions = flatMapDeep(
    formulaTypeList
      .map(item => {
        if (item.name.includes(val)) {
          return {
            label: item.name,
            value: '',
            id: item.id,
          }
        } else {
          return item.data
            .map(dataItem => {
              if (typeof dataItem === 'object' && (dataItem.name?.includes(val) || dataItem.formula?.includes(val))) {
                return {
                  label: dataItem.name,
                  value: dataItem.formula,
                  id: dataItem.icon,
                  parentId: item.id,
                }
              }
            })
            .filter(i => i)
        }
      })
      .filter(i => i) as unknown as OptionItem[]
  )
}

function doSearch(data: OptionItem) {
  searchRef?.blur()
  let ele = null
  if (!data.parentId) {
    ele = document.querySelector(`div[type-id="${data.id}"]`)
  } else {
    ele = document.querySelector(`div[icon=${data.id}]`)
  }
  ele?.scrollIntoView({
    block: 'start',
  })
  if (data.parentId && latexTableRef[Number(data.parentId) - 1 - 2]) {
    // TODO: latexTableRef position ？
    latexTableRef[Number(data.parentId) - 1 - 2].setCurrentRow(data)
  }
}

function searchFocus() {
  searchOptions = flatMapDeep(
    formulaTypeList
      .map(item => {
        return {
          label: item.name,
          value: '',
          id: item.id,
        }
      })
      .filter(i => i) as OptionItem[]
  )
}

function tableRowClassName(data: { row: FormulaItem; rowIndex: number }) {
  if (data.row.icon === selectValue?.id) {
    return 'light-row'
  } else {
    return ''
  }
}

function toDoc() {
  router.push({
    name: 'latex-doc',
  })
}

function toTry() {
  router.push({
    name: 'latex-try',
  })
}

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
  shortcuts.add([
    {
      shortcut: 'CmdOrCtrl+K',
      handler: event => {
        searchRef?.blur()
        searchRef?.focus()
        return true
      },
    },
  ])
})
</script>
<style lang="scss">
.page-doc {
  .el-input__prefix {
    left: 1px;
    padding: 0 14px;
    background: #f5f7fa;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 0 1px 0 0 var(--el-input-border-color) inset, 0 -1px 0 0 var(--el-input-border-color) inset, -1px 0 0 0 var(--el-input-border-color) inset;
  }
  .el-input__inner {
    box-sizing: border-box;
  }
  .el-select .el-input__inner:focus,
  .el-select .el-input.is-focus .el-input__inner {
    border-left-color: #dcdfe6 !important;
  }
  .van-index-bar {
    height: calc(100% - 70px);
    padding: 0 40px 0 100px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .van-index-bar__index {
    font-family: Segoe UI Semibold;
  }
  .van-index-bar__sidebar {
    left: 0;
    right: auto;
  }

  .van-cell__title {
    display: none !important;
  }
  .van-cell__value {
    text-align: left;
  }

  .el-table {
    font-family: Segoe UI Semibold;
  }

  .cell {
    white-space: pre-wrap;
  }

  .el-table .light-row {
    background: #fdf6ec;
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td.el-table__cell {
    background: transparent;
  }
}
</style>
<style lang="scss" scoped>
.page-doc {
  box-sizing: border-box;
  height: 100vh;
  padding-top: 64px;
  padding-bottom: 40px;
  overflow: hidden;
  font-family: Segoe UI Semibold, sans-serif;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 50px;
    padding: 0px 60px;
    position: fixed;
    top: 0;
    width: 100%;
    min-width: 1000px;
    z-index: 9999;
    background: #329894;
    color: #fff;
    .right {
      display: flex;
      align-items: center;
    }
    .nav {
      align-content: flex-end;
      display: flex;
      margin-left: 24px;
      cursor: pointer;
      .nav-item {
        padding: 0 24px;
      }
    }
  }
  .type-item {
    font-size: 16px;
    line-height: 42px;
    font-weight: 700;
  }
  .type-desc {
    color: #888;
    margin-bottom: 12px;
    padding-left: 14px;
  }
  .base-table {
    display: flex;
    flex-wrap: wrap;
    border-left: 1px solid rgb(229, 231, 235);
    margin-bottom: 12px;
    .base-item {
      line-height: 40px;
      width: 40px;
      padding: 0 12px;
      border-top: 1px solid rgb(229, 231, 235);
      border-right: 1px solid rgb(229, 231, 235);
      border-bottom: 1px solid rgb(229, 231, 235);
      border-collapse: collapse;
    }
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