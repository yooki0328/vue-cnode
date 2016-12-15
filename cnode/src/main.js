import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
/* eslint-disable no-new */
new Vue({
  store,
  router,
  ...App
  // }).$mount('#app')
  // template: '<div>hello</div>'
  // route,
  // store
}).$mount('#app')
