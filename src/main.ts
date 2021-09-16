import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import "@/assets/css/index.css";
import ElementPlus from "element-plus";
import "@/assets/css/element-variables.scss";

import VueHtmlToPaper from "@/components/pdf-paper/index";

const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=no", "scrollbars=yes"],
  styles: ["https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"],
  timeout: 1000,
  autoClose: false,
  windowTitle: "Whitestone",
};

createApp(App)
  .use(VueHtmlToPaper, options)
  .use(ElementPlus)
  .use(router)

  .mount("#app");
