import Vue from 'vue'
export default new Vue({
    methods: {
        aniversario (idade) {
            this.$emit('aniversario', idade)
        },
        aplicarAniversario (callback) {
            this.$on('aniversario', callback)
        }
    }
})