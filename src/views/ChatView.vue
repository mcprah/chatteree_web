<template>
  <div class="container-fluid">
    <div class="row vh-100">
      <div class="col-lg-3">
        <ChatList />
      </div>
      <div class="col-lg-9">
        <div class="container-fluid p-3 pt-5 h-100" id="chatConversation">
          <div class="row mt-5">
            <div class="col-md-12 d-flex flex-column">
              <h3 class="h5 mb-0">Welcome</h3>
              <h1 class="h1 mb-2">Kojo Trip!</h1>
            </div>
          </div>
          <div class="row flex-grow-1">
            <div
              class="col-md-12 d-flex flex-column justify-content-center align-items-center pb-5"
            >
              <img
                src="@/assets/images/first-time-welcome.png"
                width="326"
                alt=""
              />
              <p class="mt-3 px-2 text-light">
                We hear say your mouth die hmmm
              </p>

              <CButton
                class=""
                variant="primary"
                id="btnNewChat"
                @click="() => {}"
              >
                <template v-slot:left-icon>
                  <EditIcon variant="primary" class="me-2" />
                </template>
                Start chatting
              </CButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatList from "../components/chat/ChatList.vue";
import CButton from "../components/CButton.vue";
import EditIcon from "../components/icon/EditIcon.vue";

export default {
  name: "chat-page",
  components: { ChatList, CButton, EditIcon },
  data() {
    return {
      searchQuery: "",
      chatlist: [],
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
#chatConversation {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
}
</style>