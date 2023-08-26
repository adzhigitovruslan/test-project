<template>
  <!-- <Header /> -->
  <v-main />
  <!-- <Footer /> -->
</template>

<script setup lang="ts">
import VMain from "./components/V-Main.vue";
import { useStore } from "vuex";

const store = useStore();
store.dispatch("getProducts");
</script>

<style lang="scss">
@import "./assets/null.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
</style>
