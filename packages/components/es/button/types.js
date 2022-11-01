const ButtonType = [
  "default",
  "primary",
  "success",
  "warning",
  "error"
];
const ButtonSize = ["large", "normal", "small", "mini"];
const buttonProps = {
  type: {
    type: String,
    default: "default",
    validator(value) {
      return ButtonType.includes(value);
    }
  },
  size: {
    type: String,
    default: "normal",
    validator(val) {
      return ButtonSize.includes(val);
    }
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean
};
export {
  ButtonSize,
  ButtonType,
  buttonProps
};
