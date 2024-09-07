<template>
  <div>
    <header-app />
    <div></div>
    <header2-app />

    <main-app />
    <product-app />
    <aboutus-app />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Header2 from './components/Header2.vue'
import Main from './components/Main.vue'
import Product from './views/Products.vue'
import aboutus from './views/aboutus.vue'
export default {
  name: 'App',
  components: {
    'header-app': Header,
    'header2-app': Header2,
    'main-app': Main,
    'product-app': Product,
    'aboutus-app': aboutus,
  }
}
</script> 