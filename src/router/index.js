import Vue from 'vue'
import VueRouter from 'vue-router'
import EmployeeUser from '../views/EmployeeUser.vue'
import AdminUser from '../views/AdminUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Employee',
    component: EmployeeUser
  },
  {
    path: '/admin',
    name: 'adminuser',
    component: AdminUser
  }
]

const router = new VueRouter({
  routes
})

export default router
