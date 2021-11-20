<template>
  <div
    class="
      w-5/12
      bg-white
      px-10
      py-2
      mb-5
      border-solid border-2 border-light-blue-500
      hover:bg-gray-100
    "
  >
    <div class="flex items-start -mx-8 px-6 py-5">
      <div class="flex w-4/5">
        <div class="w-24 flex-shrink-0">
          <img
            class="h-24 w-24"
            :src="require(`../assets/images/${product.img}`)"
            alt="product.description"
          />
        </div>
        <div class="flex flex-col justify-between ml-4 flex-grow">
          <span class="font-bold text-md">{{ product.title }}</span>
          <span class="text-gray-500 text-xs text-max-lines-2">
            {{ product.description }}
          </span>
          <a
            href="#"
            class="font-semibold hover:underline text-red-500 text-xs"
            @click.prevent="removeFromFavourite"
          >
            Remove from favourites
          </a>
        </div>
      </div>
      <span class="text-center w-1/5 font-semibold text-sm">
        ${{ product.price }}
      </span>
    </div>
  </div>
</template>

<script>
import { ACTION_TOGGLE_FAVOURITE } from "@/store/actions";

export default {
  name: "FavouriteItem",

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  methods: {
    removeFromFavourite() {
      this.$store.dispatch(ACTION_TOGGLE_FAVOURITE, this.product.id);
    },
  },
};
</script>
