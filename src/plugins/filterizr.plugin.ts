import Vue from "vue";
import Filterizr from "filterizr";
import { VueConstructor } from "vue/types/umd";

Vue.prototype.$filterizr;

let filterizrInstance: any = Filterizr;

export const FilterizrPlugin = {
  install(Vue: VueConstructor, defaultOptions: any) {
    Vue.prototype.$filterizr = {
      init(el: HTMLElement, options: any) {
        const combinedOptions = { ...defaultOptions, ...options };

        filterizrInstance = new Filterizr(el, combinedOptions);
      },

      getInstance(): Filterizr {
        return filterizrInstance;
      }
    };
  }
};
