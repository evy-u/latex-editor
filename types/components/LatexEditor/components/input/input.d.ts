interface LatexInputParam {
    container: string;
    content?: string;
    contentChange?: (content: string, selection: Selection | null) => void;
}
declare class LatexInput {
    readonly container: HTMLDivElement;
    private editContent;
    private contentChange;
    /**
     * suggest attr start
     */
    private keyLanguage;
    private suggestVal;
    /**
     * suggest attr end
     */
    constructor(parameters: LatexInputParam);
    init(): void;
    observerDelete(): void;
    observerContentChange(mutation: MutationRecord): void;
    setEditContent(): void;
    getContainer(): HTMLDivElement;
    getContent(): string;
    visibleSuggestionOption(val?: string): void;
    addKeyEvent(): void;
    removeFontTag(): void;
    getSuggestPanelEle(): HTMLElement | null;
    hideSuggestPanelEle(ele: HTMLElement): void;
}
export default LatexInput;
