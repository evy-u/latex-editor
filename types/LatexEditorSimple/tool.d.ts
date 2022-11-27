import { type FormulaItem } from '../LatexEditor/components/tool/formula';
interface ModuleParam {
    container: string;
    handleClickFormula: (e: Event, signItem: FormulaItem) => void;
}
declare class LatexTool {
    private container;
    private handleClickFormula;
    constructor(parameters: ModuleParam);
    init(): void;
    createFormulesDom(): string;
    listenFormulaItemClick(cb: any): void;
}
export default LatexTool;
