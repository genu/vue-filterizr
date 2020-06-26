import Vue from "vue";
import Filterizr from "filterizr";

declare module "vue/types/vue" {
  interface Vue {
    $filterizr: {
      init(el: Element, options: any): void;
      getInstance(): Filterizr;
    };
  }
}
