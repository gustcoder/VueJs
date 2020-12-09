<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Componente />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Vuetify from 'vuetify'
import HelloWorld from './components/HelloWorld.vue'
import Componente from './components/Componente.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Componente
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
