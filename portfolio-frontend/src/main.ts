import { createApp } from "vue";
import App from "./App.vue";

const initApp = () => {
  const app = createApp(App);
  app.mount("#app");
};
initApp();
