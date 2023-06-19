import { TransformerConfig } from '@evyu/common-lib';
export type MathjaxOptionType = TransformerConfig & {
    lineHeight?: string;
    textColor?: string;
    alignBetween?: boolean;
    globalRender?: boolean;
};
interface LatexOutputParam {
    container: string;
    content: string;
    options?: MathjaxOptionType;
}
declare class LatexOupt {
    private container;
    private content;
    private defaultConfig;
    private config;
    constructor(parameters: LatexOutputParam);
    init(): void;
    setContent(content: string): void;
    latexToImage(): Promise<unknown>;
    changeOption(options: MathjaxOptionType): void;
}
export default LatexOupt;
