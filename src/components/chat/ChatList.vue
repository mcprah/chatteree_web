<template>
  <div class="container-fluid p-3 h-100" id="chatList">
    <div class="row" id="chatListHeader">
      <div class="col-md-12 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center" id="user">
          <div class="profile-pic rounded-pill"></div>
          <div class="username ms-3">Kojo Trip</div>
        </div>
        <div class="btn-new-chart">
          <CButton
            class="btn p-0 btn-icon text-accent"
            variant="primary"
            id="btnNewChat"
            @click="() => {}"
          >
            <EditIcon variant="primary" />
          </CButton>
        </div>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-md-12">
        <CTextInput
          class="w-100"
          v-model="searchQuery"
          :placeholder="placeholder"
          :hasError="false"
          ><template v-slot:prefix>
            <img
              src="@/assets/icons/icon/interfaces/search.svg"
              alt=""
            /> </template
        ></CTextInput>
      </div>
    </div>
    <div class="row mb-4" v-if="!useUser.isFirstTimeUser">
      <div class="col-md-12">
        <FilmList />
      </div>
    </div>

    <div class="row flex-grow-1 overflow-y-scrol">
      <div
        class="col-md-12 d-flex flex-column justify-content-center align-items-center"
      >
        <div
          class="d-flex flex-column justify-content-center align-items-center text-center mb-5"
          v-if="chatlist.length == 0"
        >
          <img src="@/assets/icons/icon/interfaces/chat.svg" alt="" />
          <p class="mt-3 px-4 text-light">
            Your Chatteree conversations live here
          </p>
        </div>
        <div class="" v-else>
          <p v-for="(chat, idx) in chatlist" :key="idx">Chat list view</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/useUserStore";
import CButton from "../CButton.vue";
import EditIcon from "../icon/EditIcon.vue";
import CTextInput from "../CTextInput.vue";
import FilmList from "./FilmList.vue";

export default {
  name: "chat-list",
  components: { CButton, EditIcon, CTextInput, FilmList },
  data() {
    return {
      searchQuery: "",
      chatlist: [],
      useUser: useUserStore(),
    };
  },
  computed: {
    placeholder() {
      if (this.searchQuery == "") {
        return "Search for chatter or message";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#chatList {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  #chatListHeader {
    #user {
      cursor: pointer;
      .profile-pic {
        width: 48px;
        height: 48px;
        background: $color-dark;
      }
      .username {
        font-weight: 500;
      }
    }
  }
}
</style>