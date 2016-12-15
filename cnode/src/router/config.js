export default [
  {
    path: '/',
    name: 'home',
    component: require('src/pages/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: require('src/pages/login.vue')
  },
  {
    path: '/content/:id',
    name: 'content',
    component: require('src/pages/article.vue')
  }
]
