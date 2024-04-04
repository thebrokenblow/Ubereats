<template>
  <div class="search container">
    <input
      v-model="nameRestaurant"
      class="input search-input"
      type="search"
      name="search-input-main"
      id="search-input-main"
      placeholder="Поиск по ресторанам и кухням"
    />
  </div>
  <div v-if="restaurants" class="container container__restaurants">
    <h2 class="stores-header">Рестораны в Москве</h2>
    <div class="stores-cards">
      <restaurant-card
        v-for="restaurant in getEnterRestaurants"
        :key="restaurant.id"
        :restaurant="restaurant"
      />
    </div>
  </div>
</template>

<script>
import RestaurantCard from "../components/RestaurantCard.vue";
export default {
  components: {
    RestaurantCard,
  },
  data() {
    return {
      restaurants: [],
      nameRestaurant: "",
    };
  },

  methods: {
    async initData() {
      const response = await fetch(`https://localhost:7274/restaurants`);
      this.restaurants = await response.json();
    },
  },

  computed: {
    getEnterRestaurants() {
      if (this.restaurants) {
        return this.restaurants.filter((restaurant) =>
          restaurant.title
            .toLocaleLowerCase()
            .includes(this.nameRestaurant.toLocaleLowerCase())
        );
      }
    },
  },

  async created() {
    this.initData();
  },
};
</script>

<style scoped>
.container__restaurants {
  min-height: calc(100vh - 72px - 536px);
}

.stores-header {
  margin-top: 25px;
  margin-bottom: 35px;
}

.stores-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  margin-bottom: 50px;
}

@media screen and (max-width: 768px) {
  .stores-cards {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 576px) {
  .stores-cards {
    grid-template-columns: 1fr;
  }
}

.stores-card {
  text-decoration: none;
  color: var(--color-dark);
}

.stores-card:hover {
  background-color: var(--color-lightergray);
}

.search {
  padding-top: 20px;
  width: 100%;
}

.search-input {
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--color-placeholder);
}
</style>
