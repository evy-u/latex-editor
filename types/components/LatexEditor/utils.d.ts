export declare function setSelectionRange(node: HTMLElement | undefined, selectionStart?: number, selectionEnd?: number): void;
export declare function downloadImg(url: string): void;
export declare function insertNode(str: string, parentNode: HTMLElement | undefined, nodeIndex: number): {
    cursorNode: HTMLElement | undefined;
    cursorIndex: number;
};
export declare function observerNode(node: HTMLElement, cb: (selection: Selection | null) => void): Promise<void>;
export declare type CursorInfo = {
    cursorNode: HTMLElement | undefined;
    cursorNodeIndex: number;
};
export declare function getSelection(isChangeCursor: boolean): (CursorInfo & {
    isChangeCursor: boolean;
}) | null;
