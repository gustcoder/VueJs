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
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">    
                <h1 v-on="on">{{ titulo }}</h1>
            </template>
            <span>Este é um tooltip</span>
        </v-tooltip>
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
            return this.$store.commit('showDialog', false)
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