import Vue from "vue";
import store from "./store";
import router from "./router";

import "tailwindcss/dist/tailwind.css";
import "./styles/main.css";

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
