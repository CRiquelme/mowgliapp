import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import store from "./store";
import './assets/styles/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSpinner, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import Vuelidate from 'vuelidate'

library.add(faUserSecret, faSpinner, faAlignLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Vuelidate)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
