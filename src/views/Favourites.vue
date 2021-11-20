<template>
  <div class="container mx-auto my-10">
    <h1 class="text-5xl text-center">
      <b>Favourites</b> ({{ favouriteProducts.length }})
    </h1>
    <div class="flex my-10 flex-wrap justify-around">
      <FavouriteItem
        v-for="product in favouriteProducts"
        :key="`fav-item-${product.id}`"
        :product="product"
      />
      <div class="w-5/12"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import FavouriteItem from "@/components/FavouriteItem.vue";

export default {
  name: "FavouritesView",

  components: {
    FavouriteItem,
  },

  computed: {
    ...mapGetters(["favouriteProducts"]),
  },
};
</script>
