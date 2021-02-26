import Vue from 'vue'
import App from './App.vue'

import {message, message2} from "./message"
import {str} from "./str"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


str()