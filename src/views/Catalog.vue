<template>
  <div class="md:container md:mx-auto">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h1
        class="text-3xl font-extrabold tracking-tight text-gray-900 text-center"
      >
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
        <product-card />
        <product-card />
        <product-card />
        <product-card />
        <product-card />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "App",
  components: {
    ProductCard,
  },
};
</script>
