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
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <a href="#">
            {{ product.title }}
          </a>
        </h3>
        <p class="mt-1 text-sm text-gray-500 product__description">
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
import { ACTION_ADD_TO_CART, ACTION_REMOVE_FROM_CART } from "@/store/actions";

import QuantityInput from "@/components/QuantityInput.vue";

export default {
  name: "ProductCard",

  components: {
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
  },

  methods: {
    addToCart() {
      const product = {
        id: this.product.id,
        quantity: this.quantity,
      };

      this.$store.dispatch(ACTION_ADD_TO_CART, product);
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

<style scoped>
.product__description {
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
}
</style>
