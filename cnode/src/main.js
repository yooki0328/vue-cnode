import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
/* eslint-disable no-new */
console.log(1)
new Vue({
  store,
  router,
  ...App
  // }).$mount('#app')
  // template: '<div>hello</div>'
  // route,
  // store
}).$mount('#app')
console.log(2)
