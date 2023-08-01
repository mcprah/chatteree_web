<template>
  <div class="container-fluid">
    <div class="row vh-100">
      <div class="col-lg-3">
        <div class="container-fluid p-3 h-100" id="chatList">
          <div class="row" id="chatListHeader">
            <div
              class="col-md-12 d-flex align-items-center justify-content-between"
            >
              <div class="d-flex align-items-center" id="user">
                <div class="profile-pic rounded-pill"></div>
                <div class="username ms-3">Kojo Trip</div>
              </div>
              <div class="btn-new-chart">
                <CButton
                  class="p-0 btn-icon text-accent"
                  variant="primary"
                  id="btnNewChat"
                  @click="() => {}"
                >
                  <EditIcon variant="primary" />
                </CButton>
              </div>
            </div>
          </div>
          <div class="row my-4">
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
          <div class="row flex-grow-1 overflow-y-scrol">
            <div
              class="col-md-12 d-flex flex-column justify-content-center align-items-center"
            >
              <div
                class="d-flex flex-column justify-content-center align-items-center text-center mb-5"
                v-if="chatlist.length == 0"
              >
                <img src="@/assets/icons/icon/interfaces/chat.svg" alt="" />
                <p class="mt-3 px-4 text-light" >Your Chatteree conversations live here</p>
              </div>
              <div class="" v-else>
                <p v-for="(chat, idx) in chatlist" :key="idx">Chat list view</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="p-3" id="chatConversation">right</div>
      </div>
    </div>
  </div>
</template>

<script>
import CButton from "../components/CButton.vue";
import EditIcon from "../components/icon/EditIcon.vue";
import CTextInput from "../components/CTextInput.vue";

export default {
  name: "chat-page",
  components: { CButton, EditIcon, CTextInput },
  data() {
    return {
      searchQuery: "",
      chatlist: [],
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