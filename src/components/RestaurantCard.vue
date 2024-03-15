<template>
  <div class="stores-card">
    <div class="stores-card-pic">
      <img
        class="transition-fix"
        src="../../public/img/1.jpg"
        :alt="restaurant.name"
      />
    </div>
    <div class="store-name">{{ restaurant.name }}</div>
    <div class="store-type">
      {{ "₽".repeat(restaurant.priceCategory) }}
      <span>• </span>
      <span v-for="category in restaurant.categories" :key="category">
        {{ category.name }}</span
      >
    </div>
    <div class="store-time">{{ restaurant.cookingTime }} мин</div>
  </div>
</template>

<script>
export default {
  props: {
    restaurant: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style scoped>
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

.stores-card-pic {
  width: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;
}

.stores-card-pic img {
  transition: 0.3s;
  width: 100%;
}

.stores-card-pic img:hover {
  transform: scale(1.03);
}

.transition-fix {
  transform: rotate(0.00000000001deg);
}

.store-name {
  margin-top: 0.9rem;
}

.store-name,
.store-time,
.store-type {
  margin-bottom: 0.35rem;
}

.store-type {
  color: var(--color-darkgray);
  font-size: 0.875rem;
}

.store-time {
  font-size: 0.8125rem;
}
</style>
