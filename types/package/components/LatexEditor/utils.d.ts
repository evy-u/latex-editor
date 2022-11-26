import { SignItem } from './latex/type';
export declare function setSelectionRange(node: HTMLElement | null, selectionStart?: number, selectionEnd?: number): void;
export declare function downloadImg(url: string): void;
export declare function insertContent(content: string, str: string, index: number | null): string;
export declare function insertNode(str: string, parentNode: HTMLElement): {
    cursorNode: HTMLElement;
    cursorIndex: number;
};
export declare function contentToHtml(str: string): {
    contentTree: SignItem[];
    resultHtml: string;
};
export declare function getNodeIdByDeep(signTree: SignItem[], id: string, noSame?: boolean): SignItem | null;
export declare function getNodeByDeep(ele: HTMLElement): HTMLElement | undefined;
export declare function observerNode(node: HTMLElement): Promise<void>;
export declare type CursorInfo = {
    cursorNode: HTMLElement;
    cursorNodeIndex: number;
    cursorContentIndex: number;
    currentNodeId: number;
};
/**
 *
 * 如果 cursorNode 是文字节点，那么cursorNodeIndex就是从该文字节点的第一个字开始，直到被选中的第一个字之间的字数（如果第一个字就被选中，那么偏移量为零）再加上被选中文字的长度。
 * 如果 cursorNode 是一个元素，那么cursorNodeIndex就是在选区最后一个节点的同级节点总数的下标。(这些节点都是 cursorNode 的子节点)
 */
export declare function getCursorInfo(node: SignItem): CursorInfo;
