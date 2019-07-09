// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*element*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//vuex
import Vuex from 'vuex'
Vue.use(Vuex);

import store from './store'

//axios
import axios from 'axios'
Vue.prototype.$axios = axios;

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  store,
  template: '<App/>'
})
