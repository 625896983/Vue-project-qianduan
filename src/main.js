import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/Theme/css/base.css';
import './assets/Theme/css/user.css'; 
import './assets/Theme/css/trade.css'; 
import './assets/Theme/css/shop.css';
import './assets/Theme/css/login.css';
// let mongodb = require('mongodb');
// import mongodb from 'mongodb';
// require("./assets/Theme/js/jquery-1.11.2.min.js") ;
// require("./assets/Theme/js/main.js") ;
import './views/Setting.vue'
import store from './store/index.js'
// import Jjquery from './assets/Theme/js/jquery-1.11.2.min.js';

// Vue.prototype.jjquery=Jjquery;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store,
	  	
	  
  
}).$mount('#app')

// new Vue({
//   el: '#app',
//   router: router,
 
//   template: '<App/>',
//   components: { App }
// })