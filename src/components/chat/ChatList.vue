<template>
  <div class="container-fluid py-3 pb-0 h-100" id="chatList">
    <!-- List Header -->
    <div class="row" id="chatListHeader">
      <div class="col-md-12 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center" id="user">
          <img class="profile-pic rounded-pill" />
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
    <!-- List Search -->
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
    <!-- Film List -->
    <div class="row mb-4" v-if="!useUser.isFirstTimeUser">
      <div class="col-md-12">
        <FilmList />
      </div>
    </div>
    <!-- Chat List -->
    <div class="row flex-grow-1 overflow-y-scroll">
      <div class="col-md-12 d-flex flex-column ps-0">
        <div
          class="d-flex flex-column justify-content-center align-items-center text-center mb-5 h-100"
          v-if="useChat.chatList.length == 0 || useUser.isFirstTimeUser"
        >
          <img src="@/assets/icons/icon/interfaces/chat.svg" alt="" />
          <p class="mt-3 px-4 text-light">
            Your Chatteree conversations live here
          </p>
        </div>
        <div v-else>
          <div v-for="(chat, idx) in useChat.chatList" :key="idx">
            <ChatListItem :chat="chat" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/useUserStore";
import { useChatStore } from "@/stores/useChatStore";

import CButton from "@/components/CButton.vue";
import EditIcon from "@/components/icon/EditIcon.vue";
import CTextInput from "@/components/CTextInput.vue";
import FilmList from "@/components/film/FilmList.vue";
import ChatListItem from "./ChatListItem.vue";

export default {
  name: "chat-list",
  components: { CButton, EditIcon, CTextInput, FilmList, ChatListItem },
  data() {
    return {
      searchQuery: "",
      useChat: useChatStore(),
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
        object-fit: cover;
      }
      .username {
        font-weight: 500;
      }
    }
  }
}
</style>