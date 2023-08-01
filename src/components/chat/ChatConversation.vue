<template>
  <div v-if="useUser.isFirstTimeUser">
    <FirstTime />
  </div>
  <div class="" v-else></div>
</template>

<script>
import { useUserStore } from "@/stores/useUserStore";
import FirstTime from "./FirstTime.vue";

export default {
  name: "chat-conversation-component",
  components: { FirstTime },
  data() {
    return {
      useUser: useUserStore(),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>