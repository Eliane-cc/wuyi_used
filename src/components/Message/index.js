import Message from './Message.vue'

const obj = {}

// 在调用Vue.use()方法时,会执行 install()方法
obj.install = function(Vue){
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Message);

  //2.使用new的方式,根据组件构造器，可以创建出来一个组件对象
  const message = new toastConstructor();

  //3.将组件对象，手动挂载到某一个元素上
  message.$mount(document.createElement('div'));

  //4.toast.$el 对应的就是 div 标签元素
  document.body.appendChild(message.$el);

  //5.原型方式进行挂载
  Vue.prototype.$message = message;

}

export default obj;
