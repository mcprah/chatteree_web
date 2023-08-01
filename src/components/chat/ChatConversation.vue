<template>
  <!-- <div class="h-100" v-if="useUser.isFirstTimeUser || useChat.chatList.length == 0"> -->
  <div class="h-100" v-if="true">
    <FirstTime />
  </div>
  <div class="" v-else>
    
  </div>
</template>

<script>
import { useUserStore } from "@/stores/useUserStore";
import { useChatStore } from "@/stores/useChatStore";

import FirstTime from "./FirstTime.vue";

export default {
  name: "chat-conversation-component",
  components: { FirstTime },
  data() {
    return {
      useUser: useUserStore(),
      useChat: useChatStore(),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>