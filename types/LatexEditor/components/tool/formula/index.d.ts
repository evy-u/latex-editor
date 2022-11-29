export declare const fontIconBaseUrl = "https://homework-webfront.oss-cn-beijing.aliyuncs.com/LatexIcon/";
export interface FormulaItem {
    name: string;
    icon: string;
    formula: string;
    desc: string;
}
export interface FormulaTypeItem {
    name: string;
    icon: string;
    data: FormulaItem[];
    visibleDataList?: boolean;
}
declare const list: FormulaTypeItem[];
export default list;
