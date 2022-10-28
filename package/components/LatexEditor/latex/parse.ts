import XRegExp from 'xregexp'
import independentSignList from './latexList/independentList'
import bracketSignList, { noDoubleLines, doubleBracketSignList } from './latexList/oneBracketList'
import _ from 'lodash'
let __uniqueId = 1

import { NameType, SignItem, MatchValueItem } from './type'

// 按照指定符号分割，默认大括号
export function matchBackets(str: string, left?: string, right?: string): MatchValueItem[] {
  const res = XRegExp.matchRecursive(str, left || '{', right || '}', 'g', {
    // valueNames: ['latex', 'left', 'between', 'right'],
    valueNames: ['latex', null, 'between', null],
    unbalanced: 'skip-lazy',
  }) as MatchValueItem[]
  return res
}

// 计算下标
function calcIndex(start: number, value: string = ''): number {
  return start + value.length
}

//不需要双斜杠的符号(isStrict: 完全相等的符号， !isStrict: 字符串中包含该符号)
function signTypeValidate(list: string[], str: string, isStrict: boolean = false): boolean {
  if (!isStrict) {
    return list.some(item => str.includes(item))
  }
  return list.includes(str)
}

// 解析 带\但是不带括号的latex
function parseIndependentSign(textItem: SignItem, parseArr: SignItem[], parentNode?: SignItem): boolean {
  let signInTexts = independentSignList.filter(item => {
    const lineValue = textItem.__value.slice(textItem.value.indexOf(item) - 1, textItem.__value.indexOf(item))
    return textItem.__value.includes(item) && (lineValue === '\\' || item === '\n')
  })
  if (signInTexts.length) {
    const matchArr = _.flatten(
      signInTexts.map(item => {
        // 注意：不要用new RegExp(item, 'g')为带\的字符去创建正则，碰到正则的关键字，会被当成关键字处理，比如latex符号的\\div, 字符串'\\div2iv'匹配到的结果是'2iv'
        return Array.from(new Set(textItem.__value.matchAll(new RegExp(item, 'g')))).map((__item, __index) => {
          // 这里的item不带\
          let value = signTypeValidate(noDoubleLines, __item[0]) ? __item[0] : `\\${__item[0]}`

          if (
            (signTypeValidate(noDoubleLines, __item[0]) && value === item) ||
            (!signTypeValidate(noDoubleLines, __item[0]) && textItem.value.slice(__item.index! - 1, __item.index) === '\\')
          ) {
            // \n或者除\n以外的其他符号(前面必须是斜杠的)
            let start = signTypeValidate(noDoubleLines, __item[0]) ? __item.index || 0 : (__item.index || 1) - 1
            let end = calcIndex(start, value)
            return {
              value,
              start,
              end,
            }
          }
        })
      })
    )
      .filter(i => i)
      .sort((a, b) => {
        return a!.start - b!.start
      })
    let __nowIndex = 0
    // console.log(matchArr, 'matchArr')
    matchArr.forEach((item, index) => {
      if (index === 0) {
        // 符号前
        let __value = textItem.value.slice(0, item.start)
        if (__value) {
          parseArr.push({
            __id: __uniqueId++,
            name: NameType.txt,
            value: __value,
            __value,
            start: textItem.start,
            end: calcIndex(textItem.start, __value),
            __start: calcIndex(textItem.__start + item.start),
            __end: calcIndex(textItem.__start + item.start, __value),
          })
        }
      }
      // console.log(item, Object.assign({}, textItem))
      // 符号
      parseArr.push({
        __id: __uniqueId++,
        name: item.value === '\n' ? NameType.special : NameType.latex,
        value: item.value,
        __value: item.value,
        start: calcIndex(textItem.start + item.start),
        end: calcIndex(textItem.start + item.start, item.value),
        __start: calcIndex(textItem.__start + item.start),
        __end: calcIndex(textItem.__start + item.start, item.value),
        parentNode: parentNode,
      })
      __nowIndex = calcIndex(textItem.__start + item.start, item.value)
      // 符号后
      if (matchArr[index + 1]) {
        let __value = textItem.value.slice(item.end, matchArr[index + 1].start)
        if (__value && __value !== '\\') {
          parseArr.push({
            __id: __uniqueId++,
            name: NameType.txt,
            value: __value,
            __value,
            start: calcIndex(textItem.start + item.end),
            end: calcIndex(textItem.start + item.end, __value),
            __start: calcIndex(item.start + __nowIndex),
            __end: calcIndex(item.start + __nowIndex, __value),
          })
        }
      }
      // 最后一个符号之后
      if (index === matchArr.length - 1) {
        let __value = textItem.value.slice(item.end)
        if (__value) {
          parseArr.push({
            __id: __uniqueId++,
            name: NameType.txt,
            value: __value,
            __value,
            start: calcIndex(textItem.start + item.end),
            end: calcIndex(textItem.start + item.end, __value),
            __start: calcIndex(__nowIndex),
            __end: calcIndex(__nowIndex, __value),
          })
        }
      }
    })
    return true
  }
  return false
}

