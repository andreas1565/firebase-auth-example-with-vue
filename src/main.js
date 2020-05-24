import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import bootstript
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import firbase auth
import { auth } from './firebase';

// make bootstript vue work
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

let app;
/* eslint-disable no-unused-vars */
auth.onAuthStateChanged(user => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
