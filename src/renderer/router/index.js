import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index-page',
      component: require('@/pages/index').default
    },
    {
      path: '/add',
      name: 'add-page',
      component: require('@/pages/add_info').default
    },
    {
      path: '/search',
      name: 'search-page',
      component: require('@/pages/add_search').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})