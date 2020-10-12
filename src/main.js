import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from "vuex";
import './assets/styles/index.css'



Vue.config.productionTip = false

new Vue({
  VueRouter,
  Vuex,
  render: h => h(App),
}).$mount('#app')
