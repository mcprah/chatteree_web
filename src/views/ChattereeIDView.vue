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
                    @submit.prevent="submit()"
                    class="d-inline-flex flex-column align-items-end"
                  >
                    <CTextInput
                      class="mt-3 w-100"
                      v-model="username"
                      label="Chatteree ID"
                      :hasError="!isValidUsername"
                      :errorMessage="errorMessage"
                      @keyup="validationErrorMessage()"
                      :maxlength="charInputLimit"
                      ><template v-slot:prefix>
                        <p class="mb-1">@</p>
                      </template>
                      <template v-slot:suffix>
                        <CircleLoader v-if="loading" />
                        <p
                          class="m-0"
                          v-else-if="!loading && isValidUsername == null"
                        >
                          {{ remainingText }}
                        </p>
                        <div v-else>
                          <img
                            src="@/assets/icons/icon/interfaces/checkmark-circle.svg"
                            class=""
                            alt=""
                            v-if="isValidUsername"
                          />
                          <img
                            src="@/assets/icons/icon/interfaces/close-circle.svg"
                            class=""
                            alt=""
                            v-else
                          />
                        </div>
                      </template>
                    </CTextInput>

                    <CButton
                      class="mt-3"
                      variant="primary"
                      @click="submit()"
                      type="submit"
                      :disabled="username.length <= 3 || loading"
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
import CircleLoader from "../components/CircleLoader.vue";

export default {
  components: { CTextInput, CButton, CircleLoader },
  name: "username",
  data() {
    return {
      isValidUsername: null,
      loading: false,
      charInputLimit: 9,
      remainingText: "",
      username: "",
      errorMessage: "",
      toastData: {
        message: "",
        showToast: false,
      },
    };
  },
  computed: {},
  watch: {
    username(newVal) {
      this.remainingText = calculateRemainingChars(
        newVal.length,
        this.charInputLimit
      );
      this.validationErrorMessage;
    },
  },
  mounted() {
    this.remainingText = this.charInputLimit.toString();
  },
  methods: {
    submit() {
      this.$router.push("/add-name-dp");
    },
    validationErrorMessage() {
      this.loading = true;
      if (this.username == null || this.username.isEmpty) {
        this.isValidUsername = null;
        this.errorMessage = "Username is required.";
        this.loading = false;
        return;
      }

      if (this.username.length < 3) {
        this.errorMessage = "Must be at least 3 characters long";
        this.isValidUsername = null;
        this.loading = false;
        return;
      }

      const usernameRegExp = /^[a-zA-Z0-9_]{3,9}$/;
      this.isValidUsername = usernameRegExp.test(this.username);
      if (!this.isValidUsername) {
        this.loading = false;
        this.errorMessage = "Username not invalid";
        return;
      }

      setTimeout(() => {
        this.loading = false;
      }, 300);
    },
  },
};
</script>

<style>
</style>