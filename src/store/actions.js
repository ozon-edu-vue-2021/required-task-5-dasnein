import { MUTATION_SET_PRODUCTS, MUTATION_UPDATE_CART } from "./mutations";

export const ACTION_GET_PRODUCTS = "getProducts";
export const ACTION_ADD_TO_CART = "addToCart";
export const ACTION_REMOVE_FROM_CART = "removeFromCart";
export const ACTION_TOGGLE_FAVOURITE = "toggleFavourite";

export default {
  // async [ACTION_GET_PRODUCTS]({ commit }) {
  async [ACTION_GET_PRODUCTS]({ commit, dispatch }) {
    const response = await fetch(
      "https://random-data-api.com/api/food/random_food?size=30"
    );
    const data = await response.json();
    const preparedData = data.map(({ description, dish, id }, index) => ({
      description,
      // TODO: return false as default
      favourite: Boolean(Math.round(Math.random())),
      // favourite: false,
      id,
      img: `${index % 10}.webp`,
      price: Math.ceil(Math.random() * 100),
      title: dish,
    }));

    commit(MUTATION_SET_PRODUCTS, preparedData);

    // TODO: delete
    preparedData.slice(0, 5).forEach((item) => {
      console.log(item);
      dispatch(ACTION_ADD_TO_CART, {
        id: item.id,
        quantity: Math.ceil(Math.random() * 9),
      });
    });
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
  [ACTION_REMOVE_FROM_CART]({ commit, state }, productId) {
    const cart = [...state.cart].filter((item) => item.id !== productId);

    commit(MUTATION_UPDATE_CART, cart);
  },
  [ACTION_TOGGLE_FAVOURITE]({ commit, state }, productId) {
    const products = [...state.products];
    const product = products.find((item) => item.id === productId);

    if (product) {
      product.favourite = !product.favourite;
    }

    commit(MUTATION_SET_PRODUCTS, products);
  },
};
