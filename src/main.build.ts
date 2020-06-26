import Vue from "vue";
import Filterizr from "./components/Filterizr.vue";
import FilterizrItem from "./components/FilterizrItem.vue";
import { FilterizrPlugin } from "./plugins/filterizr.plugin";

Vue.config.productionTip = false;

Vue.component("Filterizr", Filterizr);
Vue.component("FilterizrItem", FilterizrItem);

export default FilterizrPlugin;
