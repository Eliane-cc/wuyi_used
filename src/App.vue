<template>
  <div>
    <!-- 导航栏   -->
    <navigation></navigation>
    <!-- 页面内容   -->
    <router-view></router-view>
<!--    <button @click="btn">按钮</button>-->
  </div>
</template>

<script>
import Navigation from "./components/Index/Navigation";

export default {
  name: 'App',
  components: {
    Navigation,
  },
  methods: {
    // btn(){
    //   this.$message.show("你好", 'icon-check-circle-fill', '#42B782');
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
