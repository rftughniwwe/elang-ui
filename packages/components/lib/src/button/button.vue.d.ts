declare const _sfc_main: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
        validator(value: string): boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator(val: string): boolean;
    };
    plain: BooleanConstructor;
    round: BooleanConstructor;
    disabled: BooleanConstructor;
    icon: StringConstructor;
    iconPosition: {
        type: StringConstructor;
        default: string;
        validator(value: string): boolean;
    };
}, {
    sty: import("vue").ComputedRef<{
        [x: string]: string | boolean;
        "e-is-plain": boolean;
        "e-is-round": boolean;
        "is-disabled": boolean;
    }>;
    iconFont: import("vue").ComputedRef<{
        iconName: string;
        position: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
        validator(value: string): boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator(val: string): boolean;
    };
    plain: BooleanConstructor;
    round: BooleanConstructor;
    disabled: BooleanConstructor;
    icon: StringConstructor;
    iconPosition: {
        type: StringConstructor;
        default: string;
        validator(value: string): boolean;
    };
}>>, {
    type: string;
    size: string;
    plain: boolean;
    round: boolean;
    disabled: boolean;
    iconPosition: string;
}>;
export default _sfc_main;
