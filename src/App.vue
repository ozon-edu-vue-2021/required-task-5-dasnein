<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { ACTION_GET_PRODUCTS } from "@/store/actions";

import Header from "./components/Header.vue";

export default {
  name: "App",

  components: {
    Header,
  },

  created() {
    this.$store.dispatch(ACTION_GET_PRODUCTS);
  },
};
</script>
