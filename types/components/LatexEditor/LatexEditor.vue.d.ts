import { nextTick } from 'vue';
import { FormulaItem } from './components/tool/formula';
declare const _sfc_main: import("vue").DefineComponent<{
    isTool: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    props: any;
    editContent: any;
    editRef: any;
    cursorInfo: any;
    isChangeCursor: any;
    handleClickFormula: (dataItem: FormulaItem) => void;
    setEditContent: () => void;
    Tool: import("vue").DefineComponent<{}, {
        emits: (event: "handleClickFormula", param: FormulaItem) => void;
        handleClickFormula: (dataItem: FormulaItem) => Promise<void>;
        readonly formulas: import("./components/tool/formula").FormulaTypeItem[];
        readonly fontIconBaseUrl: string;
        readonly ElPopover: import("element-plus/es/utils/types").SFCWithInstall<import("vue").DefineComponent<{
            title: StringConstructor;
            width: import("element-plus/es/utils/props").BuildPropReturn<(StringConstructor | NumberConstructor)[], number, unknown, unknown, unknown>;
            content: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, string | (() => string) | undefined, unknown, unknown, unknown>;
            popperStyle: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<import("vue").StyleValue>, string | import("vue").CSSProperties | (() => string) | (() => import("vue").CSSProperties) | (() => import("vue").StyleValue[]) | undefined, unknown, unknown, unknown>;
            popperClass: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | any[] | {
                [x: string]: any;
            })[])[])[])[])[])[])[])[])[])[]>, string | (() => string) | (() => {
                [x: string]: any;
            }) | (() => (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | any[] | {
                [x: string]: any;
            })[])[])[])[])[])[])[])[])[])[]) | undefined, unknown, unknown, unknown>;
            enterable: {
                default: boolean;
                type: import("vue").PropType<import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>>;
                required: false;
                validator: ((val: unknown) => boolean) | undefined;
                __elPropsReservedKey: true;
            };
            effect: {
                default: string;
                type: import("vue").PropType<string>;
                required: false;
                validator: ((val: unknown) => boolean) | undefined;
                __elPropsReservedKey: true;
            };
        }, {
            kls: import("vue").ComputedRef<(string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | any[] | {
                [x: string]: any;
            })[])[])[])[])[])[])[])[])[])[])[]>;
            style: import("vue").ComputedRef<import("vue").StyleValue>;
            tooltipRef: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    disabled: boolean;
                    style: import("vue").StyleValue;
                    transition: string;
                    offset: number;
                    effect: string;
                    visible: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<boolean | null>, unknown, unknown>;
                    arrowOffset: number;
                    boundariesPadding: number;
                    fallbackPlacements: import("element-plus").Placement[];
                    gpuAcceleration: import("element-plus/es/utils/props").BuildPropType<(new (...args: any[]) => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>) | (() => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>) | ((new (...args: any[]) => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>) | (() => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>))[], unknown, unknown>;
                    placement: import("element-plus/es/utils/props").BuildPropType<(new (...args: any[]) => "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>) | ((new (...args: any[]) => "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>))[], unknown, unknown>;
                    popperOptions: Partial<import("element-plus").Options>;
                    strategy: import("element-plus/es/utils/props").BuildPropType<(new (...args: any[]) => "absolute" | "fixed") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>) | ((new (...args: any[]) => "absolute" | "fixed") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>))[], unknown, unknown>;
                    className: string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | any[] | {
                        [x: string]: any;
                    })[])[])[])[])[])[])[])[])[])[];
                    enterable: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
                    pure: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
                    popperClass: string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | any[] | {
                        [x: string]: any;
                    })[])[])[])[])[])[])[])[])[])[];
                    popperStyle: import("vue").StyleValue;
                    referenceEl: HTMLElement;
                    stopPopperMouseEvent: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
                    content: string;
                    showAfter: number;
                    hideAfter: number;
                    appendTo: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<string | HTMLElement>, unknown, unknown>;
                    rawContent: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
                    persistent: boolean;
                    teleported: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
                    trigger: "click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[];
                    virtualRef: import("element-plus").Measurable;
                    virtualTriggering: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
                    openDelay: number;
                    visibleArrow: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
                    showArrow: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    openDelay: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    visibleArrow: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    hideAfter: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    showArrow: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    arrowOffset: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, number, unknown, unknown, unknown>;
                    disabled: BooleanConstructor;
                    trigger: {
                        type: import("vue").PropType<"click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]>;
                        default: string;
                    };
                    virtualRef: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                    virtualTriggering: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
                    appendTo: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | HTMLElement>, string | (() => string) | undefined, unknown, unknown, unknown>;
                    content: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, string | (() => string) | undefined, unknown, unknown, unknown>;
                    rawContent: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    persistent: BooleanConstructor;
                    ariaLabel: StringConstructor;
                    visible: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<boolean | null>, (() => null) | null | undefined, unknown, unknown, unknown>;
                    transition: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, string | (() => string) | undefined, unknown, unknown, unknown>;
                    teleported: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    style: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<import("vue").StyleValue>, string | import("vue").CSSProperties | (() => string) | (() => import("vue").CSSProperties) | (() => import("vue").StyleValue[]) | undefined, unknown, unknown, unknown>;
                    className: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | any[] | {
                        [x: string]: any;
                    })[])[])[])[])[])[])[])[])[])[]>, string | (() => string) | (() => {
                        [x: string]: any;
                    }) | (() => (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | any[] | {
                        [x: string]: any;
                    })[])[])[])[])[])[])[])[])[])[]) | undefined, unknown, unknown, unknown>;
                    effect: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, string | (() => string) | undefined, unknown, unknown, unknown>;
                    enterable: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    pure: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    popperClass: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | any[] | {
                        [x: string]: any;
                    })[])[])[])[])[])[])[])[])[])[]>, string | (() => string) | (() => {
                        [x: string]: any;
                    }) | (() => (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | any[] | {
                        [x: string]: any;
                    })[])[])[])[])[])[])[])[])[])[]) | undefined, unknown, unknown, unknown>;
                    popperStyle: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<import("vue").StyleValue>, string | import("vue").CSSProperties | (() => string) | (() => import("vue").CSSProperties) | (() => import("vue").StyleValue[]) | undefined, unknown, unknown, unknown>;
                    referenceEl: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<HTMLElement>, HTMLElement | (() => HTMLElement) | undefined, unknown, unknown, unknown>;
                    stopPopperMouseEvent: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    zIndex: NumberConstructor;
                    boundariesPadding: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => number & {}) | (() => number) | ((new (...args: any[]) => number & {}) | (() => number))[], 0 | (() => 0) | undefined, false, unknown, unknown>;
                    fallbackPlacements: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], (() => never[]) | undefined, false, unknown, unknown>;
                    gpuAcceleration: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>) | (() => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>) | ((new (...args: any[]) => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>) | (() => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>))[], true | (() => true) | undefined, false, unknown, unknown>;
                    offset: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => number & {}) | (() => number) | ((new (...args: any[]) => number & {}) | (() => number))[], 12 | (() => 12) | undefined, false, unknown, unknown>;
                    placement: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>) | ((new (...args: any[]) => "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>))[], "bottom" | (() => "bottom") | undefined, false, unknown, unknown>;
                    popperOptions: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], (() => {}) | undefined, false, unknown, unknown>;
                    strategy: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => "absolute" | "fixed") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>) | ((new (...args: any[]) => "absolute" | "fixed") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>))[], "absolute" | (() => "absolute") | undefined, false, unknown, unknown>;
                    showAfter: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, number, unknown, unknown, unknown>;
                }>> & {
                    [x: `on${string}`]: ((...args: any[]) => any) | undefined;
                } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "content" | "popperStyle" | "popperClass" | "enterable" | "effect" | "openDelay" | "visibleArrow" | "hideAfter" | "showArrow" | "arrowOffset" | "disabled" | "trigger" | "virtualRef" | "virtualTriggering" | "appendTo" | "rawContent" | "persistent" | "visible" | "transition" | "teleported" | "style" | "className" | "pure" | "referenceEl" | "stopPopperMouseEvent" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "offset" | "placement" | "popperOptions" | "strategy" | "showAfter">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    openDelay: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    visibleArrow: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    hideAfter: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    showArrow: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    arrowOffset: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, number, unknown, unknown, unknown>;
                    disabled: BooleanConstructor;
                    trigger: {
                        type: import("vue").PropType<"click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]>;
                        default: string;
                    };
                    virtualRef: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                    virtualTriggering: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
                    appendTo: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | HTMLElement>, string | (() => string) | undefined, unknown, unknown, unknown>;
                    content: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, string | (() => string) | undefined, unknown, unknown, unknown>;
                    rawContent: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    persistent: BooleanConstructor;
                    ariaLabel: StringConstructor;
                    visible: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<boolean | null>, (() => null) | null | undefined, unknown, unknown, unknown>;
                    transition: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, string | (() => string) | undefined, unknown, unknown, unknown>;
                    teleported: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    style: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<import("vue").StyleValue>, string | import("vue").CSSProperties | (() => string) | (() => import("vue").CSSProperties) | (() => import("vue").StyleValue[]) | undefined, unknown, unknown, unknown>;
                    className: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | any[] | {
                        [x: string]: any;
                    })[])[])[])[])[])[])[])[])[])[]>, string | (() => string) | (() => {
                        [x: string]: any;
                    }) | (() => (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | any[] | {
                        [x: string]: any;
                    })[])[])[])[])[])[])[])[])[])[]) | undefined, unknown, unknown, unknown>;
                    effect: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, string | (() => string) | undefined, unknown, unknown, unknown>;
                    enterable: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    pure: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    popperClass: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | any[] | {
                        [x: string]: any;
                    })[])[])[])[])[])[])[])[])[])[]>, string | (() => string) | (() => {
                        [x: string]: any;
                    }) | (() => (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | any[] | {
                        [x: string]: any;
                    })[])[])[])[])[])[])[])[])[])[]) | undefined, unknown, unknown, unknown>;
                    popperStyle: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<import("vue").StyleValue>, string | import("vue").CSSProperties | (() => string) | (() => import("vue").CSSProperties) | (() => import("vue").StyleValue[]) | undefined, unknown, unknown, unknown>;
                    referenceEl: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<HTMLElement>, HTMLElement | (() => HTMLElement) | undefined, unknown, unknown, unknown>;
                    stopPopperMouseEvent: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    zIndex: NumberConstructor;
                    boundariesPadding: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => number & {}) | (() => number) | ((new (...args: any[]) => number & {}) | (() => number))[], 0 | (() => 0) | undefined, false, unknown, unknown>;
                    fallbackPlacements: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], (() => never[]) | undefined, false, unknown, unknown>;
                    gpuAcceleration: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>) | (() => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>) | ((new (...args: any[]) => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>) | (() => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>))[], true | (() => true) | undefined, false, unknown, unknown>;
                    offset: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => number & {}) | (() => number) | ((new (...args: any[]) => number & {}) | (() => number))[], 12 | (() => 12) | undefined, false, unknown, unknown>;
                    placement: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>) | ((new (...args: any[]) => "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>))[], "bottom" | (() => "bottom") | undefined, false, unknown, unknown>;
                    popperOptions: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], (() => {}) | undefined, false, unknown, unknown>;
                    strategy: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => "absolute" | "fixed") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>) | ((new (...args: any[]) => "absolute" | "fixed") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>))[], "absolute" | (() => "absolute") | undefined, false, unknown, unknown>;
                    showAfter: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, number, unknown, unknown, unknown>;
                }>> & {
                    [x: `on${string}`]: ((...args: any[]) => any) | undefined;
                }, {
                    compatShowAfter: import("vue").ComputedRef<number>;
                    compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>>;
                    popperRef: import("vue").Ref<({
                        $: import("vue").ComponentInternalInstance;
                        $data: {};
                        $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
                        $attrs: {
                            [x: string]: unknown;
                        };
                        $refs: {
                            [x: string]: unknown;
                        };
                        $slots: Readonly<{
                            [name: string]: import("vue").Slot | undefined;
                        }>;
                        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
                        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
                        $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
                        $el: any;
                        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, import("element-plus").ElPopperInjectionContext, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}, {}, string> & {
                            beforeCreate?: (() => void) | (() => void)[] | undefined;
                            created?: (() => void) | (() => void)[] | undefined;
                            beforeMount?: (() => void) | (() => void)[] | undefined;
                            mounted?: (() => void) | (() => void)[] | undefined;
                            beforeUpdate?: (() => void) | (() => void)[] | undefined;
                            updated?: (() => void) | (() => void)[] | undefined;
                            activated?: (() => void) | (() => void)[] | undefined;
                            deactivated?: (() => void) | (() => void)[] | undefined;
                            beforeDestroy?: (() => void) | (() => void)[] | undefined;
                            beforeUnmount?: (() => void) | (() => void)[] | undefined;
                            destroyed?: (() => void) | (() => void)[] | undefined;
                            unmounted?: (() => void) | (() => void)[] | undefined;
                            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[] | undefined;
                        };
                        $forceUpdate: () => void;
                        $nextTick: typeof nextTick;
                        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                    } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<import("element-plus").ElPopperInjectionContext> & import("vue").ComponentCustomProperties) | null>;
                    open: import("vue").Ref<boolean>;
                    hide: () => void;
                    updatePopper: () => void;
                    onOpen: () => void;
                    onClose: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                    disabled: boolean;
                    style: import("vue").StyleValue;
                    transition: string;
                    offset: number;
                    effect: string;
                    visible: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<boolean | null>, unknown, unknown>;
                    arrowOffset: number;
                    boundariesPadding: number;
                    fallbackPlacements: import("element-plus").Placement[];
                    gpuAcceleration: import("element-plus/es/utils/props").BuildPropType<(new (...args: any[]) => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>) | (() => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>) | ((new (...args: any[]) => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>) | (() => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>))[], unknown, unknown>;
                    placement: import("element-plus/es/utils/props").BuildPropType<(new (...args: any[]) => "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>) | ((new (...args: any[]) => "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>))[], unknown, unknown>;
                    popperOptions: Partial<import("element-plus").Options>;
                    strategy: import("element-plus/es/utils/props").BuildPropType<(new (...args: any[]) => "absolute" | "fixed") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>) | ((new (...args: any[]) => "absolute" | "fixed") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>))[], unknown, unknown>;
                    className: string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | any[] | {
                        [x: string]: any;
                    })[])[])[])[])[])[])[])[])[])[];
                    enterable: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
                    pure: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
                    popperClass: string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | {
                        [x: string]: any;
                    } | (string | any[] | {
                        [x: string]: any;
                    })[])[])[])[])[])[])[])[])[])[];
                    popperStyle: import("vue").StyleValue;
                    referenceEl: HTMLElement;
                    stopPopperMouseEvent: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
                    content: string;
                    showAfter: number;
                    hideAfter: number;
                    appendTo: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<string | HTMLElement>, unknown, unknown>;
                    rawContent: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
                    persistent: boolean;
                    teleported: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
                    trigger: "click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[];
                    virtualRef: import("element-plus").Measurable;
                    virtualTriggering: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
                    openDelay: number;
                    visibleArrow: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
                    showArrow: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
                }, {}, string> & {
                    beforeCreate?: (() => void) | (() => void)[] | undefined;
                    created?: (() => void) | (() => void)[] | undefined;
                    beforeMount?: (() => void) | (() => void)[] | undefined;
                    mounted?: (() => void) | (() => void)[] | undefined;
                    beforeUpdate?: (() => void) | (() => void)[] | undefined;
                    updated?: (() => void) | (() => void)[] | undefined;
                    activated?: (() => void) | (() => void)[] | undefined;
                    deactivated?: (() => void) | (() => void)[] | undefined;
                    beforeDestroy?: (() => void) | (() => void)[] | undefined;
                    beforeUnmount?: (() => void) | (() => void)[] | undefined;
                    destroyed?: (() => void) | (() => void)[] | undefined;
                    unmounted?: (() => void) | (() => void)[] | undefined;
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[] | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                openDelay: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                visibleArrow: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                hideAfter: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                showArrow: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                arrowOffset: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, number, unknown, unknown, unknown>;
                disabled: BooleanConstructor;
                trigger: {
                    type: import("vue").PropType<"click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]>;
                    default: string;
                };
                virtualRef: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                virtualTriggering: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
                appendTo: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | HTMLElement>, string | (() => string) | undefined, unknown, unknown, unknown>;
                content: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, string | (() => string) | undefined, unknown, unknown, unknown>;
                rawContent: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                persistent: BooleanConstructor;
                ariaLabel: StringConstructor;
                visible: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<boolean | null>, (() => null) | null | undefined, unknown, unknown, unknown>;
                transition: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, string | (() => string) | undefined, unknown, unknown, unknown>;
                teleported: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                style: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<import("vue").StyleValue>, string | import("vue").CSSProperties | (() => string) | (() => import("vue").CSSProperties) | (() => import("vue").StyleValue[]) | undefined, unknown, unknown, unknown>;
                className: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | any[] | {
                    [x: string]: any;
                })[])[])[])[])[])[])[])[])[])[]>, string | (() => string) | (() => {
                    [x: string]: any;
                }) | (() => (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | any[] | {
                    [x: string]: any;
                })[])[])[])[])[])[])[])[])[])[]) | undefined, unknown, unknown, unknown>;
                effect: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, string | (() => string) | undefined, unknown, unknown, unknown>;
                enterable: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                pure: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                popperClass: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | any[] | {
                    [x: string]: any;
                })[])[])[])[])[])[])[])[])[])[]>, string | (() => string) | (() => {
                    [x: string]: any;
                }) | (() => (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | {
                    [x: string]: any;
                } | (string | any[] | {
                    [x: string]: any;
                })[])[])[])[])[])[])[])[])[])[]) | undefined, unknown, unknown, unknown>;
                popperStyle: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<import("vue").StyleValue>, string | import("vue").CSSProperties | (() => string) | (() => import("vue").CSSProperties) | (() => import("vue").StyleValue[]) | undefined, unknown, unknown, unknown>;
                referenceEl: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<HTMLElement>, HTMLElement | (() => HTMLElement) | undefined, unknown, unknown, unknown>;
                stopPopperMouseEvent: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                zIndex: NumberConstructor;
                boundariesPadding: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => number & {}) | (() => number) | ((new (...args: any[]) => number & {}) | (() => number))[], 0 | (() => 0) | undefined, false, unknown, unknown>;
                fallbackPlacements: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], (() => never[]) | undefined, false, unknown, unknown>;
                gpuAcceleration: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>) | (() => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>) | ((new (...args: any[]) => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>) | (() => import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>))[], true | (() => true) | undefined, false, unknown, unknown>;
                offset: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => number & {}) | (() => number) | ((new (...args: any[]) => number & {}) | (() => number))[], 12 | (() => 12) | undefined, false, unknown, unknown>;
                placement: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>) | ((new (...args: any[]) => "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>))[], "bottom" | (() => "bottom") | undefined, false, unknown, unknown>;
                popperOptions: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], (() => {}) | undefined, false, unknown, unknown>;
                strategy: import("element-plus/es/utils/props").BuildPropReturn<(new (...args: any[]) => "absolute" | "fixed") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>) | ((new (...args: any[]) => "absolute" | "fixed") | (() => import("element-plus/es/utils/props").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>))[], "absolute" | (() => "absolute") | undefined, false, unknown, unknown>;
                showAfter: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, number, unknown, unknown, unknown>;
            }>> & {
                [x: `on${string}`]: ((...args: any[]) => any) | undefined;
            } & import("vue").ShallowUnwrapRef<{
                compatShowAfter: import("vue").ComputedRef<number>;
                compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>>;
                popperRef: import("vue").Ref<({
                    $: import("vue").ComponentInternalInstance;
                    $data: {};
                    $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
                    $attrs: {
                        [x: string]: unknown;
                    };
                    $refs: {
                        [x: string]: unknown;
                    };
                    $slots: Readonly<{
                        [name: string]: import("vue").Slot | undefined;
                    }>;
                    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
                    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
                    $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
                    $el: any;
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, import("element-plus").ElPopperInjectionContext, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}, {}, string> & {
                        beforeCreate?: (() => void) | (() => void)[] | undefined;
                        created?: (() => void) | (() => void)[] | undefined;
                        beforeMount?: (() => void) | (() => void)[] | undefined;
                        mounted?: (() => void) | (() => void)[] | undefined;
                        beforeUpdate?: (() => void) | (() => void)[] | undefined;
                        updated?: (() => void) | (() => void)[] | undefined;
                        activated?: (() => void) | (() => void)[] | undefined;
                        deactivated?: (() => void) | (() => void)[] | undefined;
                        beforeDestroy?: (() => void) | (() => void)[] | undefined;
                        beforeUnmount?: (() => void) | (() => void)[] | undefined;
                        destroyed?: (() => void) | (() => void)[] | undefined;
                        unmounted?: (() => void) | (() => void)[] | undefined;
                        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[] | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<import("element-plus").ElPopperInjectionContext> & import("vue").ComponentCustomProperties) | null>;
                open: import("vue").Ref<boolean>;
                hide: () => void;
                updatePopper: () => void;
                onOpen: () => void;
                onClose: () => void;
            }> & import("vue").ComponentCustomProperties) | null>;
            popperRef: import("vue").ComputedRef<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
                $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, import("element-plus").ElPopperInjectionContext, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}, {}, string> & {
                    beforeCreate?: (() => void) | (() => void)[] | undefined;
                    created?: (() => void) | (() => void)[] | undefined;
                    beforeMount?: (() => void) | (() => void)[] | undefined;
                    mounted?: (() => void) | (() => void)[] | undefined;
                    beforeUpdate?: (() => void) | (() => void)[] | undefined;
                    updated?: (() => void) | (() => void)[] | undefined;
                    activated?: (() => void) | (() => void)[] | undefined;
                    deactivated?: (() => void) | (() => void)[] | undefined;
                    beforeDestroy?: (() => void) | (() => void)[] | undefined;
                    beforeUnmount?: (() => void) | (() => void)[] | undefined;
                    destroyed?: (() => void) | (() => void)[] | undefined;
                    unmounted?: (() => void) | (() => void)[] | undefined;
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[] | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<import("element-plus").ElPopperInjectionContext> & import("vue").ComponentCustomProperties) | null | undefined>;
            hide: () => void;
            afterEnter: () => void;
            afterLeave: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            title: StringConstructor;
            width: import("element-plus/es/utils/props").BuildPropReturn<(StringConstructor | NumberConstructor)[], number, unknown, unknown, unknown>;
            content: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, string | (() => string) | undefined, unknown, unknown, unknown>;
            popperStyle: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<import("vue").StyleValue>, string | import("vue").CSSProperties | (() => string) | (() => import("vue").CSSProperties) | (() => import("vue").StyleValue[]) | undefined, unknown, unknown, unknown>;
            popperClass: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | any[] | {
                [x: string]: any;
            })[])[])[])[])[])[])[])[])[])[]>, string | (() => string) | (() => {
                [x: string]: any;
            }) | (() => (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | any[] | {
                [x: string]: any;
            })[])[])[])[])[])[])[])[])[])[]) | undefined, unknown, unknown, unknown>;
            enterable: {
                default: boolean;
                type: import("vue").PropType<import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>>;
                required: false;
                validator: ((val: unknown) => boolean) | undefined;
                __elPropsReservedKey: true;
            };
            effect: {
                default: string;
                type: import("vue").PropType<string>;
                required: false;
                validator: ((val: unknown) => boolean) | undefined;
                __elPropsReservedKey: true;
            };
        }>> & {
            [x: `on${string}`]: ((...args: any[]) => any) | undefined;
        }, {
            width: import("element-plus/es/utils/props").BuildPropType<(StringConstructor | NumberConstructor)[], unknown, unknown>;
            effect: string;
            enterable: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
            popperClass: string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | any[] | {
                [x: string]: any;
            })[])[])[])[])[])[])[])[])[])[];
            popperStyle: import("vue").StyleValue;
            content: string;
        }>> & {
            directive: import("element-plus/es/utils/types").SFCWithInstall<import("vue").ObjectDirective<any, any>>;
        };
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "handleClickFormula"[], "handleClickFormula", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
        onHandleClickFormula?: ((...args: any[]) => any) | undefined;
    }, {}>;
    readonly KeMathJax: import("vue").DefineComponent<{
        content: {
            type: StringConstructor;
            required: true;
        };
        display: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        globalRender: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        lineHeight: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        punctuation: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        textColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        lineClass: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        divideChinese: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }, {
        props: {
            content: string;
            display: "block" | "inline-block";
            globalRender: boolean;
            lineHeight: string;
            punctuation: boolean;
            textColor: string;
            lineClass: boolean;
            divideChinese: boolean;
        };
        mathJaxRef: any;
        renderText: any;
        emits: {
            (e: "onFirstRendered"): void;
            (e: "onUpdateRendered"): void;
        };
        renderRef: (callback?: Function | undefined) => void;
        render: () => Promise<any>;
        lineBlock: "block" | "inline-block";
        mjxTexatomWhiteSpace: string;
        mjxcontainerOverflowX: string;
        mjxcontainerMaxWidth: string;
        fourlineruledSpace: string;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onFirstRendered" | "onUpdateRendered")[], "onFirstRendered" | "onUpdateRendered", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        content: {
            type: StringConstructor;
            required: true;
        };
        display: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        globalRender: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        lineHeight: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        punctuation: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        textColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        lineClass: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        divideChinese: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>> & {
        onOnFirstRendered?: ((...args: any[]) => any) | undefined;
        onOnUpdateRendered?: ((...args: any[]) => any) | undefined;
    }, {
        display: string;
        globalRender: boolean;
        lineHeight: string;
        punctuation: boolean;
        textColor: string;
        lineClass: boolean;
        divideChinese: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isTool: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    isTool: boolean;
}>;
export default _sfc_main;
