import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-42eb5-default-rtdb.europe-west1.firebasedatabase.app/'
// axios.defaults.headers.common['Authorization'] = 'mxzc4234fdskjx128736'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue) {
        // tornando o axios global a partir de $http
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-42eb5-default-rtdb.europe-west1.firebasedatabase.app/',
            headers: {
                // por metodo
                // get: {
                //     "Authorization": "mxzc4234fdskjx128736"                    
                // }
                "Authorization": "mxzc4234fdskjx128736"
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            // eslint-disable-next-line
            console.log(config.method)

            return config
        })
    }
})