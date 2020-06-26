<template>
  <div>
    <Filterizr
      @onFilteringStart="onFilteringStart"
      @onFilteringEnd="onFilteringEnd"
      @onShufflingStart="onShufflingStart"
      @onShufflingEnd="onShufflingEnd"
      @onSortingStart="onSortingStart"
      @onSortingEnd="onSortingEnd"
      :options="options"
    >
      <FilterizrItem category="1">
        <img src="https://via.placeholder.com/150" alt="sample" />
      </FilterizrItem>
      <FilterizrItem category="2, 1">
        <img src="https://via.placeholder.com/150" alt="sample" />
      </FilterizrItem>
      <FilterizrItem category="1, 3">
        <img src="https://via.placeholder.com/150" alt="sample" />
      </FilterizrItem>
    </Filterizr>

    <ul>
      <!-- For filtering controls add -->
      <li data-filter="all">All items</li>
      <li data-filter="1">Category 1</li>
      <li data-filter="2">Category 2</li>
      <li data-filter="3">Category 3</li>
      <!-- For a shuffle control add -->
      <li data-shuffle>Shuffle items</li>
      <!-- For sorting controls add -->
      <li data-sortAsc>Ascending</li>
      <li data-sortDesc>Descending</li>
    </ul>
    <!-- To choose the value by which you want to sort add -->
    <select data-sortOrder>
      <option value="index"> Position </option>
      <option value="sortData"> Custom Data </option>
    </select>
    <!-- To create a search control -->
    <input
      type="text"
      name="filtr-search"
      value=""
      placeholder="Your search"
      data-search=""
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator";

import Filterizr from "./components/Filterizr.vue";
import FilterizrItem from "./components/FilterizrItem.vue";

@Component({
  components: { Filterizr, FilterizrItem }
})
export default class App extends Vue {
  options: any = {
    // animationDuration: 1,
  };

  onFilteringStart() {
    console.log("filterStart");
  }

  onFilteringEnd() {
    console.log("filtering end");
  }

  onShufflingStart() {
    console.log("shuffle start");
  }

  onShufflingEnd() {
    console.log("shuffling end");
  }

  onSortingStart() {
    console.log("shuffjling start");
  }

  onSortingEnd() {
    console.log("shuffling end");
  }
}
</script>
