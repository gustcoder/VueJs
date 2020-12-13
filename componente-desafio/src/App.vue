<template>
  <v-app>
    <l-menu/>
    <l-toolbar/>
    <v-content>
      <l-carousel/>
    </v-content>  
    <l-footer/>
  </v-app>
</template>

<script>
import Toolbar from '@/components/template/Toolbar.vue'
import Menu from '@/components/template/Menu.vue'
import Carousel from '@/components/widgets/Carousel.vue'
import Footer from '@/components/template/Footer.vue'
export default {
  components: {
    LMenu: Menu,
    LCarousel: Carousel,
    LFooter: Footer,
    LToolbar: Toolbar
  },
  data() {
    return {      
    }
  }
}
</script>
