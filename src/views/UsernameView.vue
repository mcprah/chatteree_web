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
                <h1 class="h1 mt-5 mb-2">A Chatteree ID cos you’re special.</h1>
                <p class="p-regular-light">
                  People will be able to find you with your unique ID
                </p>

                <div class="mt-5 mb-4"></div>

                <div class="row align-items-center">
                  <form
                    @submit.prevent="signInUser()"
                    class="d-inline-flex flex-column align-items-end"
                  >
                    <CTextInput
                      class="mt-3 w-100"
                      v-model="username"
                      label="Chatteree ID"
                      :hasError="!isValidUsername"
                      :errorMessage="validationErrorMessage"
                      :maxlength="charInputLimit"
                      ><template v-slot:prefix>
                        <p class="mb-1">@</p>
                      </template>
                      <template v-slot:suffix>
                        <p class="m-0">{{ remainingText }}</p>
                      </template>
                    </CTextInput>

                    <CButton
                      class="mt-3"
                      variant="primary"
                      @click="() => {}"
                      :disabled="false"
                      >Continue</CButton
                    >
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CToast
      :message="toastData.message"
      variant="danger"
      :showToast="toastData.showToast"
    />
  </main>
</template>
<script>
import { calculateRemainingChars } from "../utils/helpers.js";
import CButton from "../components/CButton.vue";
import CTextInput from "../components/CTextInput.vue";

export default {
  components: { CTextInput, CButton },
  name: "username",
  data() {
    return {
      isValidUsername: null,
      charInputLimit: 9,
      remainingText: "",
      username: "",
      toastData: {
        message: "",
        showToast: false,
      },
    };
  },
  computed: {
    validationErrorMessage() {
      if (this.username == null || this.username.isEmpty) {
        this.isValidUsername = null;
        return "Username is required.";
      }
      if (this.username.length < 3) {
        this.isValidUsername = null;
        return "Must be at least 3 characters long";
      }
      const usernameRegExp = /^[a-zA-Z0-9_]{3,9}$/;
      this.isValidUsername = usernameRegExp.test(this.username);
      return "";
    },
  },
  watch: {
    username(newVal) {
      this.remainingText = calculateRemainingChars(
        newVal.length,
        this.charInputLimit
      );
    },
  },
  mounted() {
    this.remainingText = this.charInputLimit.toString();
  },
  methods: {
    validateUsername(value) {
      if (value == null || value.isEmpty) {
        this.isValidUsername = null;
        return "Username is required.";
      }
      if (value.length < 3) {
        this.isValidUsername = null;
        return "Must be at least 3 characters long";
      }
      const usernameRegExp = /^[a-zA-Z0-9_]{3,9}$/;
      this.isValidUsername = usernameRegExp.hasMatch(value);
      return "";
    },
  },
};
</script>

<style>
</style>