import { App } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/layouts/Page/index.vue"),
    name: "Main Page",
    redirect: "/cart",
    children: [
      {
        path: "/cart",
        component: () => import("@/views/cart/index.vue"),
        name: "Cart Page",
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export const setupRouter = (app: App) => {
  app.use(router);
};
