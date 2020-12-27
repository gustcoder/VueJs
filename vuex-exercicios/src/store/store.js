import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        produtos: [],
        quantidade: 1,
        preco: 9.99
    },
    getters: {
        getTotal (state) {
            return state.produtos.map(p => p.quantidade * p.preco)
            .reduce((total, atual) => total + atual, 0)
        },
        getQuantidade (state) {
            return state.quantidade
        },
        getPreco (state) {
            return state.preco
        }
    },
    mutations: {
        addProduto (state, payload) {
            state.produtos.push(payload)
        },
        setQuantidade (state, payload) {
            state.quantidade = payload
        },
        setPreco (state, payload) {
            state.preco = payload
        }
    },
    actions: {

    }
})