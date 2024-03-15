import { createRouter, createWebHistory } from "vue-router";
import RestaurantList from "../pages/RestaurantList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: RestaurantList,
    },
  ],
});

export default router;
