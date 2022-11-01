"use strict";
const vue = require("vue");
const _sfc_main = vue.defineComponent({
  name: "Icon",
  props: {
    icon: { type: String, required: true },
    size: { type: String, default: "17px" }
  },
  setup() {
    return {};
  }
});
module.exports = _sfc_main;
