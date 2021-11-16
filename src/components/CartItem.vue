<template>
  <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
    <div class="flex w-2/5">
      <div class="w-20">
        <img
          class="h-12"
          :src="require(`@/assets/images/${product.img}`)"
          :alt="product.description"
        />
      </div>
      <div class="flex flex-col justify-between ml-4 flex-grow">
        <span class="font-bold text-sm">{{ product.title }}</span>
        <a
          href="#"
          class="font-semibold hover:text-red-500 text-gray-500 text-xs"
          @click.prevent="removeFromCart"
          >Remove</a
        >
      </div>
    </div>

    <QuantityInput v-model="quantity" class="flex justify-center w-1/5" />

    <span class="text-center w-1/5 font-semibold text-sm">
      ${{ product.price }}
    </span>
    <span class="text-center w-1/5 font-semibold text-sm">
      ${{ totalPrice }}
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { ACTION_ADD_TO_CART, ACTION_REMOVE_FROM_CART } from "@/store/actions";

import QuantityInput from "./QuantityInput.vue";

export default {
  name: "CartItem",

  components: {
    QuantityInput,
  },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapState(["cart", "products"]),
    product() {
      return this.products.find((product) => product.id === this.item.id);
    },
    totalPrice() {
      return this.product.price * this.item.quantity;
    },
    quantity: {
      get() {
        return this.item.quantity;
      },
      set(value) {
        this.$store.dispatch(ACTION_ADD_TO_CART, {
          id: this.item.id,
          quantity: value,
        });
      },
    },
  },

  methods: {
    removeFromCart() {
      this.$store.dispatch(ACTION_REMOVE_FROM_CART, this.item.id);
    },
  },
};
</script>
