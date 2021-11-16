import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-42eb5-default-rtdb.europe-west1.firebasedatabase.app/'

Vue.use({
    install(Vue) {
        // tornando o axios global a partir de $http
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-42eb5-default-rtdb.europe-west1.firebasedatabase.app/'
        })
    }
})