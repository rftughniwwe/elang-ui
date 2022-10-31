import { ExtractPropTypes } from "vue";

export const ButtonType = [
  "default",
  "primary",
  "success",
  "warning",
  "error",
];
export const ButtonSize = ["large", "normal", "small", "mini"];

export const buttonProps = {
  type: {
    type: String,
    default:'default',
    validator(value: string) {
      return ButtonType.includes(value);
    },
  },
  size:{
    type:String,
    default:'normal',
    validator(val:string){
      return ButtonSize.includes(val)
    }
  },
  plain:Boolean,
  round:Boolean,
  disabled:Boolean
};

export type buttonProps = ExtractPropTypes<typeof buttonProps>;
