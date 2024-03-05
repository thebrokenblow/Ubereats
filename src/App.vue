<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header class="header" />
  <router-view style="min-height: 85px" class="content" />
  <Footer class="footer" />
</template>

<style scoped>
</style>
