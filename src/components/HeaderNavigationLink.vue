<template>
  <router-link
    v-bind="$attrs"
    exact-active-class="bg-gray-900 text-white"
    class="
      text-gray-300
      hover:bg-gray-700 hover:text-white
      px-3
      py-2
      rounded-md
      text-sm
      font-medium
    "
    ><slot></slot
  ></router-link>
</template>

<script>
export default {
  name: "HeaderNavigationLink",
};
</script>
