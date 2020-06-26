<template>
  <div>
    <div ref="items">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref, Prop } from "vue-property-decorator";
import { RawOptions } from "filterizr/dist/types/interfaces";

@Component({
  components: {}
})
export default class Filterizr extends Vue {
  @Ref("items") readonly items!: HTMLElement;
  @Prop(Object) readonly options!: RawOptions;

  callbacks!: RawOptions;

  mounted() {
    this.callbacks = {
      callbacks: {
        onFilteringStart: () => {
          this.$emit("onFilteringStart");
        },
        onFilteringEnd: () => {
          this.$emit("onFilteringEnd");
        },
        onShufflingStart: () => {
          this.$emit("onShufflingStart");
        },
        onShufflingEnd: () => {
          this.$emit("onShufflingEnd");
        },
        onSortingStart: () => {
          this.$emit("onSortingStart");
        },
        onSortingEnd: () => {
          this.$emit("onSortingEnd");
        }
      }
    };

    const combinedOptions: RawOptions = {
      ...this.callbacks,
      ...this.options
    };
    this.$filterizr.init(this.$el, combinedOptions);
  }
}
</script>
