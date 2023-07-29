<template>
  <div class="otp-input-container">
    <input
      v-for="(input, index) in numberOfInputs"
      :key="index"
      :id="index"
      ref="inputFields"
      v-model="otpDigits[index - 1]"
      @input="handleInput"
      @keydown="handleKeyDown"
      @focus="focusInput(index)"
      @blur="blurInput(index)"
      type="text"
      class="otp-input"
      maxlength="1"
      :style="{ width: inputWidth, height: inputHeight }"
    />
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      otpDigits: ["", "", "", "", "", ""],
      focusedIndex: 0,
      inputWidth: "54px",
      inputHeight: "64px",
      numberOfInputs: 6,
    };
  },
  methods: {
    handleInput() {
      //   console.log(this.otpDigits);
      const nextIndex = this.focusedIndex + 1;
      if (nextIndex <= this.numberOfInputs) {
        this.focusedIndex = nextIndex;
        this.$refs.inputFields[nextIndex].focus();
      }
    },
    handleKeyDown(event) {
      let currentIndex = event.target.id;
      const inputFields = this.$refs.inputFields;

      switch (event.key) {
        case "ArrowLeft":
          if (currentIndex > 0) inputFields[currentIndex - 1].focus();
          break;

        default:
          break;
      }

      //   if (event.key === "ArrowLeft" && currentIndex > 0) {
      //     inputFields[currentIndex - 2].focus();
      //   } else if (
      //     event.key === "ArrowRight" &&
      //     currentIndex < this.numberOfInputs - 1
      //   ) {
      //     inputFields[currentIndex - 0 + 1].focus();
      //   } else if (event.key === "Backspace" && currentIndex > 1) {
      //     // If the Backspace key is pressed and the current input field is not the first one,
      //     // focus on the previous input field
      //     inputFields[currentIndex - 2].focus();
      //   } else {
      //     return;
      //   }
    },
    focusInput(index) {
      this.focusedIndex = index;
    },
    blurInput(index) {
      if (this.focusedIndex === index) {
        this.focusedIndex = 0;
      }
    },
  },
};
</script>
  
<style lang="scss" scoped>
.otp-input-container {
  display: flex;
  .otp-input {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    border: none;
    background-color: #f7f7f7;
    border-radius: 12px;
    outline: none;

    &:not(:last-of-type) {
      margin-right: 16px;
    }
  }
}
</style>
  