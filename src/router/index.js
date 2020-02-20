import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: ()=>import('@/views/login')
    },
    {
      path:'/index',
      name:'index',
      component: ()=>import('@/views/index'),
      children:[
        {
          path:'',
          name:'goods',
          component:()=>import('@/components/goods')
        },
        {
          path:'goods',
          name:'goods',
          component:()=>import('@/components/goods')
        },
        {
          path:'allGoods',
          name:'allGoods',
          component:()=>import('@/components/allGoods')
        },
        {
          path:'allUser',
          name:'allUser',
          component:()=>import('@/components/allUser')
        }
      ]
    }
  ]
})
