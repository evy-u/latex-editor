interface LatexOutputConfig {
    display?: 'block' | 'inline-block';
    globalRender?: boolean;
    lineHeight?: string;
    punctuation?: boolean;
    textColor?: string;
    lineClass?: boolean;
    divideChinese?: boolean;
}
interface LatexOutputParam {
    container: string;
    content: string;
    config: LatexOutputConfig;
}
declare class LatexOupt {
    private container;
    private content;
    private defaultConfig;
    private config;
    constructor(parameters: LatexOutputParam);
    init(): void;
    setContent(content: string): void;
}
export default LatexOupt;
