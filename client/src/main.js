import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import 'bootstrap'
import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue";
import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.filter('numFormat', numFormat(numeral));

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
