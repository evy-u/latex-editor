export declare type MathJaxObject = {
    [x: string]: any;
    tex2chtmlPromise: (input: string) => Promise<HTMLElement>;
};
declare global {
    const MathJax: MathJaxObject;
    interface Window {
        MathJax: MathJaxObject;
    }
}
export declare function setMathJaxConfig(mathJaxConfig?: Record<string, any>): void;
/**
 *
 * @param ele HTMLElement
 * @param content String
 * @param option Object 非必传
 * @returns
 */
export declare function latexRender(option?: {
    lineBreak?: boolean;
    lineHeight?: string;
    textColor?: string;
    divideChinese?: false;
    wrapMathrm?: boolean;
}): Promise<any>;
