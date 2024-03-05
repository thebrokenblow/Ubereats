import { createRouter, createWebHistory } from "vue-router";
import RestaurantList from "../pages/RestaurantList.vue";
import Restaurant from "../pages/RestaurantItem.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: RestaurantList,
    },
    {
      path: "/restaurant/:id",
      name: "restaurant",
      component: Restaurant,
    },
  ],
});

export default router;
