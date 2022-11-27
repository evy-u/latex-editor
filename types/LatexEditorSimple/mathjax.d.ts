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
export declare function renderLatex(ele: HTMLElement): Promise<any>;
