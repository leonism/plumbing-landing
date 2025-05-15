import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createHead } from "@vueuse/head";

import "./assets/css/main.css"; // <--- Make sure this line is present

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(router);

app.mount("#app");
