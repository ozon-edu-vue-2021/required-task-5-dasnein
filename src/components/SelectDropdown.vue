<template>
  <div class="inline-block relative w-full">
    <select
      v-model="val"
      class="
        appearance-none
        bg-white
        block
        border border-gray-400
        cursor-pointer
        focus:outline-none focus:shadow-outline
        hover:border-gray-500
        leading-tight
        pr-8
        px-4
        py-2
        rounded
        shadow
        w-full
        text-center
      "
    >
      <option v-for="i in 10" :key="`option-${i}`" :value="i">{{ i }}</option>
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
      <ArrowDown />
    </div>
  </div>
</template>

<script>
import ArrowDown from "@/assets/icons/ArrowDown.svg";

export default {
  name: "SelectDropdown",

  components: {
    ArrowDown,
  },

  props: {
    value: Number,
  },

  computed: {
    val: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
        this.$emit("change");
      },
    },
  },
};
</script>
