<template>
  <div class="container-fluid p-3 pt-4 h-100" id="chatConversation">
    <div class="row mt-5">
      <div class="col-md-12 d-flex flex-column">
        <h3 class="h5 mb-0">Welcome</h3>
        <h1 class="h1 mb-2">Kojo Trip!</h1>
      </div>
    </div>
    <div class="row flex-grow-1">
      <div
        class="col-md-12 d-flex flex-column justify-content-center align-items-center pb-5 h-100"
      >
        <img src="@/assets/images/first-time-welcome.png" width="326" alt="" />
        <p class="mt-3 px-2 text-light">We hear say your mouth die hmmm</p>

        <CButton class="" variant="primary" id="btnNewChat" @click="useUser.toggleFirstTimeUserState">
          <template v-slot:left-icon>
            <EditIcon variant="primary" class="me-2" />
          </template>
          Start chatting
        </CButton>
      </div>
    </div>
  </div>
</template>
  
  <script>
import CButton from "@/components/CButton.vue";
import EditIcon from "@/components/icon/EditIcon.vue";
import { useUserStore } from "@/stores/useUserStore";

export default {
  name: "first-time-conversation-component",
  components: { CButton, EditIcon },

  data() {
    return {
      useUser: useUserStore(),
    };
  },
};
</script>
  
<style lang="scss" scoped>
#chatConversation {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
}
</style>