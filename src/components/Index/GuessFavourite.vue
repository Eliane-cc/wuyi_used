<template>
  <div class="guess_contain">
    <div class="guess_title">猜你喜欢</div>
    <div class="guess_row" v-for="(guessRow,guessIndex) in guessList">
      <div class="item" v-for="(item,index) in guessRow.row">
        <div class="img_contain">
          <img :src="item.sourse" class="guess_item_img">
        </div>
        <div class="shop_title">{{item.title}}</div>
        <div class="shop_price">{{item.price}}</div>
      </div>
    </div>
    <div class="more_contain">
      <div class="guess_more">
        更多
        <icon-svg icon-class="icon-right-circle" class="icon_svg" icon-size="19px"></icon-svg>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "GuessFavourite.vue",
    data(){
      return{
        guessList: [
          {
            row:[
              {
                title: '飞科电吹风机家用静音负离子护发冷热风小型可折叠宿舍学生吹风筒',
                price: '￥35.5',
                sourse: require('@/assets/img/pic3.png')
              },
              {
                title: '飞科电吹风机家用静音负离子护发冷热风小型可折叠宿舍学生吹风筒',
                price: '￥35.5',
                sourse: require('@/assets/img/pic4.jpg')
              },
              {
                title: '飞科电吹风机家用静音负离子护发冷热风小型可折叠宿舍学生吹风筒',
                price: '￥35.5',
                sourse: require('@/assets/img/pic5.png')
              },
              {
                title: '飞科电吹风机家用静音负离子护发冷热风小型可折叠宿舍学生吹风筒',
                price: '￥35.5',
                sourse: require('@/assets/img/pic6.png')
              },
              {
                title: '飞科电吹风机家用静音负离子护发冷热风小型可折叠宿舍学生吹风筒',
                price: '￥35.5',
                sourse: require('@/assets/img/pic2.png')
              },
            ]
          },
          {
            row:[
              {
                title: '志高8/10公斤洗衣机全自动家用小型迷你大容量波轮宿舍租房热烘干',
                price: '￥199.9',
                sourse: require('@/assets/img/pic2.png')
              },
              {
                title: '飞科电吹风机家用静音负离子护发冷热风小型可折叠宿舍学生吹风筒',
                price: '￥35.5',
                sourse: require('@/assets/img/pic1.png')
              },
              {
                title: '飞科电吹风机家用静音负离子护发冷热风小型可折叠宿舍学生吹风筒',
                price: '￥35.5',
                sourse: require('@/assets/img/pic6.png')
              },
              {
                title: '飞科电吹风机家用静音负离子护发冷热风小型可折叠宿舍学生吹风筒',
                price: '￥35.5',
                sourse: require('@/assets/img/pic2.png')
              },
              {
                title: '飞科电吹风机家用静音负离子护发冷热风小型可折叠宿舍学生吹风筒',
                price: '￥35.5',
                sourse: require('@/assets/img/pic3.png')
              },
            ]
          },
          {
            row:[
              {
                title: '飞科电吹风机家用静音负离子护发冷热风小型可折叠宿舍学生吹风筒',
                price: '￥39.9',
                sourse: require('@/assets/img/index/book1.png')
              },
              {
                title: '飞科电吹风机家用静音负离子护发冷热风小型可折叠宿舍学生吹风筒',
                price: '￥35.5',
                sourse: require('@/assets/img/index/book2.png')
              },
              {
                title: '飞科电吹风机家用静音负离子护发冷热风小型可折叠宿舍学生吹风筒',
                price: '￥35.5',
                sourse: require('@/assets/img/index/book3.png')
              },
              {
                title: '飞科电吹风机家用静音负离子护发冷热风小型可折叠宿舍学生吹风筒',
                price: '￥35.5',
                sourse: require('@/assets/img/index/book4.png')
              },
              {
                title: '飞科电吹风机家用静音负离子护发冷热风小型可折叠宿舍学生吹风筒',
                price: '￥35.5',
                sourse: require('@/assets/img/index/book5.png')
              },
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .guess_contain{
    position: relative;
    top: 800px;
    padding: 20px;
    background-color: #efefef;
  }
  .guess_title{
    font-weight: 500;
    font-size: 25px;
    color: #333333;
  }
  .guess_row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 18px;
    padding: 5px;
  }
  .item{
    padding: 20px;
    text-align: center;
    background-color: #ffffff;
    border: 1px solid #ffffff;
  }
  .item:hover{
    border: 1px solid #349B5E;
  }
  .guess_item_img{
    width: 190px;
    transition: all 1s;
  }
  .guess_item_img:hover{
    transform: scale(1.2);
  }
  .shop_title{
    color: #444444;
    width: 170px;
    font-size: 13px;
    text-align: center;
    margin: auto;
    margin-top: 15px;
  }
  .shop_price{
    color: #349B5E;
    font-size: 18px;
    font-weight: 500;
    margin-top: 15px;
  }
  .img_contain{
    overflow: hidden;
    width: 190px;
  }
  .more_contain{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 25px;
  }
  .guess_more{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 80px;
    cursor: pointer;
    color: #555555;
    font-size: 15px;
  }
  .guess_more:hover{
    color: #349B5E;
  }
  .icon_svg{
    color: #349B5E;
    margin-left: 8px;
  }
</style>