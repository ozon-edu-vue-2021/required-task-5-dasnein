<template>
  <div class="group relative pb-16">
    <div
      class="
        w-full
        min-h-80
        bg-gray-200
        aspect-w-1 aspect-h-1
        rounded-md
        overflow-hidden
        lg:h-80 lg:aspect-none
        group-hover:opacity-90
      "
    >
      <img
        :src="require(`../assets/images/${product.img}`)"
        :alt="product.description"
        class="w-full h-full object-center object-cover lg:w-full lg:h-full"
      />
      <button class="absolute top-2 right-2" @click="toggleFavourites">
        <FavouriteIcon :class="favouriteIconClass" />
      </button>
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <a href="#">
            {{ product.title }}
          </a>
        </h3>
        <p class="mt-1 text-sm text-gray-500 text-max-lines-3">
          {{ product.description }}
        </p>
      </div>
      <p class="text-sm font-medium text-gray-900">${{ product.price }}</p>
    </div>

    <div class="w-full absolute bottom-0 left-0">
      <QuantityInput
        v-if="isProductInCart"
        v-model="quantity"
        class="flex justify-center"
        @change="addToCart"
      />
      <button
        v-else
        class="
          bg-white
          border border-gray-400
          font-semibold
          hover:bg-gray-100
          mt-6
          px-4
          py-2
          rounded
          shadow
          text-gray-800
          w-full
        "
        @click="addToCart"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import {
  ACTION_ADD_TO_CART,
  ACTION_REMOVE_FROM_CART,
  ACTION_TOGGLE_FAVOURITE,
} from "@/store/actions";

import FavouriteIcon from "@/assets/icons/Favourite.svg";
import QuantityInput from "@/components/QuantityInput.vue";

export default {
  name: "ProductCard",

  components: {
    FavouriteIcon,
    QuantityInput,
  },

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      quantity: 1,
    };
  },

  computed: {
    item() {
      return this.$store.state.cart.find((item) => item.id === this.product.id);
    },
    isProductInCart() {
      return !!this.item;
    },
    favouriteIconClass() {
      if (this.product.favourite) {
        return "icon-svg-fill-red";
      }

      return ["icon-svg-stroke-black", "icon-svg-fill-white"];
    },
  },

  methods: {
    addToCart() {
      const product = {
        id: this.product.id,
        quantity: this.quantity,
      };

      this.$store.dispatch(ACTION_ADD_TO_CART, product);
    },
    toggleFavourites() {
      this.$store.dispatch(ACTION_TOGGLE_FAVOURITE, this.product.id);
    },
  },

  created() {
    if (this.isProductInCart) {
      this.quantity = this.item.quantity;
    }

    if (this.quantity === 0) {
      this.$store.dispatch(ACTION_REMOVE_FROM_CART, this.product.id);
    }
  },
};
</script>
