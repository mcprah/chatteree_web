<template>
  <div class="container-fluid">
    <div class="row vh-100">
      <div class="col-lg-3 ps-0">
        <ChatList />
      </div>
      <div class="col-lg-9">
        <ChatConversation />
      </div>
    </div>
  </div>
</template>

<script>
import ChatConversation from "../components/chat/ChatConversation.vue";
import ChatList from "../components/chat/ChatList.vue";

import { useUserStore } from "@/stores/useUserStore";

export default {
  name: "chat-page",
  components: { ChatList, ChatConversation },
  data() {
    return {
      searchQuery: "",
      chatlist: [],
      useUser: useUserStore(),
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>