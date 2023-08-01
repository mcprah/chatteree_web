import { createRouter, createWebHistory } from "vue-router";
import SignView from "../views/SignView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: SignView,
        },
        {
            path: "/verify-pin",
            name: "verify",
            component: () => import("../views/VerificationView.vue"),
        },
        {
            path: "/chatteree-id",
            name: "chatteree-id",
            component: () => import("../views/ChattereeIDView.vue"),
        },
        {
            path: "/add-name-dp",
            name: "add-name-dp",
            component: () => import("../views/NameProfilePicView.vue"),
        },
    ],
});

export default router;
