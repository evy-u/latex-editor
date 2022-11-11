import { SignItem, MatchValueItem } from './type';
export declare function matchBackets(str: string, left?: string, right?: string): MatchValueItem[];
export declare function parseStrRecursive(str: string, parentNode?: SignItem): SignItem[];
export declare function resetData(): void;
