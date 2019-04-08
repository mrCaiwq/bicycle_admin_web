import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import Login from '@/pages/login.vue'
import ServerPoint from '@/components/serverPoint.vue'
import updatePoint from '@/components/serverPointComponents/serverPointUpdate'
import createPoint from '@/components/serverPointComponents/serverPointCreate'
import addBicycle from '@/components/serverPointComponents/serverPointAdd'
import order from '@/components/order'
import bicycle from '@/components/bicycle'
import createBicycle from '@/components/bicycleComponets/createBicycle'
import updateBicycle from '@/components/bicycleComponets/updateBicycle'

Vue.use(Router)

const routes = [{
  path: '/',
  component: Index,
  meta: {
    name: '首页'
  }
}, {
  path: '/login',
  component: Login,
  meta: {
    name: '登陆'
  }
}, {
  path: '/serverPoint',
  component: ServerPoint,
  meta: {
    name: '网点'
  }
}, {
  path: '/update/:id',
  meta: {
    name: '修改网点'
  },
  component: updatePoint
}, {
  path: '/create',
  meta: {
    name: '创建网点'
  },
  component: createPoint
}, {
  path: '/order',
  meta: {
    name: '订单'
  },
  component: order
}, {
  path: '/bicycle',
  meta: {
    name: '单车'
  },
  component: bicycle
}, {
  path: '/bicycle/create',
  meta: {
    name: '创建单车'
  },
  component: createBicycle
}, {
  path: '/bicycle/:id/update',
  meta: {
    name: '修改单车'
  },
  component: updateBicycle
}, {
  path: '/serverPoint/:id/add',
  meta: {
    name: '绑定单车'
  },
  component: addBicycle
}

]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  // 除了登陆页面，其余页面均需登陆
  if (to.path !== '/login' && !localStorage.getItem('token')) {
    return router.push({
      path: '/login'
    })
  }
  console.log(to)
  document.title = to.meta.name
  next()
})

export default router
