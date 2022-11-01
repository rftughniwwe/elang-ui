import { ExtractPropTypes } from "vue";

export const ButtonType = [
  "default",
  "primary",
  "success",
  "warning",
  "error",
];

export const ButtonIconPosition = ['left','right']

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
  disabled:Boolean,
  icon:String,
  iconPosition:{
    type:String,
    default:'left',
    validator(value:string){
      return ButtonIconPosition.includes(value)
    }
  },
};

export type buttonProps = ExtractPropTypes<typeof buttonProps>;
