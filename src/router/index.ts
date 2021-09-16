import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",

    name: "Home",
    meta: {
      requiresAuth: true,
      appNavigation: "Home",
    },
    component: () =>
      import(/* webpackChunkName: "admin" */ "@/views/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
