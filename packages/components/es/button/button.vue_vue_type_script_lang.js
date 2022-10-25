import "./style/index.css";
import { defineComponent, computed } from "vue";
import { buttonProps } from "./types.js";
const _sfc_main = defineComponent({
  props: buttonProps,
  setup(props) {
    const sty = computed(() => {
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
export {
  _sfc_main as default
};
