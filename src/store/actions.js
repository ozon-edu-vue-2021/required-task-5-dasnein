import { MUTATION_SET_PRODUCTS, MUTATION_UPDATE_CART } from "./mutations";

export const ACTION_GET_PRODUCTS = "getProducts";
export const ACTION_ADD_TO_CART = "addToCart";

export default {
  async [ACTION_GET_PRODUCTS]({ commit }) {
    const response = await fetch(
      "https://random-data-api.com/api/food/random_food?size=30"
    );
    const data = await response.json();
    const preparedData = data.map(({ dish, id, description }, index) => ({
      id,
      description,
      title: dish,
      price: Math.ceil(Math.random() * 100),
      img: `${index % 10}.webp`,
    }));

    commit(MUTATION_SET_PRODUCTS, preparedData);
  },
  [ACTION_ADD_TO_CART]({ commit, state }, { id, quantity = 1 }) {
    const cart = [...state.cart];
    const product = cart.find((item) => item.id === id);

    if (product) {
      product.quantity = quantity;
    } else {
      cart.push({ id, quantity });
    }

    commit(MUTATION_UPDATE_CART, cart);
  },
};
