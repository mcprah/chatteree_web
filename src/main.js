import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/assets/scss/main.scss";
import * as bootstrap from "bootstrap";

const app = createApp(App);

app.use(createPinia());
app.use(bootstrap);
app.use(router);

app.mount("#app");
