<template>
  <div class="container mx-auto my-10">
    <h1 class="text-5xl text-center">
      <b>Favourites</b> ({{ favouriteProductsList.length }})
    </h1>
    <div class="flex my-10 flex-wrap justify-around">
      <FavouriteItem
        v-for="product in favouriteProductsList"
        :key="`fav-item-${product.id}`"
        :product="product"
      />
      <div class="w-5/12"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { GETTER_FACOURITE_PRODUCTS } from "@/store/getters";

import FavouriteItem from "../components/FavouriteItem.vue";

export default {
  name: "FavouritesView",

  components: {
    FavouriteItem,
  },

  computed: {
    ...mapGetters({ favouriteProductsList: GETTER_FACOURITE_PRODUCTS }),
  },
};
</script>
