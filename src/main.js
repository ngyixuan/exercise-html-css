import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/iconfont.css';
import './assets/iconfont.js';
// import './assets/js/flexible.js';


import $ from 'jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';



Vue.prototype.$ = $
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  
}).$mount("#app");
