export const MUTATION_SET_PRODUCTS = "setProducts";
export const MUTATION_UPDATE_CART = "updateCart";

export default {
  [MUTATION_SET_PRODUCTS](state, payload) {
    state.products = payload;
  },
  [MUTATION_UPDATE_CART](state, newCartState) {
    state.cart = newCartState;
  },
};
