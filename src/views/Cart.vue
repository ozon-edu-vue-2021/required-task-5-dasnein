<template>
  <div class="container mx-auto my-10">
    <div class="flex shadow-md my-10">
      <div class="w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">{{ cart.length }} Items</h2>
        </div>

        <CartHeader />

        <CartItem
          v-for="item in cart"
          :key="`cart-id-${item.id}`"
          :item="item"
        />

        <router-link
          to="/"
          class="flex font-semibold text-indigo-600 text-sm mt-10"
        >
          <ArrowLeft />
          Continue Shopping
        </router-link>
      </div>

      <CartSummary />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import ArrowLeft from "../assets/icons/ArrowLeft.svg";
import CartHeader from "@/components/CartHeader.vue";
import CartItem from "@/components/CartItem.vue";
import CartSummary from "@/components/CartSummary.vue";

export default {
  name: "CartView",

  components: {
    ArrowLeft,
    CartHeader,
    CartItem,
    CartSummary,
  },

  computed: {
    ...mapState(["cart"]),
  },
};
</script>
