import { FormulaItem } from './index'

const matrixs = [
  {
    name: '矩阵',
    icon: `\\begin{matrix}...\\end{matrix}`,
    formula: `\\begin{matrix}
1 & x & x^{2} \\\\
1 & y & y^{2} \\\\
1 & z & z^{2} \\\\
\\end{matrix}`,
  },
  {
    name: '矩阵',
    icon: `\\begin{pmatrix}...\\end{pmatrix}`,
    formula: `\\begin{pmatrix}
1 & x & x^{2} \\\\
1 & y & y^{2} \\\\
1 & z & z^{2} \\\\
\\end{pmatrix}`,
  },
  {
    name: '矩阵',
    icon: `\\begin{bmatrix}...\\end{bmatrix}`,
    formula: `\\begin{bmatrix}
1 & x & x^{2} \\\\
1 & y & y^{2} \\\\
1 & z & z^{2} \\\\
\\end{bmatrix}`,
  },
  {
    name: '矩阵',
    icon: `\\begin{Bmatrix}...\\end{Bmatrix}`,
    formula: `\\begin{Bmatrix}
1 & x & x^{2} \\\\
1 & y & y^{2} \\\\
1 & z & z^{2} \\\\
\\end{Bmatrix}`,
  },
  {
    name: '矩阵',
    icon: `\\begin{vmatrix}...\\end{vmatrix}`,
    formula: `\\begin{vmatrix}
1 & x & x^{2} \\\\
1 & y & y^{2} \\\\
1 & z & z^{2} \\\\
\\end{vmatrix}`,
  },
  {
    name: '矩阵',
    icon: `\\begin{Vmatrix}...\\end{Vmatrix}`,
    formula: `\\begin{Vmatrix}
1 & x & x^{2} \\\\
1 & y & y^{2} \\\\
1 & z & z^{2} \\\\
\\end{Vmatrix}`,
  },
  {
    name: '模运算',
    icon: `\\pmod{n}`,
    formula: `\\pmod{n}`,
  },
  {
    name: '排列',
    icon: `\\binom{n+1}{2k}`,
    formula: `\\binom{n+1}{2k}`,
  },
] as FormulaItem[]

export default matrixs
