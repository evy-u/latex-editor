import { recursiveMatch } from 'recursive-match'
import independentSignList from './latexList/independentList'

enum MathType {
  latex = 'latex',
  text = 'text',
}

type MatchItem = {
  start: number
  end: number
  match: string
  bodyStart: number
  bodyEnd: number
  children: MatchItem[]
  type: MathType
}

function splitStrFn(str: string, startIndex: number) {
  const result = [] as MatchItem[]
  let matchIndex = 0
  independentSignList.forEach(item => {
    const mathArr = Array.from(str.matchAll(new RegExp(`\\\\${item}`, 'gm')))
    mathArr.forEach((item, index) => {
      const mathItem = item[0] as any
      if (item.index !== matchIndex) {
        let strItem = str.slice(matchIndex, item.index)
        let start = matchIndex + startIndex
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
      let start = item.index + startIndex
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
    })

    // result.push({
    //   start: mathItem.index + startIndex,
    //   end: mathItem.index + startIndex + mathItem[0].length,
    //   match: mathItem[0],
    //   bodyStart: mathItem.index + startIndex,
    //   bodyEnd: mathItem.index + startIndex + mathItem[0].length,
    //   children: [],
    //   type: MathType.latex,
    // })
  })
  return result
}

export default function parseRecursive(str: string) {
  const matchRes = recursiveMatch(str, '{', '}') as MatchItem[]
  let result = [] as MatchItem[]

  let mathIndex = 0

  matchRes.forEach((item, index) => {
    let prevStr = str.slice(mathIndex, item.start)
    if (prevStr) {
      const splitArr = splitStrFn(prevStr, mathIndex)
      result = result.concat(splitArr)
    }
    result.push(item)
    mathIndex = item.end
    if (index === matchRes.length - 1) {
      const lastStr = str.slice(mathIndex)
      if (lastStr) {
        result.push({
          start: mathIndex,
          end: matchRes.length,
          match: lastStr,
          bodyStart: mathIndex,
          bodyEnd: matchRes.length,
          children: [],
          type: MathType.latex,
        })
      }
    }
  })
  console.log(result)
}
