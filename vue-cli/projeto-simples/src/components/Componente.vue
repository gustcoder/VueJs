<template>
    <div id="comp" v-if="!hideComp">
        <h2>{{ title }} - {{ contador }}</h2>
        <button @click="addContador(2)">Aumentar</button>
        <newButton/>
    </div>
</template>

<script>

import newButton from './Button'

export default {
    name: 'Comp',
    components: {
        newButton
    },
    data: function() {
        return {
            title: 'Meu primeiro componente VueJs!!!',
            contador: 0,
        }
    },
    methods: {
        addContador(passo) {
            this.contador += passo
        }
    },
    computed: {
        hideComp() {
            return this.contador === 30
        }
    },
    watch: {
        contador() {
            this.hideComp
        }
    }
}
</script>

<style>
    #comp {
        background-color: coral;
        color: #fff;
    }
</style>