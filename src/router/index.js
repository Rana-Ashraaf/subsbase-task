import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Stocks from "../views/Stocks.vue";
import Fx from "../views/Fx.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/stocks",
      name: "stocks",
      component: Stocks,
    },
    {
      path: "/fx",
      name: "fx",
      component: Fx,
    },
  ],
});

export default router;
