<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>
export default {
    computed: {
        quantidade: {
            get () {
                return this.$store.getters.getQuantidade
            },
            set (quantidade) {
                this.$store.commit('setQuantidade', quantidade)
            }
        },
        preco: {
            get () {
                return this.$store.getters.getPreco
            },
            set (preco) {
                this.$store.commit('setPreco', preco)
            }
        }
        // preco () {
        //     return this.$store.getters.getPreco
        // }
    }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
