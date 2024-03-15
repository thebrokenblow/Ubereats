<template>
  <section>
    <navigation-bar />
    <router-view class="content" />
    <footer-panel />
  </section>
</template>

<script>
export default {
  components: {
    NavigationBar,
    FooterPanel,
  },
};
import NavigationBar from "@/components/NavigationBar.vue";
import FooterPanel from "@/components/FooterPanel.vue";
</script>

<style scoped>
.content {
  min-height: calc(100vh - 72px - 536px);
}
</style>
