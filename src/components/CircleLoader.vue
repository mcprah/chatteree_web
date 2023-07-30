<template>
  <div class="circle-loader"></div>
</template>
  
  <script>
export default {
  name: "circle-loader",
};
</script>
  
  <style lang="scss" scoped>
.circle-loader {
  width: 18px;
  height: 18px;
  border: 2px solid transparent;
  border-top: 1px solid $color-dark;
  border-right: 1px solid $color-dark;
  border-bottom: 1px solid $color-dark;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
  