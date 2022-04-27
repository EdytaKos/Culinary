import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import router from "./router";
import "./router/axios";

Vue.config.productionTip = false;

new Vue({
  router,
  el: "#app",
  components: { App },
  render: (h) => h(App)
});
