import XRegExp from 'xregexp'
import independentSignList from './latexList/independentList'
import bracketSignList, { noDoubleLines, doubleBracketSignList } from './latexList/oneBracketList'
import _ from 'lodash'
import { NameType, SignItem, MatchValueItem } from './type'

let __uniqueId = 1
let __IndexNow = 0

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
  // console.log(Object.assign({}, textItem))
  let signInTexts = independentSignList.filter(item => {
    const lineValue = textItem.__value.slice(textItem.value.indexOf(item) - 1, textItem.__value.indexOf(item))
    return textItem.__value.includes(item) && (lineValue === '\\' || item === '\n')
  })
  console.log(signInTexts, 'signInTexts')
  if (signInTexts.length) {
    let matchArr = _.flatten(
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
              name: NameType.latex,
            }
          }
        })
      })
    )
      .filter(i => i)
      .sort((a, b) => {
        return a!.start - b!.start
      })
    let startPoint = textItem.start
    // console.log(matchArr)
    matchArr.forEach((item, index) => {
      // 非最后一位，找比start小的
      if (item.start > startPoint) {
        let __VALUE = textItem.value.slice(startPoint, item.start)
        let __START = textItem.__start + textItem.start + ((parentNode?.end || 0) + 1)
        __VALUE &&
          parseArr.splice(index, 0, {
            __id: __uniqueId++,
            name: NameType.txt,
            value: __VALUE,
            __value: __VALUE,
            start: startPoint,
            end: calcIndex(startPoint, __VALUE),
            __start: __START,
            __end: calcIndex(__START, __VALUE),
            parentNode: parentNode,
          })
      }
      parseArr.push({
        __id: __uniqueId++,
        name: item.value === '\n' ? NameType.special : NameType.latex,
        value: item.value,
        __value: item.value,
        start: item.start,
        end: item.end,
        __start: calcIndex(textItem.__start + item.start + ((parentNode?.end || 0) + 1)),
        __end: calcIndex(textItem.__start + item.start + ((parentNode?.end || 0) + 1), item.value),
        parentNode: parentNode,
      })
      startPoint = item.end
      if ((matchArr.length > 1 && index === matchArr.length - 1) || matchArr.length === 1) {
        // 最后一位，找比start大的
        let __VALUE = textItem.value.slice(startPoint)
        __VALUE &&
          parseArr.push({
            __id: __uniqueId++,
            name: NameType.txt,
            value: __VALUE,
            __value: __VALUE,
            start: startPoint,
            end: calcIndex(startPoint, __VALUE),
            __start: calcIndex(textItem.__start + startPoint + ((parentNode?.end || 0) + 1)),
            __end: calcIndex(textItem.__start + startPoint, __VALUE),
            parentNode: parentNode,
          })
      }
    })

    // console.log('parseIndependentSign:', parseArr)

    return true
  }
  return false
}

