import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        isFirstTimeUser: true,
        userData: {},
    }),
    actions: {
        toggleFirstTimeUserState() {
            this.isFirstTimeUser = false;
        },
        updateUserData(userData) {
            this.userData = userData;
        },
    },
});
