import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { setupRouter, router } from "./router";
const initApp = () => {
  const app = createApp(App);
  setupRouter(app);
  app.mount("#app");
};
initApp();
