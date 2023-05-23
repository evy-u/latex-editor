import { FormulaItem } from './index'

const multipleLines = [
  {
    name: '联立方程',
    icon: `multipleLine`,
    formula: `f(n)
\\left\\{
\\frac{n}{2}, &if n is even\\\\
3n + 1, &if n is odd
\\right\\}`,
  },
  {
    name: '联立方程',
    icon: `multipleLine`,
    formula: `\\left\\{
    a_{1}x+b_{1}y+c_{1}z=d_{1} \\\\
    a_{2}x+b_{2}y+c_{2}z=d_{2} \\\\
    a_{3}x+b_{3}y+c_{3}z=d_{3}
    \\right\\}
    `,
  },
] as FormulaItem[]

export default multipleLines
