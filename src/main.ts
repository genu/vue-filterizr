import Vue from "vue";
import App from "./App.vue";
import { FilterizrPlugin } from "./plugins/filterizr.plugin";

Vue.config.productionTip = false;

Vue.use(FilterizrPlugin);

new Vue({
  render: h => h(App)
}).$mount("#app");
