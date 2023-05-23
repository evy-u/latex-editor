export declare enum MathType {
    latex = "latex",
    text = "text"
}
export declare type MatchItem = {
    start: number;
    end: number;
    match: string;
    bodyStart: number;
    bodyEnd: number;
    children: MatchItem[];
    type: MathType;
};
/**
 * 1. 按照大括号分割成带有children结构的数据 matchRes
 * 2. 遍历matchRes， 按照下标去将latexIcon和非latexIcon填充进去
 *    2.1 注意处理特殊情况 otherList
 *    2.2 有children的，递归处理
 * 3.
 */
export default function parseRecursive(str: string): MatchItem[];
