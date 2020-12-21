<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p v-if="exibeIdade">Idade: {{ idade }}</p>
        <button @click="aniversario">Aniversário</button>
        <button @click="aniversarioCallback">Aniversário Callback</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        idade: {
            type: Number,
            required: true
        },
        exibirIdade: {
            type: Boolean,
            default: false
        },
        aniversarioCallback: Function
    },
    computed: {
        exibeIdade () {
            return this.idade != 0
        }
    },
    methods: {
        aniversario () {
            this.idade++
            //this.$emit('aniversario', { idade: this.idade })
            barramento.aniversario(this.idade)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
