export const GETTER_FACOURITE_PRODUCTS = "favouriteProducts";

export default {
  cartItemsQuantity(state) {
    return state.cart.reduce(
      (totalQuantity, item) => totalQuantity + item.quantity,
      0
    );
  },
  cartItemsCost(state) {
    return state.cart.reduce((totalPrice, item) => {
      const product = state.products.find((product) => product.id === item.id);

      return totalPrice + product.price * item.quantity;
    }, 0);
  },
  [GETTER_FACOURITE_PRODUCTS](state) {
    return state.products.filter((product) => product.favourite);
  },
};
