import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-b697a-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue) {
        // tornando o axios global a partir de $http
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-b697a-default-rtdb.firebaseio.com/'
        })
    }
})