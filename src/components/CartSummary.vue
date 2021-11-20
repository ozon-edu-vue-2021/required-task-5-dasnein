<template>
  <div id="summary" class="w-1/4 px-8 py-10">
    <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
    <div class="flex justify-between mt-10 mb-5">
      <span class="font-semibold text-sm uppercase">Products:</span>
      <span class="font-semibold text-sm">{{ cart.length }}</span>
    </div>
    <div class="flex justify-between mt-10 mb-5">
      <span class="font-semibold text-sm uppercase">Items:</span>
      <span class="font-semibold text-sm">{{ cartItemsQuantity }}</span>
    </div>
    <div class="border-t mt-8">
      <div class="flex font-semibold justify-between py-6 text-sm uppercase">
        <span>Total cost</span>
        <span>${{ cartItemsCost }}</span>
      </div>
      <button
        class="
          bg-indigo-500
          disabled:opacity-50
          font-semibold
          hover:bg-indigo-600
          py-3
          text-sm text-white
          uppercase
          w-full
        "
        @click="onCheckout"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "CartSummary",

  computed: {
    ...mapState(["cart", "products"]),
    ...mapGetters(["cartItemsQuantity", "cartItemsCost"]),
  },

  methods: {
    onCheckout() {
      const cartItemsList = this.cart.map((item) => {
        const product = this.products.find((product) => product.id === item.id);

        return `${product.title} (${item.quantity}) – ${
          item.quantity * product.price
        }`;
      });

      alert(cartItemsList.join("\n"));
    },
  },
};
</script>
