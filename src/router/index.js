import Vue from "vue";
import VueRouter from "vue-router";

import CatalogView from "../views/Catalog.vue";
import CartView from "../views/Cart.vue";

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
];

const router = new VueRouter({
  routes,
});

export default router;
