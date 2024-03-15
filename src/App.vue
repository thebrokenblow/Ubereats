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

<template>
  <section>
    <navigation-bar />
    <router-view style="content" />
    <footer-panel />
  </section>
</template>

<style scoped>
.content {
  height: 1000px;
}
</style>
