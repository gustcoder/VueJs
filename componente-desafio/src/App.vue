<template>
  <v-app>
    <v-menu/>
    <v-toolbar/>
    <v-content>
      <v-carousel/>
    </v-content>  
    <v-footer/>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import Menu from './components/Menu.vue'
import Carousel from './components/Carousel.vue'
import Footer from './components/Footer'
export default {
  components: {
    'v-menu': Menu,
    'v-carousel': Carousel,
    'v-footer': Footer,
    'v-toolbar': Toolbar
  },
  data() {
    return {
    }
  }
}
</script>
