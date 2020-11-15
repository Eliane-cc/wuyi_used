<template>
  <div>
    <div class="nav" v-show="isNav">
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
        <div class="nav_item nav_icon" @click="showSearch">
          <icon-svg icon-class="icon-search"/>
        </div>
        <div class="nav_item nav_icon" @click="showMore">
          <icon-svg icon-class="icon-shop" :class="{icon_selected: isShowMore}"/>
        </div>
      </div>
    </div>
    <div class="nav nav_search" v-show="!isNav">
      <div class="nav_contain_search">
        <div class="nav_item_search">
          <icon-svg icon-class="icon-search" class="search_icon" icon-size="25px"/>
        </div>
        <div class="nav_item_search">
          <input type="text" placeholder="搜索" class="search_input">
        </div>
        <div class="nav_item_search nav_item" @click="showSearch">
          <icon-svg icon-class="icon-close" class="search_icon" icon-size="25px"/>
        </div>
      </div>
    </div>
    <more class="aside" v-if="isShowMore"></more>
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
        isShowMore: false,
        isNav: true
      }
    },
    methods: {
      showMore(){
        this.isShowMore = !this.isShowMore
      },
      showSearch(){
        this.isNav = !this.isNav
        this.isShowMore = false
      }
    }
  }
</script>

<style scoped>
  input {
    border: 0;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
  }
  .nav{
    width: 100%;
    border-top: 3px solid rgb(79,192,141);
  }
  .nav_search{
    background-color: #ffffff;
  }
  .nav_contain{
    display: flex;
    justify-content: space-around;
    width: 1100px;
    margin: auto;
  }
  .nav_contain_search{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1100px;
    margin: auto;
  }
  .nav_item{
    padding: 17px;
    margin-right: 5px;
    cursor: pointer;
  }
  .nav_item_search{
    padding: 8px 5px;
  }
  .nav_icon:hover{
    color: #349B5E;
  }
  .aside{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .icon_selected{
    color: #349B5E;
  }
  .search_icon{
    color: #349B5E;
    width: 5em;
    height: 5em;
  }
  .search_input{
    display: block;
    width: 500px;
    padding: 10px;
    border: 1px solid #349B5E;
    border-radius: 5px;
  }

</style>