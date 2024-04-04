import { createRouter, createWebHistory } from "vue-router";
import RestaurantList from "../pages/RestaurantList.vue";
import NotFound from "../pages/NotFound.vue";
import MenuList from "../pages/MenuList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: RestaurantList,
  },
  {
    path: "/restaurants/",
    name: "restaurants",
    component: RestaurantList,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/restaurants/:id",
    name: "menu",
    component: MenuList,
    async beforeEnter(to, from) {
      const response = await fetch(`https://localhost:7274/restaurants/`);
      const restaurants = await response.json();
      const exists = restaurants.find(
        (restaurant) => restaurant.id === parseInt(to.params.id)
      );
      if (!exists) {
        return {
          name: "NotFound",
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
