export declare const fontIconBaseUrl = "https://homework-webfront.oss-cn-beijing.aliyuncs.com/LatexIcon/";
export interface FormulaItem {
    name: string;
    icon: string;
    formula: string;
    isHandWrite?: boolean;
    exampleList: {
        content: string;
        isLatex: boolean;
    }[];
}
export interface FormulaTypeItem {
    name: string;
    icon: string;
    data: FormulaItem[] | string[];
    visibleDataList?: boolean;
    isBase?: boolean;
}
declare const list: FormulaTypeItem[];
export default list;
