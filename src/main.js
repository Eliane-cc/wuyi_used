import Vue from 'vue'
import App from './App.vue'
//1.引入自定义的 toast插件
import message from './components/Message'

Vue.config.productionTip = false

//2.安装toast插件
Vue.use(message);

new Vue({
  render: h => h(App),
}).$mount('#app')
