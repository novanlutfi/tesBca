import Vue from 'vue'
import Router from 'vue-router'
import PostsTable from '@/components/PostsTable'
import Plans from '@/components/Plans'
import PlanModal from '@/components/PlanModal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/poststable',
      name: 'PostsTable',
      component: PostsTable
    },
    {
      path: '/',
      name: 'Plans',
      component: Plans
    },
    {
      path: '/planmodal',
      name: 'PlanModal',
      component: PlanModal
    }
  ]
})
