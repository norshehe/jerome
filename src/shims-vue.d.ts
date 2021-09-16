/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "*.svg" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}

declare module "vue-google-login";
declare module "@headlessui/vue";
declare module "@heroicons/vue";
declare module "@heroicons/vue/solid";
declare module "@heroicons/vue/outline";
declare module "@fawmi/vue-google-maps";
declare module "googlemaps-vue3";
declare module "sortablejs";
declare module "@/components/pdf-paper/index";
declare module "html2pdf.js";
