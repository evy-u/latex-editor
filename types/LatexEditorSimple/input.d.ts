import { FormulaItem } from '../LatexEditor/components/tool/formula';
interface LatexInputParam {
    container: string;
    contentChange: (content: string) => void;
}
declare class LatexInput {
    private container;
    private editContent;
    private cursorInfo;
    private contentChange;
    private isChangeCursor;
    constructor(parameters: LatexInputParam);
    init(): void;
    observerContentChange(selection: Selection | null): void;
    getSelectionInfo(): void;
    setCursorPosition(dataItem: FormulaItem): void;
    setEditContent(): void;
}
export default LatexInput;
