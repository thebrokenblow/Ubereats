<script setup></script>

<template>
  <div class="search container">
    <input
      class="input search-input"
      type="search"
      name="search-input-main"
      id="search-input-main"
      placeholder="Поиск по ресторанам и кухням"
    />
  </div>
  <div class="container container__restaurants">
    <h2 class="stores-header">Рестораны в Москве</h2>
    <div class="stores-cards">
      <restaurant-card
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :restaurant="restaurant"
      />
    </div>
  </div>
</template>

<style scoped>
.container__restaurants {
  min-height: calc(100vh - 72px - 536px);
}

.stores-header {
  margin-top: 15px;
  margin-bottom: 15px;
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
</style>

<script>
import sourseData from "../assets/data.json";
import RestaurantCard from "../components/RestaurantCard.vue";
export default {
  components: {
    RestaurantCard,
  },
  data() {
    return {
      restaurants: sourseData.restaurants,
    };
  },
};
</script>
