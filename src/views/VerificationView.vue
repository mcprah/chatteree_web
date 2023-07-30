<template>
  <main class="container">
    <div class="row align-items-center h-100">
      <div class="col-md-12 h-100 p-3 p-md-5">
        <div class="d-flex flex-column position-relative mx-auto">
          <CButton
            class="p-0 shadow-sm btn-icon position-absolute top-0 start-0"
            variant="light"
            id="btnBack"
            @click="$router.replace('/')"
          >
            <img
              src="@/assets/icons/icon/arrow/arrow-left.svg"
              alt="back button"
              id="back"
            />
          </CButton>
          <div class="container mt-2">
            <div class="row justify-content-center">
              <div class="col-md-5 px-3">
                <router-link to="/">
                  <img
                    src="@/assets/images/logo.svg"
                    alt="chatteree logo"
                    id="logo"
                /></router-link>
                <h1 class="h1 mt-5 mb-2">Check your mail</h1>
                <p class="p-regular-light">
                  Enter the confirmation code sent to <br />
                  <strong class="text-dark">kwesiokyere@gmail.com</strong> to
                  verify that it is you.
                </p>

                <div class="mt-5 mb-4">
                  <v-otp-input
                    ref="otpInput"
                    v-model:value="otpCode"
                    input-classes="otp-input"
                    separator=""
                    :num-inputs="6"
                    :should-auto-focus="true"
                    input-type="letter-numeric"
                    @on-change="handleOTPChange"
                    @on-complete="handleOTPComplete"
                  />
                </div>

                <div class="row align-items-center">
                  <div class="col-md-6">
                    <p
                      class="btn btn-link text-decoration-none btn-sm m-0"
                      @click="() => console.log('resend code')"
                    >
                      Resend code
                    </p>
                  </div>
                  <div class="col-md-6 d-flex justify-content-end">
                    <CButton
                      class="mt-3"
                      variant="primary"
                      @click="verifyUser()"
                      :disabled="otpCode.length !== 6 || isVerifyingOTP"
                      >Next</CButton
                    >
                  </div>
                </div>
                <div class="row mt-5 pt-3">
                  <div class="col-md-12">
                    <img
                      class="w-100"
                      src="@/assets/images/onboarding-2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CToast :message="message" variant="danger" :showToast="showToast" />
  </main>
</template>

<script>
import CButton from "../components/CButton.vue";
import VOtpInput from "vue3-otp-input";
import CToast from "../components/CToast.vue";

export default {
  name: "otp-verification-page",
  components: { CButton, VOtpInput, CToast },
  data() {
    return {
      isValidOTP: null,
      isVerifyingOTP: false,
      otpCode: "",
      message: "",
      showToast: false,
    };
  },
  watch: {
    isValidOTP(val) {
      if (!val) {
        this.message = "Incorrect confirmation code";
        this.showToast = true;
      }
    },
  },
  methods: {
    verifyUser() {
      if (this.isValidOTP) {
        console.log("verifying user");
        this.$router.replace("/username");
      } else {
        this.showToast = true;
      }
      setTimeout(() => {
        this.showToast = false;
      }, 300);
    },
    handleOTPChange(value) {
      if (value.length == 6) {
        this.isValidOTP = value == "123456";
      }
    },
    handleOTPComplete(value) {
      this.otpCode = value;
      this.isValidOTP = this.otpCode == "123456";

      setTimeout(() => {
        this.showToast = false;
      }, 300);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>