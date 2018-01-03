// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import crypto from 'crypto'
Vue.prototype.md5 = function (){
  var md5 = crypto.createHash("md5");
  var value = '';
  for(var i = 0; i < arguments.length; i++) {
    value += arguments[i] + '&';
  }
  md5.update(value + "Taowenhua@JinyongHZ");
  this.data.sign = md5.digest('hex');
}
Vue.prototype.$axios = axios;
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
