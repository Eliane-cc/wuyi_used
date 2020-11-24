<template>
  <div>
    <div class="more_contain">
      <div class="caret_up">
        <icon-svg icon-class="icon-up" class="caret_up_icon"></icon-svg>
      </div>
      <div class="more_info">你的购物车是空的哦</div>
      <div class="more_con" v-for="(item,index) in list">
        <div class="more_list" @click="nav(item.path)">
          <icon-svg :icon-class="item.icon" class="icon_svg" :style="{color: iconColor}"></icon-svg>
          <div>{{item.listText}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "More",
    data(){
      return {
        iconColor: '#40A072',
        list: [{
          icon: 'icon-caigou',
          listText: '购物车',
          path: '/login'
        },{
          icon: 'icon-calendar',
          listText: '收藏',
          path: '/login'
        },{
          icon: 'icon-home-fill',
          listText: '个人中心',
          path: '/register'
        },{
          icon: 'icon-user',
          listText: '登录',
          path: '/login'
        }]
      }
    },
    methods: {
      nav(path){
        if (path){
          this.$router.push(path)
        }
      }
    }
  }
</script>

<style scoped>
  .more_contain{
    position: absolute;
    width: 260px;
    margin-right: 14px;
    border: 1px solid #D2D2D7;
    padding: 20px;
    border-radius: 15px;
    background-color: #ffffff;
    z-index: 2000;
  }
  .more_list{
    display: flex;
    flex-direction: row;
    justify-items: left;
    border-top: 1px solid #D2D2D7;
    width: 100%;
    padding: 13px 0px 13px 0px;
    font-size: 14px;
    cursor: pointer;
  }
  .caret_up{
    margin-top: -35px;
    text-align: center;
  }
  .caret_up_icon{
    color: #D2D2D7;
  }
  .more_list:hover{
    color: #349B5E;
  }
  .more_info{
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #333;
    font-size: 14px;
  }
  .more_con{
    width: 100%;
  }
  .icon_svg{
    margin-right: 10px;
  }
</style>