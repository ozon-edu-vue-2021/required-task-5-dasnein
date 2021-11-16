import Vue from "vue";
import VueRouter from "vue-router";

import CatalogView from "../views/Catalog.vue";
import CartView from "../views/Cart.vue";
import FavouritesView from "../views/Favourites.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Catalog",
    component: CatalogView,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartView,
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: FavouritesView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
