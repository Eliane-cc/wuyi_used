<template>
<!--  <div id="app">-->
<!--    -->
<!--  </div>-->
  <div>
    <button @click="btn">按钮</button>
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    btn(){
      console.log("我是按钮",this.$message)
      this.$message.show("你好啊,我是提示", 'icon-check-circle-fill', '#42B782');
    },
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
