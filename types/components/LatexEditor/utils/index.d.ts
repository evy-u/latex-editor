import { MatchItem } from './parse';
export declare function createElement(astTree: MatchItem[]): HTMLElement;
export declare function insertHtmlAtCaret(html: string): void;
export declare function observerNode(node: HTMLElement, cb: (selection: Selection | null) => void): Promise<void>;
export declare function deleteByBlock(): boolean;
