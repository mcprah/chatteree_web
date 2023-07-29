
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
}
</style>