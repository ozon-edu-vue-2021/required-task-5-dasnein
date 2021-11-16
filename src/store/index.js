import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  mutations,
  state: {
    cart: [],
    products: [],
  },
  getters: {
    cartItemsQuantity(state) {
      return state.cart.reduce(
        (totalQuantity, item) => totalQuantity + item.quantity,
        0
      );
    },
    cartItemsCost(state) {
      return state.cart.reduce((totalPrice, item) => {
        const product = state.products.find(
          (product) => product.id === item.id
        );

        return totalPrice + product.price * item.quantity;
      }, 0);
    },
  },
});
