<template>
  <div>
    <div class="nav">
      <div class="nav_contain">
        <nav-item path="/index">
          <div slot="item-text">首页</div>
        </nav-item>
        <nav-item path="/mall">
          <div slot="item-text">二手商城</div>
        </nav-item>
        <nav-item path="/welfare">
          <div slot="item-text">公益项目</div>
        </nav-item>
        <nav-item path="/about">
          <div slot="item-text">关于我们</div>
        </nav-item>
        <div class="nav_item nav_icon">
          <icon-svg icon-class="icon-search"/>
        </div>
        <div class="nav_item nav_icon">
          <icon-svg icon-class="icon-shop"/>
        </div>
      </div>
    </div>
    <more class="aside"></more>
  </div>

</template>

<script>
  import NavItem from "./NavItem";
  import More from "./More";
  export default {
    name: "Navigation",
    components: {
      NavItem,
      More
    },
    data(){
      return{

      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .nav{
    width: 100%;
  }
  .nav_contain{
    display: flex;
    justify-content: space-around;
    width: 1100px;
    margin: auto;
  }
  .nav_item{
    padding: 14px 10px;
    margin-right: 5px;
    cursor: pointer;
  }
  .nav_icon:hover{
    color: #349B5E;
  }
  .aside{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
</style>