import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$ajax = axios.create({
  baseURL: 'https://sas.aauth.link/'
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
