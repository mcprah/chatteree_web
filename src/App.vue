
<template>
  <RouterView id="appWrapper" />
</template>

<script>
</script>

<style lang="scss">
#appWrapper {
  height: 100vh;
  #logo {
    width: 140px;
  }

  .otp-input {
    width: 54px;
    height: 64px;
    padding: 6px;
    margin-right: 16px;
    text-align: center;
    font-weight: bold;
    border: none;
    background-color: #f7f7f7;
    border-radius: 12px;
    outline: none;
    font-size: 16px;
  }
  .swiper-button-next {
    right: 4px;
  }
  .swiper-button-prev {
    left: 4px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 32px !important;
    height: 32px !important;
    background: $color-white !important;
    border-radius: 50%;
    box-shadow: $box-shadow-lg;

    &:after {
      font-size: 12px !important;
      color: $color-dark !important;
    }
  }
}
</style>