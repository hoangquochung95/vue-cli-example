import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Delete from '@/components/delete'
import Example2 from '@/components/example2'
import Example1 from '@/components/Example1'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/example1/:id',
        name: 'example1',
        component: Example1
    }
      ,
      {
          path: '/delete',
          name: 'delete',
          component: Delete
      }
      ,
      {
          path: '/example/:id',
          name: 'example2',
          component: Example2
      }
  ]
})
