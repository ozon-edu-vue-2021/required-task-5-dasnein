<template>
  <div>
    <button @click="decreaseQuantity">
      <Minus />
    </button>

    <input
      v-model="val"
      class="mx-2 border text-center w-8 appearance-none"
      type="number"
    />

    <button @click="increaseQuantity">
      <Plus />
    </button>
  </div>
</template>

<script>
import Minus from "@/assets/icons/Minus.svg";
import Plus from "@/assets/icons/Plus.svg";

export default {
  name: "QuantityInput",

  components: {
    Minus,
    Plus,
  },

  props: {
    value: {
      type: Number,
      required: false,
    },
  },

  computed: {
    val: {
      get() {
        return this.value;
      },
      set(value) {
        let newValue = value;

        if (typeof value === "string") {
          newValue = Number(value.replaceAll(/[e-]/gi, ""));
        }

        if (newValue < 0) {
          return 0;
        }

        this.$emit("input", newValue);
        this.$emit("change");
      },
    },
  },

  methods: {
    decreaseQuantity() {
      this.val = this.val - 1;
    },
    increaseQuantity() {
      this.val = this.val + 1;
    },
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
