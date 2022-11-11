import { type MatchRecursiveValueNameMatch } from 'xregexp';
export declare enum NameType {
    txt = "txt",
    latex = "latex",
    special = "special",
    between = "between"
}
export declare type MatchValueItem = SignItem & MatchRecursiveValueNameMatch;
export interface SignItem {
    brackets?: {
        [key: number]: SignItem[];
    };
    name: NameType;
    value: string;
    __value: string;
    start: number;
    end: number;
    __start: number;
    __end: number;
    parentNode?: SignItem;
    __id: number;
}
