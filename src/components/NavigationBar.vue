<script setup></script>

<template>
  <div style="margin-top: -20px" class="nav">
    <div class="nav-panel container">
      <div class="nav-logo">
        <router-link to="/">
          <img src="../../public/img/header/logo.svg" alt="UberEats"
        /></router-link>
      </div>

      <div class="nav-cabinet">
        <router-link
          to="/"
          class="nav-element button nav-button"
          style="cursor: pointer"
          type="button"
          >Войти</router-link
        >
        <router-link to="/" class="icon-link nav-element">
          <img src="../../public/img/header/basket.svg" alt="Корзина" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav {
  box-shadow: 0 0 16px var(--color-gray);
  position: sticky;
  top: 0px;
  background-color: var(--color-light);
  z-index: 100;
  max-width: 100%;
}

.nav-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
}

.nav-logo {
  padding: 13px 0;
}

.nav-cabinet {
  display: flex;
}

.nav-element {
  margin: auto 0.9rem;
}

.nav-button {
  font-size: 0.8rem;
  font-weight: 600;
}
</style>
