import { SignItem } from './latex/type';
export declare function setSelectionRange(node: HTMLElement, selectionStart?: number, selectionEnd?: number): void;
export declare function downloadImg(url: string): void;
export declare function insertContent(content: string, str: string, index: number | null): string;
export declare function contentToHtml(str: string): {
    resultHtml: string;
    contentTree: SignItem[];
};
export declare function getNodeIdByDeep(signTree: SignItem[], id: string, noSame?: boolean): SignItem | null;
export declare function observerNode(node: HTMLElement): Promise<void>;
export declare function getCursorPosition(ele: InstanceType<typeof HTMLDivElement>): {
    start: number;
    end: number;
};
