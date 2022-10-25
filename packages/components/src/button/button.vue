<script lang="ts">
import "./style/index.less";
import { computed, defineComponent } from "vue";
import { buttonProps } from "./types";
export default defineComponent({
  props: buttonProps,
  // props: { type: String },
  setup(props) {
    const sty = computed(() => {
      return {
        [`e-button-${props.type}`]: props.type,
        'e-is-plain':props.plain,
        'e-is-round':props.round,
        'is-disabled':props.disabled,
        [`e-button-${props.size}`]:props.size
      };
    });
    return {
      sty,
    };
  },
});
</script>

<template>
  <button class="e-button" :class="sty"> <slot/> </button>
</template>

<style scoped lang="less"></style>
