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
          @change="doSearch"
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

    <van-index-bar :index-list="indexList" :sticky="false" :sticky-offset-top="64" highlight-color="#329894">
      <van-index-anchor v-for="(item, index) in formulaTypeList" :key="item.name" :index="item.name">
        <div class="type-item" :type-id="item.id">{{ item.name }}</div>
        <div class="type-desc">{{ item.desc }}</div>
        <div v-if="item.isBase" class="base-table">
          <div v-for="(baseIcon, baseIndex) in item.data" :key="baseIndex" class="base-item">{{ baseIcon }}</div>
        </div>
        <div class="formula-list">
          <div
            class="formula-icon"
            :class="[`formula-${index}-${fIndex}`, `formula-${typeof fm === 'string' ? fm : fm.name}`]"
            v-for="(fm, fIndex) in item.data"
            :key="fIndex"
            @click="() => handleClickFormula(fm, `formula-${index}-${fIndex}`)"
          >
            <template v-if="typeof fm === 'string'">
              <div class="name">{{ fm }}</div>
              <div class="icon">{{ fm }}</div>
              <div class="text">{{ fm }}</div>
            </template>
            <template v-else>
              <div class="name">{{ fm.name }}</div>
              <div class="icon">
                <img :src="fontIconBaseUrl + fm.icon + '.svg'" />
              </div>
              <div class="text">{{ fm.formula }}</div>
            </template>
          </div>
        </div>
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>
<script setup lang="ts">
import { formulaTypeAllList, fontIconBaseUrl } from 'latex-editor'
import { Search } from '@element-plus/icons-vue'
import { KeMathJax, globalRender } from 'learnable-lib'
import { onMounted, watch, nextTick } from 'vue'
import { flatMapDeep } from 'lodash'
import { ElMessage, ElTable } from 'element-plus'
import { Shortcuts } from 'shortcuts'
import { FormulaTypeItem, FormulaItem } from '../../types/components/LatexEditor/components/tool/formula'
import _ from 'lodash'
import { useRouter } from 'vue-router'
import { copyByContent } from '../../package/utils/copy'

type OptionItem = { label: string; value: any; id: number; parentId?: number }
let formulaTypeList = formulaTypeAllList as unknown as FormulaTypeItem[]

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
    ele = document.querySelector(`.formula-${data.label}`)
  }
  console.log(data, ele, `.formula-${data.label}`)
  const activeArr = Array.from(document.querySelectorAll('.active')) as HTMLDivElement[]
  activeArr.forEach(item => {
    item.classList.remove('active')
  })
  ele?.scrollIntoView({
    block: 'center',
  })
  ele?.classList.add('active')
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

async function handleClickFormula(item: FormulaItem | string, elClass: string) {
  if (typeof item === 'string') {
    await copyByContent(item)
  } else {
    await copyByContent(item.formula)
  }
  ElMessage.success({
    message: 'Copied！',
    appendTo: `.${elClass}`,
    icon: 'none',
    duration: 800,
  })
}
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
    box-sizing: border-box;
    height: 100%;
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
    top: 53.4%;
  }
  .van-index-anchor {
    padding-left: 40px;
  }
  .el-message {
    position: absolute;
    top: 40%;
    right: 8px;
    min-width: 66px;
    --el-message-padding: 4px;
  }
  .el-message__icon {
    display: none !important;
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
    margin-top: 12px;
  }
  .type-desc {
    color: #888;
    margin-bottom: 12px;
    padding-left: 14px;
  }
  @media (min-width: 600px) {
    .formula-list {
      display: grid;

      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1000px) {
    .formula-list {
      display: grid;

      grid-template-columns: repeat(6, 1fr);
    }
  }
  @media (min-width: 1200px) {
    .formula-list {
      display: grid;

      grid-template-columns: repeat(8, 1fr);
    }
  }
  @media (min-width: 1400px) {
    .formula-list {
      display: grid;

      grid-template-columns: repeat(10, 1fr);
    }
  }
  .formula-list {
    display: grid;
    gap: 16px;
  }
  .formula-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 4px solid rgba(27, 31, 35, 0.05);
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: none;
    &:hover,
    &.active {
      border: 4px solid #329894;
      box-shadow: 0px 0px 10px rgba(10, 31, 35, 0.3);
    }
    .name {
      display: block;
      color: #fff;
      font-size: 16px;
      background: #329894;
      font-weight: 600;
      text-align: center;
      padding: 5px 5px 8px;
    }
    .text {
      display: block;
      color: #666;
      background: rgba(27, 31, 35, 0.05);
      text-align: center;
      padding: 5px;
      line-height: 1.3;
      font-size: 18px;
      font-family: monospace;
      white-space: break-spaces;
      line-break: anywhere;
    }
    .icon {
      display: block;
      text-align: center;
      padding: 5px;
      font-size: 20px;
      overflow-x: scroll;
      img {
        width: 60%;
        height: auto;
        margin: auto;
      }
      &:nth-last-of-type(2) {
        img {
          width: 36%;
          min-height: 40px;
        }
      }
    }
  }
}
</style>
