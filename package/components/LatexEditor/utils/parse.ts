import { recursiveMatch } from 'recursive-match'
import list, { otherList } from './latex-list'

let signList = list

export enum MathType {
  latex = 'latex',
  text = 'text',
}

export type MatchItem = {
  start: number
  end: number
  match: string
  bodyStart: number
  bodyEnd: number
  children: MatchItem[]
  type: MathType
}

function splitStrBySign(str: string, startIndex: number = 0) {
  const result = [] as MatchItem[]
  let matchIndex = startIndex
  if (!str.includes('\\')) {
    result.push({
      start: matchIndex,
      end: matchIndex + str.length,
      match: str,
      bodyStart: matchIndex,
      bodyEnd: matchIndex + str.length,
      children: [],
      type: otherList.some(sign => str.includes(sign)) ? MathType.latex : MathType.text,
    })
    return result
  }
  const matchArrs = signList
    .map(item => {
      const match = Array.from(str.matchAll(new RegExp(`\\\\${item}(?![a-zA-Z])`, 'g')))
      if (match.length) {
        return match
      }
    })
    .filter(i => i) as RegExpMatchArray[][]
  if (matchArrs.length) {
    matchArrs.forEach(mathArr => {
      mathArr.forEach((item, index) => {
        const mathItem = item[0] as any
        if (item.index !== matchIndex && matchIndex - startIndex !== item.index) {
          let strItem = str.slice(matchIndex - startIndex, item.index!) // matchIndex - startIndex 上一个结束sign的end， item.index 下一个sign的 start
          let start = matchIndex
          result.push({
            start: start,
            end: start + strItem.length,
            match: strItem,
            bodyStart: start,
            bodyEnd: start + strItem.length,
            children: [],
            type: MathType.text,
          })
        }

        let start = item.index! + startIndex
        let end = start + mathItem.length
        result.push({
          start,
          end,
          match: mathItem,
          bodyStart: start,
          bodyEnd: end,
          children: [],
          type: MathType.latex,
        })
        matchIndex = end
        let restStr = str.slice(matchIndex - startIndex)
        if (restStr.length && !restStr.includes('\\')) {
          result.push({
            start: end,
            end: end + restStr.length,
            match: restStr,
            bodyStart: end,
            bodyEnd: end + restStr.length,
            children: [],
            type: otherList.some(sign => restStr.includes(sign)) ? MathType.latex : MathType.text,
          })
          matchIndex = end + restStr.length
        }
      })
    })
  } else {
    result.push({
      start: matchIndex,
      end: matchIndex + str.length,
      match: str,
      bodyStart: matchIndex,
      bodyEnd: matchIndex + str.length,
      children: [],
      type: otherList.some(sign => str.includes(sign)) ? MathType.latex : MathType.text,
    })
    return result
  }

  return result
}

function recursiveBracketChildren(data: MatchItem[], parent: Pick<MatchItem, 'bodyStart' | 'bodyEnd'>, str: string) {
  let matchIndex = parent.bodyStart
  let children = [] as MatchItem[]
  data.forEach((item, index) => {
    if (item.children?.length) {
      item.children = recursiveBracketChildren(
        item.children,
        {
          bodyStart: item.bodyStart,
          bodyEnd: item.bodyEnd,
        },
        str
      )
    }
    if (index === 0) {
      children = children.concat(splitStrBySign(str.slice(matchIndex, item.start), matchIndex))
    }
    item.type = MathType.latex
    children.push(item)
    matchIndex = item.end
    if (data[index + 1] && item.end !== data[index + 1].start) {
      children = children.concat(splitStrBySign(str.slice(item.end, data[index + 1].start), matchIndex))
    }
    if (index === data.length - 1) {
      children = children.concat(splitStrBySign(str.slice(item.end, parent.bodyEnd), matchIndex))
    }
  })
  return children
}

/**
 * 1. 按照大括号分割成带有children结构的数据 matchRes
 * 2. 遍历matchRes， 按照下标去将latexIcon和非latexIcon填充进去
 *    2.1 注意处理特殊情况 otherList
 *    2.2 有children的，递归处理
 * 3.
 */
export default function parseRecursive(str: string) {
  console.log('总长度:', str, str.length)
  const matchRes = recursiveMatch(str, '{', '}') as MatchItem[]
  let result = [] as MatchItem[]
  if (matchRes.length) {
    let mathIndex = 0
    // console.log('matchBracketRes:', matchRes)
    matchRes.forEach((item, index) => {
      let prevStr = str.slice(mathIndex, item.start)
      if (prevStr) {
        const splitArr = splitStrBySign(prevStr, mathIndex)
        result = result.concat(splitArr)
      }
      if (item.children.length) {
        item.children = recursiveBracketChildren(
          item.children,
          {
            bodyStart: item.bodyStart,
            bodyEnd: item.bodyEnd,
          },
          str
        )
      } else {
        item.children = splitStrBySign(str.slice(item.bodyStart, item.bodyEnd), item.bodyStart)
      }
      item.type = MathType.latex
      result.push(item)
      mathIndex = item.end
      if (index === matchRes.length - 1) {
        // 最后一个
        const lastStr = str.slice(mathIndex)
        if (lastStr) {
          const splitArr = splitStrBySign(lastStr, mathIndex)
          result = result.concat(splitArr)
        }
      }
    })
  } else {
    // 没有匹配到大括号
    const splitArr = splitStrBySign(str)
    result = result.concat(splitArr)
  }
  console.log('parse result:', result)
  return result
}
