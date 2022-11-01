"use strict";
const icon_vue_vue_type_script_lang = require("./icon.vue_vue_type_script_lang.js");
const vue = require("vue");
require("./icon.vue?vue&type=style&index=0&scoped=f593dc61&lang.css");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = ["data-icon"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: "icon-wrap",
    style: vue.normalizeStyle({ fontSize: _ctx.size })
  }, [
    vue.createElementVNode("span", {
      class: "iconify m-iconify",
      "data-icon": _ctx.icon
    }, null, 8, _hoisted_1)
  ], 4);
}
const Icon = /* @__PURE__ */ _pluginVue_exportHelper(icon_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-f593dc61"]]);
module.exports = Icon;
