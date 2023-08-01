<template>
  <main class="container">
    <div class="row align-items-center h-100">
      <div class="col-md-6">
        <img
          src="@/assets/images/onboarding-1.png"
          alt="onboarding image - cheering group illustration"
          class="w-100"
        />
      </div>
      <div class="col-md-5">
        <div class="d-flex flex-column">
          <router-link to="/">
            <img src="@/assets/images/logo.svg" alt="chatteree logo" id="logo"
          /></router-link>
          <h1 class="h1 mt-5 mb-2">Howdy chatter! Your peeps are waiting</h1>
          <p class="p-regular-light">
            Enter your email address to start chatting
          </p>

          <form
            @submit.prevent="signInUser()"
            class="d-inline-flex flex-column align-items-end"
          >
            <CTextInput
              class="mt-3 w-100"
              v-model="email"
              label="Email address"
              :hasError="!isValid"
              :errorMessage="
                email && !isValid ? 'Please enter valid email' : ''
              "
            />

            <CButton
              class="mt-3"
              variant="primary"
              @click="signInUser()"
              :disabled="!isValid || email == ''"
              >Next</CButton
            >
          </form>
          <hr class="my-5" />
          <CButton
            class="py-3 shadow"
            variant="light"
            @click="signInWithGoogle()"
          >
            <template v-slot:left-icon>
              <img
                src="@/assets/icons/google_icon.svg"
                height="24"
                width="24"
                alt=""
                class="me-3"
              />
            </template>
            Continue with Google
          </CButton>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CButton from "../components/CButton.vue";
import CTextInput from "../components/CTextInput.vue";

export default {
  name: "sign-in-page",
  components: { CTextInput, CButton },
  props: {},
  data() {
    return {
      email: "",
      isValid: null,
    };
  },
  watch: {
    email(oldEmail, newEmail) {
      if (oldEmail == "") {
        this.isValid = null;
      } else {
        this.validateEmail();
      }
    },
  },
  methods: {
    signInUser() {
      if (this.email) {
        this.validateEmail();
        if (this.isValid) {
          this.$router.push("/verify-pin");
        }
      }
    },
    signInWithGoogle() {
      console.log("signing in with google");
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.isValid = emailPattern.test(this.email);
    },
  },
};
</script>