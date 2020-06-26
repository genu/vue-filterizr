# vue-filterizr
This is a Vue wrapper for [Filterizr](https://yiotis.net/filterizr/#/).

## Installation

```
yarn add vue-filterizr
```

## Usage
```
import VurFilterizr from 'vue-filterizr'

Vue.use(VurFilterizr)
```

```
<template>
<Filterizr :options="options" @onFilteringStart="onFilteringStart"> 
   <FilterizrItem category="1">
      <img class="rounded-lg" src="https://via.placeholder.com/400x252" />
   </FilterizrItem>
   <FilterizrItem category="1">
      <img class="rounded-lg" src="https://via.placeholder.com/400x252" />
   </FilterizrItem>
</Filterizr>
</template>

<script>
export default {
   data() {
      options: {
         gutterPixels: 30
      }
   },
   methods: {
     onFilteringStart() {
       console.log('filtering started event');
     }
   }
}
</script>
```


### Plugin usage
The filterizr api is exposed through `$filterizr.getInstance()`

```
methods: {
    selectCategory(category) {
      this.$filterizr.getInstance().filter(category)
    }
  }
```

### Configuration
All configuration options can be passed in through the plugin options, or through component props

#### Plugin configuraiton
```
Vue.use(VurFilterizr, { gutterPixels: 30 })
```

#### Component Props
```
<template>
<Filterizr :options="options"> 
   <FilterizrItem category="1">
      <img class="rounded-lg" src="https://via.placeholder.com/400x252" />
   </FilterizrItem>
</Filterizr>
</template>

<script>
export default {
   data() {
      options: {
         gutterPixels: 30
      }
   }
}
</script>
```

#### Callbacks
Callbacks are emitted directly from the component. They should not be passed in with the options
```
<template>
<Filterizr @onFilteringStart="onFilteringStart"> 
   <FilterizrItem category="1">
      <img class="rounded-lg" src="https://via.placeholder.com/400x252" />
   </FilterizrItem>
</Filterizr>
</template>

<script>
export default {
   methods: {
     onFilteringStart() {
       console.log('filtering started event');
     }
   }
}
</script>
```

See [Filterizr API Reference](https://yiotis.net/filterizr/#/documentation/vanilla/options).
