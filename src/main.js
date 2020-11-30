import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store/index'
//1.引入自定义的 message插件和icon组件
import message from './components/Message'
import IconSvg from './components/IconSvg'

Vue.config.productionTip = false

//2.安装message插件和IconSvg组件
Vue.use(IconSvg);
Vue.use(message);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
