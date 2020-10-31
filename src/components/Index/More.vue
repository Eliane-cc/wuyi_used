<template>
  <div>
    <div class="more_contain">
      <div class="more_con" v-for="(item,index) in list">
        <div class="more_list">
          <icon-svg :icon-class="icon" class="icon_svg" :style="{color: iconColor}"></icon-svg>
          <div>{{listText}}</div>
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
          listText: '购物袋'
        },{
          icon: 'icon-calendar',
          listText: '收藏'
        },{
          icon: 'icon-home-fill',
          listText: '账户'
        },{
          icon: 'icon-user',
          listText: '登录'
        }]
      }
    }
  }
</script>

<style scoped>
  .more_contain{
    display: flex;
    flex-direction: row;
    justify-content: left;
    width: 260px;
    margin-right: 10px;
    border: 1px solid #D2D2D7;
    padding: 20px;
    border-radius: 15px;
  }
  .more_list{
    display: flex;
    flex-direction: row;
    justify-content: left;
    border-top: 1px solid #D2D2D7;
    width: 100%;
    padding: 10px 0px 10px 0px;
  }
  .more_con{
    width: 100%;
  }
</style>