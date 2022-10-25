import { ExtractPropTypes } from "vue";
export declare const ButtonType: string[];
export declare const ButtonSize: string[];
export declare const buttonProps: {
    type: {
        type: StringConstructor;
        default: string;
        validator(value: string): boolean;
    };
};
export declare type buttonProps = ExtractPropTypes<typeof buttonProps>;
