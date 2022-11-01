"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
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
  disabled: Boolean,
  icon: String
};
exports.ButtonSize = ButtonSize;
exports.ButtonType = ButtonType;
exports.buttonProps = buttonProps;
