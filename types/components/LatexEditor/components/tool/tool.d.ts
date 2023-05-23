import { type FormulaItem } from '../../formula';
interface ModuleParam {
    container: string;
    handleClickFormula: (e: Event, signItem: FormulaItem) => void;
}
declare class Tool {
    private container;
    private handleClickFormula;
    constructor(parameters: ModuleParam);
    init(): void;
    createFormulesDom(): string;
    listenFormulaItemClick(cb: any): void;
    hidden(): void;
}
export default Tool;
