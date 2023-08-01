<template>
  <button
    :type="type"
    class="rounded-pill"
    :class="buttonClasses"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot name="left-icon"></slot>

    <slot></slot>

    <slot name="right-icon"></slot>
  </button>
</template>

<script>
export default {
  emits: ["click"],
  props: {
    type: {
      type: String,
      default: "button",
    },
    variant: {
      type: String,
      default: "primary",
      validator: (value) =>
        [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ].includes(value),
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["sm", "md", "lg"].includes(value),
    },
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    buttonClasses() {
      return {
        btn: true,
        [`btn-${this.variant}`]: true,
        [`btn-${this.size}`]: true,
        "btn-block": this.block,
        "text-dark": this.variant == "secondary" || this.variant == "light",
        "text-secondary": this.variant == "primary",
        "bg-white": this.variant == "light",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  font-weight: 500;
  font-size: 14px;

  &-icon {
    width: 48px;
    height: 48px;
  }
}
</style>