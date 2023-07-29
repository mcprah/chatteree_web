<template>
  <div
    class="toast-container position-fixed top-0 start-50 translate-middle-x p-3"
  >
    <div
      class="toast align-items-center border-0"
      :class="toastClasses"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      id="cToast"
    >
      <div class="d-flex">
        <div class="toast-body">{{ message }}</div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "Message goes here",
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
  },
  computed: {
    toastClasses() {
      return {
        [`text-bg-${this.variant}`]: true,
      };
    },
  },
};
</script>

<style>
</style>