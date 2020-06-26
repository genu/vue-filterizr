<template>
  <div class="filtr-item">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class FilterizrItem extends Vue {
  @Prop(String) readonly category!: string;

  mounted() {
    this.$el.setAttribute("data-category", this.category);
  }
}
</script>
