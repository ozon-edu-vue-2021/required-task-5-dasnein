<template>
  <nav class="bg-gray-800 sticky top-0 z-10">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <HeaderNavigationLink to="/">Catalog</HeaderNavigationLink>
              <HeaderNavigationLink to="/favourites">
                Favourites
              </HeaderNavigationLink>
            </div>
          </div>
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            w-12
            h-12
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
          "
        >
          <router-link
            to="/cart"
            class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white"
          >
            <ShoppingBagIcon />
            <div
              :class="cart.length > 0 ? 'scale-100' : 'scale-0'"
              class="
                absolute
                bottom-2
                right-2
                rounded-full
                h-5
                w-5
                flex
                items-center
                justify-center
                bg-red-600
                text-xs text-white
                transition
                duration-500
                ease-in-out
                transform
              "
            >
              {{ cart.length }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

import HeaderNavigationLink from "./HeaderNavigationLink.vue";
import ShoppingBagIcon from "../assets/icons/ShoppingBag.svg";

export default {
  name: "Header",

  components: {
    HeaderNavigationLink,
    ShoppingBagIcon,
  },

  computed: {
    ...mapState(["cart"]),
  },
};
</script>
