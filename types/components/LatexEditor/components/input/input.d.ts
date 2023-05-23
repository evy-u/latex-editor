interface LatexInputParam {
    container: string;
    content?: string;
    contentChange?: (content: string, selection: Selection | null) => void;
}
declare class LatexInput {
    container: HTMLDivElement;
    private editContent;
    private contentChange;
    constructor(parameters: LatexInputParam);
    init(): void;
    observerDelete(): void;
    observerContentChange(selection: Selection | null): void;
    setEditContent(selection: Selection | null): void;
    getContainer(): HTMLDivElement;
    getContent(): string;
    removeFontTag(): void;
}
export default LatexInput;
