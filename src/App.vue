<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Catalog</router-link> |
      <router-link to="/favourites">Favourites</router-link> |
      <router-link to="/cart">Cart</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
import { ACTION_GET_PRODUCTS } from "@/store/actions";

export default {
  created() {
    this.$store.dispatch(ACTION_GET_PRODUCTS);
  },
};
</script>
