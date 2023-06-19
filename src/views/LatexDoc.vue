<template>
  <div class="page-doc">
    <div class="header">
      <img class="logo" src="@/assets/doc_logo.png" />
      <div class="right">
        <el-select
          v-model="selectValue"
          placeholder="运算符号/除号/div"
          remote
          filterable
          style="width: 346px"
          :suffix-transition="false"
          class="search"
          ref="searchRef"
          :remote-method="filterMethod"
          value-key="id"
          size="large"
          :default-first-option="true"
          :fit-input-width="false"
          @change="doSearch"
          @focus="searchFocus"
        >
          <template #prefix>
            <span>Cmd / Ctrl + K</span>
            <img src="@/assets/icon_arrow_line_down.png" />
          </template>
          <el-option v-for="item in searchOptions" :key="item.id" :value="item"> {{ item.label }} {{ item.value }} </el-option>
        </el-select>
        <div class="nav">
          <div class="nav-item" @click="toDoc">DOC</div>
          <div class="nav-item" @click="toTry">TRY</div>
        </div>
      </div>
    </div>

    <van-index-bar :index-list="indexList" :sticky="false" highlight-color="#fff" ref="indexBarRef">
      <van-index-anchor v-for="(item, index) in formulaTypeList" :key="item.name" :index="item.name">
        <div class="type-item" :type-id="item.id"><span class="dot"></span>{{ item.name }}</div>
        <div class="type-desc">{{ item.desc }}</div>
        <div class="formula-list">
          <div
            class="formula-icon"
            :class="[`formula-${index}-${fIndex}`, `formula-${fm.name}`, `${item.isBase ? 'base' : ''}`]"
            v-for="(fm, fIndex) in item.data"
            :key="fIndex"
          >
            <template v-if="item.isBase">
              {{ fm.name }}
            </template>
            <template v-else>
              <div class="name">{{ fm.name }}</div>
              <div class="icon">
                <img :src="fontIconBaseUrl + fm.icon + '.svg'" />
              </div>
              <div class="text">{{ fm.formula }}</div>
            </template>
            <div class="mask">
              <div class="crcle" @click="() => handleClickFormula(fm, `formula-${index}-${fIndex}`)">
                <template v-if="!isCoped">
                  <img src="@/assets/icon_copy.png" />
                  <span>复制</span>
                </template>
                <span v-else>copied!</span>
              </div>
            </div>
          </div>
        </div>
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>
<script setup lang="ts">
import { formulaTypeAllList, fontIconBaseUrl } from 'latex-editor'
import { onMounted, nextTick } from 'vue'
import { flatMapDeep } from 'lodash'
import { Shortcuts } from 'shortcuts'
import { FormulaTypeItem, FormulaItem } from '../../types/components/LatexEditor/components/tool/formula'
import _ from 'lodash'
import { useRouter } from 'vue-router'
import { copyByContent } from '../../package/utils/copy'
import type { IndexBarInstance } from 'vant'

type OptionItem = { label: string; value: any; id: number; parentId?: number }
let formulaTypeList = formulaTypeAllList as unknown as FormulaTypeItem[]

const router = useRouter()
let indexList = $computed(() => {
  return formulaTypeList.map(item => item.name)
})
const shortcuts = new Shortcuts()

let selectValue = $ref<string | OptionItem>('')
let searchOptions = $ref<OptionItem[]>([])
let searchRef = $ref<HTMLDivElement>()
let indexBarRef = $ref<IndexBarInstance>()

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
  const activeArr = Array.from(document.querySelectorAll('.active')) as HTMLDivElement[]
  activeArr.forEach(item => {
    item.classList.remove('active')
  })
  ele?.parentElement?.parentElement?.scrollIntoView({
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
  const route = router.resolve({
    name: 'latex-try',
  })
  window.open(route.fullPath, '__blank')
}

function observerEleVisibleViewport() {
  const ele = document.querySelector('.page-doc')!
  const boxHeight = ele.getBoundingClientRect().height
  ele.addEventListener('scroll', ev => {
    const { y } = document.querySelector('.van-index-bar__index--active')!.getBoundingClientRect()
    if (y > boxHeight - 80 || y <= 80) {
      document.querySelector('.van-index-bar__index--active')?.scrollIntoView({
        block: 'nearest',
      })
    }
  })
}

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
  indexBarRef?.scrollTo('希腊字母')
  nextTick(() => {
    observerEleVisibleViewport()
  })
})

