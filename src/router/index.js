import { createRouter, createWebHistory } from "vue-router";
import SignView from "../views/SignView.vue";
import ChatConversation from "../components/chat/ChatConversation.vue";

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
        {
            path: "/chat",
            name: "chat",
            component: () => import("../views/ChatView.vue"),
            children: [
                {
                    path: ":chattereeID",
                    name: "chat-convo",
                    component: ChatConversation,
                },
            ],
        },
    ],
});

export default router;
