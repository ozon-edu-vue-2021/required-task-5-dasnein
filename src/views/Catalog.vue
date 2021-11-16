<template>
  <div class="container mx-auto my-10">
    <h1 class="text-5xl text-center font-bold">
      Route256 required-task-5 Store
    </h1>

    <div
      class="
        mt-6
        grid grid-cols-1
        gap-y-10 gap-x-6
        sm:grid-cols-2
        lg:grid-cols-4
        xl:gap-x-8
      "
    >
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "CatalogView",

  components: {
    ProductCard,
  },

  computed: {
    ...mapState(["products"]),
  },
};
</script>
