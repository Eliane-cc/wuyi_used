import Vue from 'vue'
import VueRouter from "vue-router";
import Index from '../views/Index';
import Mall from '../views/Mall';
import Welfare from '../views/Welfare';
import About from '../views/About';
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from "../views/Cart";
import Edit from "../views/Edit";
import Accountinfo from "../views/Accountinfo";
import Publish from "../views/Publish";
import Collect_goods from "../views/Collect_goods";
import Collect_salers from "../views/Collect_salers";
import Afford from "../views/Afford";
import Record from "../views/Record";


//1、安装插件
Vue.use(VueRouter)

//2、创建router
const routes = [
  {
    path: '',
    redirect:  '/cart'
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
    path: '/cart',
    component:  Cart
  },
  {
    path: '/edit',
    component:  Edit
  },
  {
    path: '/accountinfo',
    component:  Accountinfo
  },
  {
    path: '/record',
    component:  Record
  },

  {
    path: '/publish',
    component:  Publish
  },
  {
    path: '/collect_goods',
    component:  Collect_goods
  },
  {
    path: '/collect_salers',
    component:  Collect_salers
  },
  {
    path: '/afford',
    component:  Afford
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

