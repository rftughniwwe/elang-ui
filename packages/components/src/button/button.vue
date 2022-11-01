<script lang="ts">
import "./style/index.less";
import { computed, defineComponent } from "vue";
import { buttonProps } from "./types";
// import Icon from "../Icon/icon.vue";
export default defineComponent({
  props: buttonProps,
  setup(props) {
    const sty = computed(() => {
      return {
        [`e-button-${props.type}`]: props.type,
        "e-is-plain": props.plain,
        "e-is-round": props.round,
        "is-disabled": props.disabled,
        [`e-button-${props.size}`]: props.size,
      };
    });

    const iconFont = computed(() => {
      const iconName = props.icon as string;
      const position = props.iconPosition as string;
      return {
        iconName,
        position,
      };
    });

    return {
      sty,
      iconFont,
    };
  },
});
</script>

<template>
  <button class="e-button" :class="sty">
    <!-- <Icon
      v-if="iconFont.position === 'left' && iconFont.iconName"
      :icon="iconFont.iconName"
    /> -->
    <slot />
    <!-- <Icon
      v-if="iconFont.position === 'right' && iconFont.iconName"
      :icon="iconFont.iconName"
    /> -->
  </button>
</template>

<style scoped lang="less"></style>
