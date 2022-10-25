"use strict";
require("./style/index.css");
const vue = require("vue");
const types = require("./types.js");
const _sfc_main = vue.defineComponent({
  props: types.buttonProps,
  setup(props) {
    const sty = vue.computed(() => {
      return {
        [`e-button-${props.type}`]: props.type,
        "e-is-plain": props.plain,
        "e-is-round": props.round,
        "is-disabled": props.disabled,
        [`e-button-${props.size}`]: props.size
      };
    });
    return {
      sty
    };
  }
});
module.exports = _sfc_main;