let isCoped = $ref(false)
async function handleClickFormula(item: FormulaItem | string, elClass: string) {
  if (typeof item === 'string') {
    await copyByContent(item)
  } else {
    await copyByContent(item.formula)
  }
  isCoped = true
  const timer = setTimeout(() => {
    isCoped = false
    timer && clearTimeout(timer)
  }, 300)
}
</script>
<style lang="scss">
.page-doc {
  .el-input__prefix {
    left: 0px;
    padding: 0 12px 0 16px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: #eef1f1;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
    border: 1px solid #e4e7ed;
    border-right: none;
    img {
      height: 6px;
      width: 10px;
      margin-left: 8px;
    }
  }

  .el-input__inner {
    box-sizing: border-box;
    border-radius: 20px;
    border-color: #eef1f1;
    &::placeholder {
      padding-left: 8px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.4);
    }
  }
  .el-input__inner:hover {
    border-color: #eef1f1 !important;
  }
  .el-input.is-focus {
    .el-input__prefix {
      border-color: #32b2b7 !important;
    }
  }
  .el-select .el-input__inner:focus,
  .el-select .el-input.is-focus .el-input__inner {
    border-color: #32b2b7 !important;
  }

  .van-index-bar {
    box-sizing: border-box;
    padding: 0px 48px 0px 170px;
    position: relative;
    & > div:last-of-type .van-index-anchor {
      padding-bottom: 60px;
    }
  }
  .van-index-anchor {
    background: inherit;
    padding-left: 48px;
    position: relative;
    top: 80px;
  }

  .van-index-bar__sidebar {
    position: fixed;
    box-sizing: border-box;
    top: 80px;
    transform: translateY(0);
    left: 0;
    right: auto;
    width: 170px;
    max-height: calc(100vh - 80px);
    overflow-y: auto;
    padding: 24px 0;
    background: #fff;
  }
  .van-index-bar__index {
    padding: 0 36px;
    text-align: left;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
  }
  .van-index-bar__index--active {
    background: #32b2b7;
    color: #fff;
  }
}
</style>
<style lang="scss" scoped>
.page-doc {
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  font-family: PingFangSC-Regular, PingFang SC;
  background: #f5f6f6;
  overflow-y: auto;
  .header {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 36px;
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    min-width: 1000px;
    z-index: 99;
    border-bottom: 1px solid #bdcbcb;
    background: #fff;
    .logo {
      height: 28px;
      width: auto;
    }
    .right {
      display: flex;
      align-items: center;
    }
    .nav {
      align-content: flex-end;
      display: flex;

      .nav-item {
        padding: 0 16px;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        border-radius: 20px;
        background: #32b2b7;
        font-size: 14px;
        font-weight: 400;
        color: #ffffff;
        &:first-of-type {
          margin-left: 16px;
          margin-right: 8px;
        }
      }
    }
  }
  .type-item {
    display: flex;
    align-items: center;
    column-gap: 8px;
    padding-top: 36px;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.8);
    line-height: 28px;
    .dot {
      display: inline-block;
      width: 6px;
      height: 14px;
      background: #32b2b7;
      border-radius: 3px;
    }
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
    // box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    transition: all 0.3s;
    overflow: hidden;
    border-radius: 8px;
    padding: 0 12px;
    background: #fff;
    border: 3px solid #fff;

    .mask {
      display: none;
      justify-content: center;
      align-items: center;
      display: none;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 8px;
      .crcle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 64px;
        height: 64px;
        border-radius: 100%;
        background: rgba(0, 0, 0, 0.5);
        margin: auto;

        img {
          height: 22px;
          width: 22px;
          margin-bottom: 2px;
        }
        span {
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 17px;
        }
      }
    }

    &.base {
      text-align: center;
      line-height: 100px;
      height: 100px;
      // .mask {
      //   .crcle {
      //     height: 100%;
      //     width: 0;
      //   }
      // }
    }

    &:hover .mask {
      display: flex;
    }
    &.active {
      border: 3px solid #329894;
      box-shadow: 0px 0px 10px rgba(10, 31, 35, 0.3);
    }
    .name {
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.8);
      padding: 12px 0;
      border-bottom: 1px solid #edefef;
      text-align: center;
    }
    .text {
      display: block;
      text-align: center;
      padding: 12px 0;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.6);
      white-space: break-spaces;
      line-break: anywhere;
      border-top: 1px solid #edefef;
    }
    .icon {
      display: block;
      text-align: center;
      padding: 6px 0;
      max-height: 62px;
      overflow-x: scroll;
      img {
        width: 36%;
        height: auto;
        margin: auto;
      }
      &:nth-last-of-type(2) {
        img {
          width: 37%;
          min-height: 40px;
        }
      }
    }
  }
}
</style>
