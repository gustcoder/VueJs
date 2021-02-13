// import Vue from 'vue'
export default {
    data () {
        return {
            customHeadersTemplate: ''
        }
    },
    template: `<div>BABOSEIORA</div>`,
    created () {
        this.customHeaders()
    },
    methods: {
        customHeaders () {
            for (const item in this.headers) {
                this.customHeadersTemplate += `
                <template v-slot:header.${this.headers[item].value}="{ header }">
                    <span :id="header.text">{{ header.text }}</span>
                </template>`
                console.log(this.customHeadersTemplate)
            }
        }
    },
}