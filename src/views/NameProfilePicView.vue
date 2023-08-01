<template>
  <main class="container">
    <div class="row align-items-center h-100">
      <div class="col-md-12 h-100 p-3 p-md-5">
        <div class="d-flex flex-column position-relative mx-auto">
          <CButton
            class="p-0 shadow-sm btn-icon position-absolute top-0 start-0"
            variant="light"
            id="btnBack"
            @click="$router.back"
          >
            <img
              src="@/assets/icons/icon/arrow/arrow-left.svg"
              alt="back button"
              id="back"
            />
          </CButton>
          <div class="container mt-2">
            <div class="row justify-content-center">
              <div
                class="col-md-5 px-3 d-flex flex-column align-items-center text-center"
              >
                <router-link to="/">
                  <img
                    src="@/assets/images/logo.svg"
                    alt="chatteree logo"
                    id="logo"
                /></router-link>
                <h1 class="h1 mt-5 mb-2">Help them identify you</h1>

                <div class="mt-5 mb-4"></div>

                <div class="row align-items-center text-start w-100">
                  <form
                    @submit.prevent="goToChatList()"
                    class="d-inline-flex flex-column align-items-center"
                  >
                    <CProfilePictureUpload />
                    <CTextInput
                      class="mt-3 w-100"
                      v-model="name"
                      label="Your name"
                      :hasError="!isValidName"
                      :errorMessage="errorMessage"
                      @keyup="validationErrorMessage()"
                      :maxlength="charInputLimit"
                    >
                      <template v-slot:suffix>
                        <CircleLoader v-if="isNameLoading" />
                        <p
                          class="m-0"
                          v-else-if="!isNameLoading && isValidName == null"
                        >
                          {{ remainingText }}
                        </p>
                        <div v-else>
                          <img
                            src="@/assets/icons/icon/interfaces/checkmark-circle.svg"
                            class=""
                            alt=""
                            v-if="isValidName"
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
                      @click="goToChatList()"
                      :disabled="name.length <= 3 || isNameLoading"
                      >Let’s geauxxxx!</CButton
                    >
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { calculateRemainingChars } from "../composables/helpers";
import { useUserStore } from "@/stores/useUserStore";

import CButton from "../components/CButton.vue";
import CTextInput from "../components/CTextInput.vue";
import CircleLoader from "../components/CircleLoader.vue";
import CProfilePictureUpload from "../components/CProfilePictureUpload.vue";

export default {
  components: { CTextInput, CButton, CircleLoader, CProfilePictureUpload },
  name: "name-dp",
  data() {
    return {
      isValidName: null,
      isNameLoading: false,
      charInputLimit: 18,
      remainingText: "",
      name: "",
      errorMessage: "",
      toastData: {
        message: "",
        showToast: false,
      },
      useUser: useUserStore(),
    };
  },
  computed: {},
  watch: {
    name(newVal) {
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
    goToChatList() {
      this.useUser.updateUserData({
        ...this.useUser.userData,
        name: this.name,
        profileImageUrl: "https://i.pravatar.cc/150?u=a042581f4e22432314d",
        onlineStatus: true,
      });
      this.$router.replace("/chat");
    },
    validationErrorMessage() {
      this.isNameLoading = true;
      if (this.name == null || this.name.isEmpty) {
        this.isValidName = null;
        this.errorMessage = "Name is required";
        this.isNameLoading = false;
        return;
      }

      if (this.name.length < 3) {
        this.errorMessage = "Must be at least 3 characters long";
        this.isValidName = null;
        this.isNameLoading = false;
        return;
      }

      const usernameRegExp = /^[a-zA-Z\s]{3,18}$/;
      this.isValidName = usernameRegExp.test(this.name);
      if (!this.isValidName) {
        this.isNameLoading = false;
        this.errorMessage = "Invalid name";
        return;
      }

      setTimeout(() => {
        this.isNameLoading = false;
      }, 300);
    },
  },
};
</script>

<style>
</style>