import Vue from 'vue'
import Router from 'vue-router'
// 导入每个大模块的根组件
import Home from '../routers/Home/Home'
import Market from '../routers/Market/Market'
import Collection from '../routers/Collection/Collection'
import Mine from '../routers/Mine/Mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/market',
      component: Market
    },
    {
      path: '/collection',
      component: Collection
    },
    {
      path: '/mine',
      component: Mine
    }
  ]
})
