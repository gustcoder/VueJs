<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">  
      <button @click="showDialog" v-on="on">Exibir Dialog</button>
    </template>
    <span>Dialog</span>
  </v-tooltip>
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