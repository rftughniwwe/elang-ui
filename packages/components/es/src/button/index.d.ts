import type { Plugin } from "vue";
declare type SFCWithInstall<T> = T & Plugin;
declare const Button: SFCWithInstall<import("vue").DefineComponent<{
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
}, {
    sty: import("vue").ComputedRef<{
        [x: string]: string | boolean;
        'e-is-plain': boolean;
        'e-is-round': boolean;
        'is-disabled': boolean;
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
}>>, {
    type: string;
    size: string;
    plain: boolean;
    round: boolean;
    disabled: boolean;
}>>;
export default Button;
