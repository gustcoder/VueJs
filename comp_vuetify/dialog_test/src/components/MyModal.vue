<template>  
  <button @click="showDialog">Exibir Dialog</button>
</template>

<script>
export default {
  props: {
      dialog: {
          type: Boolean,
          default: false
      }
  },
  methods: {
    showDialog () {      
      this.$store.commit('showDialog', true)
      // this.$store.state.showDialog = true
    }
  }
}
</script>

<style>

</style>