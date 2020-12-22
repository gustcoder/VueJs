import Vue from 'vue'

export default new Vue({
    methods: {
        selectUser (user) {  
            // console.log(user)
            this.$emit('selectUser', user)
        },
        getUser (callback) {
            return this.$on('selectUser', callback)
        }
    } 
})