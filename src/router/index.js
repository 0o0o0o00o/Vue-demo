import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import GoodsList from './../views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/goods/:goodsId',
      name: 'GoodsList',
      components:{
        default:GoodsList,
        title:Title,
        image:Image
      }
    },
    {
      path:'/cart/:goodsId',
      name:'cart',
      component:Cart
    }
  ]
})
