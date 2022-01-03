<template>
  <div>
      <ul>
          <li v-for="fruta in frutas" :key="fruta">
              {{ fruta }}
          </li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="addFrutas(fruta)" />
  </div>
</template>

<script>

export default {
    data() {
        return {
            fruta: '',
            frutas: ['laranja', 'banana']
        }
    },
    methods: {
        addFrutas(novaFruta) {
            this.frutas.push(novaFruta)
        }
    }
}
</script>

<style>

</style>