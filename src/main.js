import Vue from 'vue'
import App from './App.vue'
import {
  BootstrapVue,
  BootstrapVueIcons
} from 'bootstrap-vue'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false
Vue.prototype.$publicPath = process.env.BASE_URL
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA2bNhY3Qj1cIBGJfybxixBQqj226GX1Dc',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
})

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: {
    App
  }
})