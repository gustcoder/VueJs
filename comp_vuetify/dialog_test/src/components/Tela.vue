<template>
    <div id="tela" slot="tela">
        <v-button class="button" @click="closeDialog">
            <v-icon
            medium
            color="green darken-2"
            >
                mdi-close
            </v-icon>
        </v-button>    
        <h1>{{ titulo }}</h1>
        <p>{{ texto }}</p>
    </div>
</template>

<script>
export default {
    props: {        
      dialog: {
          type: Boolean,
          default: false
      }
    },
    components: {
    },
    data () {
        return {
            titulo: 'Título',
            texto: 'Este é um texto da tela'
        }
    },
    methods: {        
        closeDialog () {
            return this.$store.commit('setShowDialog', false)
        }
    }
}
</script>

<style>
#tela {
    padding: 10px;
    width: 500px;
    height: 200px;
    background-color: white;
    border: 1px solid #000;
}
.button {
    cursor: pointer;
    float: right;
}
</style>