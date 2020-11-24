import Vue from 'vue'
import VueRouter from "vue-router";
import Index from '../views/Index';
import Mall from '../views/Mall';
import Welfare from '../views/Welfare';
import About from '../views/About';
import Login from "../components/Login";
import Register from "../components/Register";

//1、安装插件
Vue.use(VueRouter)

//2、创建router
const routes = [
  {
    path: '',
    redirect:  '/index'
  },
  {
    path: '/index',
    component:  Index
  },
  {
    path: '/mall',
    component:  Mall
  },
  {
    path: '/welfare',
    component:  Welfare
  },
  {
    path: '/about',
    component:  About
  },
  {
    path: '/login',
    component:  Login,
    meta:{
      showNav: true
    }
  },
  {
    path: '/register',
    component:  Register,
    meta:{
      showNav: true
    }
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

