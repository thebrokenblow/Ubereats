import { createRouter, createWebHistory } from "vue-router";
import RestaurantList from "../pages/RestaurantList.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: RestaurantList,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