export function parseStrRecursive(str: string, parentNode?: SignItem) {
  let __parseArr: SignItem[] = []

  let matchArr = matchBackets(str)
  // console.log('matchArr {}:', JSON.parse(JSON.stringify(matchArr)), parentNode, __IndexNow)
  if (!matchArr.length) {
    // console.log(76, str, parentNode)
    // 没有括号
    let __start = parentNode ? (parentNode?.end || 0) + 1 : 0
    let __item = {
      __id: -1,
      name: NameType.txt,
      value: str,
      __value: str,
      start: 0,
      end: str.length,
      __start,
      __end: calcIndex(__start, str),
      parentNode,
    }
    if (!parseIndependentSign(__item, __parseArr, parentNode)) {
      __item.__id = __uniqueId++
      __parseArr.push(__item)
    }
  } else {
    console.log('matchArr', JSON.parse(JSON.stringify(matchArr)))
    matchArr.forEach((item, index) => {
      // console.log(item, '888')
      let nowValue = item.value
      if (item.name === 'between') {
        // console.log(11, Object.assign({}, parentNode))
        let prevObj = Object.assign({}, matchArr[index - 1]) //上一个元素
        let preObjValue = prevObj.value || ''
        const prevObjLastStrs = preObjValue.split('\\')
        const prevObjLastStr = prevObjLastStrs.pop() || '' // latex关键字
        let nextObj = matchArr[index + 1] //下一个元素
        let isBracketSign = signTypeValidate(bracketSignList, prevObjLastStr) // 是否是带有括号的latex
        if (preObjValue.slice(-1) === '^' || isBracketSign) {
          item.name = NameType.latex
          parentNode && (item.parentNode = parentNode)

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
            prevObj.value = prevObjLastStrs.join('\\')
            prevObj.__value = prevObj.value
            prevObj.name = NameType.txt
            prevObj.end = calcIndex(prevObj.start, prevObj.value)
            prevObj.__start = calcIndex(prevObj.start + (parentNode?.start || 0))
            prevObj.__end = calcIndex(prevObj.__start, prevObj.__value)
            item.__value = `\\${prevObjLastStr}{${item.value}}`
            item.value = `\\${prevObjLastStr}`
            item.start = item.start - item.value.length - 1
            item.end = calcIndex(item.start, item.value)
            item.__start = calcIndex(parentNode?.__start || 0 + item.start)
            item.__end = calcIndex(item.__start, item.__value)

            if (!parseIndependentSign(prevObj, __parseArr, prevObj.parentNode) && prevObj.value) {
              prevObj.end = calcIndex(prevObj.start, prevObj.value)
              prevObj.__start = calcIndex(prevObj.start + (parentNode?.start || 0))
              prevObj.__end = calcIndex(prevObj.__start, prevObj.__value)
              !prevObj.__id && (prevObj.__id = __uniqueId++)
              __parseArr.push(prevObj)
            }

            // start

            if (nowValue.includes('\\') || signTypeValidate(noDoubleLines, nowValue)) {
              if (!item.brackets) {
                item.brackets = {}
              }
              let keys = Object.keys(item?.brackets || {})
              item.brackets[keys.length] = parseStrRecursive(`{${nowValue}}`, Object.assign({}, item))
              // console.log(333, Object.assign({}, item.brackets))
            } else {
              // 只是纯文本
              let __start = calcIndex((item?.end || 0) + 1)
              !item.brackets &&
                (item.brackets = {
                  0: [
                    {
                      name: NameType.txt,
                      value: nowValue,
                      __value: nowValue,
                      __id: __uniqueId++,
                      start: 0,
                      end: calcIndex((parentNode?.start || 0) + 0, nowValue),
                      __start,
                      __end: calcIndex(__start, nowValue),
                      parentNode: item,
                    },
                  ],
                })
            }
            // end

            if (nextObj && nextObj.name === 'between' && signTypeValidate(doubleBracketSignList, preObjValue)) {
              // 有多个括号的
              // console.log(666, Object.assign({}, item), Object.assign({}, nextObj))
              const lsValue = `{${nextObj.value}}`
              item.__value += lsValue
              nextObj.value = ''
              nextObj.__value = ''
              nextObj.name = NameType.txt

              if (!item.brackets) {
                item.brackets = {}
              }
              let keys = Object.keys(item?.brackets || {})
              item.brackets[keys.length] = parseStrRecursive(lsValue, Object.assign({}, item))
            }
          }
          item.__end = calcIndex(item.__start, item.__value)
          !item.__id && (item.__id = __uniqueId++)
          item.value && __parseArr.push(item)
        }
        // else {
        //   item.__value = item.value
        //   item.start--
        //   item.end--
        //   item.__start = calcIndex(item.start + (parentNode?.start || 0))
        //   item.__end = calcIndex(item.__start, item.__value)
        //   item.parentNode = parentNode
        //   if (!parseIndependentSign(item, __parseArr, parentNode) && item.value) {
        //     !item.__id && (prevObj.__id = __uniqueId++)
        //     __parseArr.push(item)
        //   }
        // }
      }
      if (!item.value.includes('\\') && !signTypeValidate(noDoubleLines, item.value) && item.value) {
        item.name = NameType.txt
        item.__value = item.value
        item.end = calcIndex(item.start, item.value)
        if (parentNode) {
          item.start = 0
          item.end = calcIndex(0 - 1, item.value)
          if (parentNode.brackets) {
            const lastBracket = parentNode.brackets[Object.keys(parentNode.brackets || {}).length - 1] || []
            item.__start = lastBracket[lastBracket.length - 1].__end + 2
            item.__end = calcIndex(item.__start, item.value)
          } else {
            item.__start = 0
            item.__end = calcIndex(item.__start, item.__value)
          }
        } else {
          item.__start = item.start
          item.__end = calcIndex(item.__start, item.__value)
        }

        !item.__id && (item.__id = __uniqueId++)
        __parseArr.push(item)
      }
    })
  }
  const result = __parseArr.sort((a, b) => {
    return a.__id - b.__id
  })
  // console.log('__IndexNow:', __IndexNow)
  // console.log(result, 'result')
  return result
}

export function resetData() {
  __uniqueId = 1
  __IndexNow = 0
}
