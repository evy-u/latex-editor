type OptionsT = {
    showTool?: boolean;
    content?: string;
    mathOption?: MathjaxOptionType;
};
import { MathjaxOptionType } from './components/output/output';
import { FormulaItem } from './formula';
declare class LatexEditor {
    showTool: boolean;
    content: string;
    private container;
    private Tool;
    private Input;
    private Output;
    private mathOption;
    constructor(ele: any, options: OptionsT);
    init(): void;
    createTool(): void;
    createInput(): void;
    createOutput(): void;
    inserContent(str: string): void;
    handleClickFormula(ev: any, data: FormulaItem): void;
    getRangeInfo(): void;
    optionChange(config: MathjaxOptionType): void;
    globalRenderContent(): void;
}
export default LatexEditor;
