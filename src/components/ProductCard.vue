<template>
  <div class="group relative">
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
        src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        alt="Front of men&#039;s Basic Tee in black."
        class="w-full h-full object-center object-cover lg:w-full lg:h-full"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <a href="#">
            <!-- <span aria-hidden="true" class="absolute inset-0"></span> -->
            Basic Tee
          </a>
        </h3>
        <p class="mt-1 text-sm text-gray-500">Black</p>
      </div>
      <p class="text-sm font-medium text-gray-900">$35</p>
    </div>
    <button
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
    >
      Add to cart
    </button>
    <div class="inline-block relative w-full">
      <select
        class="
          block
          appearance-none
          w-full
          bg-white
          border border-gray-400
          hover:border-gray-500
          px-4
          py-2
          pr-8
          rounded
          shadow
          leading-tight
          focus:outline-none focus:shadow-outline
        "
      >
        <option>Really long option that will likely overlap the chevron</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <div
        class="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          flex
          items-center
          px-2
          text-gray-700
        "
      >
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
};
</script>
