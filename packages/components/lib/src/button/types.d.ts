import { ExtractPropTypes } from "vue";
export declare const ButtonType: string[];
export declare const ButtonIconPosition: string[];
export declare const ButtonSize: string[];
export declare const buttonProps: {
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
};
export declare type buttonProps = ExtractPropTypes<typeof buttonProps>;
