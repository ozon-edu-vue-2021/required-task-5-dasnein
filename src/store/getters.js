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
  favouriteProducts(state) {
    return state.products.filter((product) => product.favourite);
  },
};
