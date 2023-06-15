import { MatchItem } from './parse';
export declare function createElement(astTree: MatchItem[]): HTMLElement;
export declare function insertHtmlAtCaret(html: string): void;
export declare function observerNode(node: HTMLElement, cb: (mutation: MutationRecord) => void): Promise<void>;
export declare function deleteByBlock(): boolean;
export declare function recursiveFindDeepNode(node: Node): HTMLElement;
export declare function textToTextTag(mutation: MutationRecord): void;
export declare function getPosition(): null | {
    left: number;
    top: number;
};