export function parseStrRecursive(str: string, parentNode?: SignItem) {
  let __parseArr: SignItem[] = []
  let __IndexNow = 0
  let matchArr = matchBackets(str)
  // console.log('matchArr {}:', JSON.parse(JSON.stringify(matchArr)), parentNode)
  if (!matchArr.length) {
    // 没有括号
    let end = calcIndex(__IndexNow, str)
    let __start = parentNode ? calcIndex(__IndexNow + parentNode.__start + parentNode.value.length + 1) : __IndexNow
    let __end = calcIndex(__start, str)
    let __item = {
      __id: 0,
      name: NameType.txt,
      value: str,
      __value: str,
      start: __IndexNow,
      end: end,
      __start,
      __end,
      parentNode,
    }
    // console.log(2, Object.assign({}, __item), Object.assign({}, parentNode))
    if (!parseIndependentSign(__item, __parseArr, parentNode)) {
      __IndexNow = __end
      __item.__id = __uniqueId++
      __parseArr.push(__item)
    }
  } else {
    matchArr.forEach((item, index) => {
      item.__id = __uniqueId++
      let nowValue = item.value
      if (item.name === 'between') {
        let prevObj = Object.assign({}, matchArr[index - 1]) //上一个元素
        let preObjValue = prevObj.value
        const prevObjLastStrs = preObjValue.split('\\')
        const prevObjLastStr = prevObjLastStrs.pop() || '' // latex关键字
        let nextObj = Object.assign({}, matchArr[index + 1]) //下一个元素
        let isBracketSign = signTypeValidate(bracketSignList, prevObjLastStr) // 是否是带有括号的latex

        if (preObjValue.slice(-1) === '^' || isBracketSign) {
          item.name = NameType.latex
          parentNode && (item.parentNode = parentNode)
          // start
          // if (nowValue.includes('\\') || signTypeValidate(noDoubleLines, nowValue)) {
          //   if (!item.brackets) {
          //     item.brackets = {}
          //   }
          //   let keys = Object.keys(item?.brackets || {})
          //   item.brackets[keys.length] = parseStrRecursive(nowValue, item)
          // } else {
          //   // 只是纯文本
          //   item.brackets = {
          //     0: [
          //       {
          //         name: NameType.txt,
          //         value: nowValue,
          //         __value: nowValue,
          //         __id: __uniqueId++,
          //         start: 0,
          //         end: calcIndex(0, nowValue),
          //         __start: calcIndex(item.start + (parentNode?.start || 0)),
          //         __end: calcIndex(item.start + (parentNode?.start || 0), nowValue),
          //         parentNode: item,
          //       },
          //     ],
          //   }
          // }
          // end

          if (preObjValue.slice(-1) === '^') {
            // 最后一位是^
            // 如果是^
            prevObj.__value = prevObj.value
            prevObj.value = preObjValue.slice(0, -1) /// 剔除掉最后一位
            prevObj.name = NameType.txt
            item.__value = `^{${item.__value}}`
            item.value = `^`
          } else {
            // 如果是oneBracketList中的元素
            // console.log(444, Object.assign({}, prevObj), Object.assign({}, item))
            prevObj.value = prevObjLastStrs.join('\\')
            prevObj.__value = prevObj.value
            prevObj.name = NameType.txt
            item.__value = `\\${prevObjLastStr}{${item.value}}`
            item.value = `\\${prevObjLastStr}`
            if (nextObj && nextObj.name === 'between' && signTypeValidate(doubleBracketSignList, preObjValue)) {
              // item.value += `{${nextObj.value}}`
              nextObj.value = ''
              nextObj.__value = ''
              nextObj.name = NameType.txt
              if (!item.brackets) {
                item.brackets = {}
              }
              let keys = Object.keys(item?.brackets || {})
              item.brackets[keys.length] = [
                {
                  name: NameType.txt,
                  __value: nextObj.value,
                  value: nextObj.value,
                  __id: nextObj.__id,
                  start: nextObj.start,
                  end: nextObj.end,
                  __start: calcIndex(nextObj.start + (parentNode?.__start || 0)),
                  __end: calcIndex(nextObj.start + (parentNode?.__start || 0), nextObj.__value),
                },
              ]
            }
          }
          if (!parseIndependentSign(prevObj, __parseArr, prevObj.parentNode) && prevObj.value) {
            prevObj.end = calcIndex(prevObj.start, prevObj.value)
            if (parentNode) {
              prevObj.__start = calcIndex(prevObj.end + (parentNode?.start || 0))
            } else {
              prevObj.__start = prevObj.start
            }
            prevObj.__end = calcIndex(prevObj.__start, prevObj.__value)
            __IndexNow = prevObj.end
            __parseArr.push(prevObj)
          }

          // start

          item.start = calcIndex(__IndexNow)
          if (parentNode) {
            item.__start = calcIndex(item.value.length + parentNode.__start + 1) // 1表示的是{的位置
          } else {
            item.__start = item.start
          }
          item.end = calcIndex(item.start, item.value)
          __IndexNow = item.end + 1
          item.__end = calcIndex(item.__start, item.__value)

          if (nowValue.includes('\\') || signTypeValidate(noDoubleLines, nowValue)) {
            if (!item.brackets) {
              item.brackets = {}
            }
            let keys = Object.keys(item?.brackets || {})
            item.brackets[keys.length] = parseStrRecursive(nowValue, Object.assign({}, item))
          } else {
            // console.log(34343, item)
            // 只是纯文本
            let __start = calcIndex(item.value.length + (item?.__start || 0) + 1)
            item.brackets = {
              0: [
                {
                  name: NameType.txt,
                  value: nowValue,
                  __value: nowValue,
                  __id: __uniqueId++,
                  start: 0,
                  end: calcIndex(0, nowValue),
                  __start,
                  __end: calcIndex(__start, nowValue),
                  parentNode: item,
                },
              ],
            }
          }

          // __IndexNow = item.end - 1

          // end

          __parseArr.push(item)
        }
      }
      if (!item.value.includes('\\') && !signTypeValidate(noDoubleLines, item.value) && item.value) {
        item.name = NameType.txt
        item.__value = item.value
        item.start = calcIndex(__IndexNow)
        item.end = calcIndex(item.start, item.__value)
        if (parentNode) {
          item.__start = calcIndex(item.end + (parentNode?.start || 0))
        } else {
          item.__start = item.start
        }
        item.__end = calcIndex(item.__start, item.__value)

        __IndexNow = item.end
        __parseArr.push(item)
      }
    })
  }
  const result = __parseArr.sort((a, b) => {
    return a.__id - b.__id
  })
  // console.log(result, 'result')
  return result
}

export function resetData() {
  __uniqueId = 1
}
