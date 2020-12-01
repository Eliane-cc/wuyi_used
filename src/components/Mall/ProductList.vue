<template>
  <div class="productList_contain">
    <div class="productList">
      <div class="productList_header">
        <div :class="{header: true,  selected: currenHeader=='综合排序' ? true : false}" @click="changeHeader('综合排序')">综合排序</div>
        <div :class="{header: true,  selected: currenHeader=='发布时间' ? true : false}" @click="changeHeader('发布时间')">发布时间</div>
      </div>
      <div class="productList_content">
        <div class="productList_row" >
          <div v-for="(item,index) in shoppingList" :class="{productItem: true,marginRight: (index+1)%4!=0 ? true : false}" @click="goTo()">
            <div class="img">
              <img :src="item.source" class="product_img">
            </div>
            <div class="product_header">
              <div class="price">￥{{item.price}}</div>
              <div class="flex_row collect">
                <div class="extent">{{item.extent}}</div>
                <div @click="collect(item,index)">
                  <icon-svg icon-class="icon-star-fill" class="icon_collect icon_fill" icon-size="25px" v-if="item.iscollect"/>
                  <icon-svg icon-class="icon-star" class="icon_collect" icon-size="25px" v-else/>
                </div>

              </div>
            </div>
            <div class="product_title">
              {{item.title}}
            </div>
            <div class="product_remark">
              <div class="flex_row product_publisher">
                <div class="flex_row info">
                  <icon-svg icon-class="icon-user" class="icon_svg" icon-size="15px"/>
                  <div class="end_text">{{item.publisher}}</div>
                </div>
                <div class="flex_row info">
                  <icon-svg icon-class="icon-shijian" class="icon_svg clock" icon-size="14px"/>
                  <div class="end_text">{{item.releaseTime}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pagination :current-page="currentPage"></pagination>
  </div>
</template>

<script>
  import Pagination from "../Pagination";
  export default {
    name: "ProductList.vue",
    components: {
      Pagination
    },

    data(){
      return{
        currenHeader: '综合排序',
        currentPage: 1,
        shoppingList: [
          {
            source: require('@/assets/img/pic1.png'),
            price: '45.0',
            extent: '9成新',
            title: '2020新款秋冬款开衫毛衣女短款外搭加厚上衣宽松外穿针织衫小外套短款外搭加厚上衣宽松外穿针织衫小外套',
            publisher: '苏奕娜',
            releaseTime: '2020-11-19',
            iscollect: true
          },
          {
            source: require('@/assets/img/pic6.png'),
            price: '45.0',
            extent: '9成新',
            title: '2020新款秋冬款开衫毛衣女短款外搭加厚上衣宽松外穿针织衫小外套短款外搭加厚上衣宽松外穿针织衫小外套',
            publisher: '苏奕娜',
            releaseTime: '2020-11-19',
            iscollect: false
          },
          {
            source: require('@/assets/img/pic2.png'),
            price: '45.0',
            extent: '9成新',
            title: '2020新款秋冬款开衫毛衣女短款外搭加厚上衣宽松外穿针织衫小外套短款外搭加厚上衣宽松外穿针织衫小外套',
            publisher: '苏奕娜',
            releaseTime: '2020-11-19',
            iscollect: false
          },
          {
            source: require('@/assets/img/pic3.png'),
            price: '45.0',
            extent: '9成新',
            title: '2020新款秋冬款开衫毛衣女短款外搭加厚上衣宽松外穿针织衫小外套短款外搭加厚上衣宽松外穿针织衫小外套',
            publisher: '苏奕娜',
            releaseTime: '2020-11-19',
            iscollect: false
          },
          {
            source: require('@/assets/img/pic7.png'),
            price: '45.0',
            extent: '9成新',
            title: '2020新款秋冬款开衫毛衣女短款外搭加厚上衣宽松外穿针织衫小外套短款外搭加厚上衣宽松外穿针织衫小外套',
            publisher: '苏奕娜',
            releaseTime: '2020-11-19',
            iscollect: false
          },
          {
            source: require('@/assets/img/pic8.png'),
            price: '45.0',
            extent: '9成新',
            title: '2020新款秋冬款开衫毛衣女短款外搭加厚上衣宽松外穿针织衫小外套短款外搭加厚上衣宽松外穿针织衫小外套',
            publisher: '苏奕娜',
            releaseTime: '2020-11-19',
            iscollect: false
          },
          {
            source: require('@/assets/img/pic6.png'),
            price: '45.0',
            extent: '9成新',
            title: '2020新款秋冬款开衫毛衣女短款外搭加厚上衣宽松外穿针织衫小外套短款外搭加厚上衣宽松外穿针织衫小外套',
            publisher: '苏奕娜',
            releaseTime: '2020-11-19',
            iscollect: false
          },
          {
            source: require('@/assets/img/pic2.png'),
            price: '45.0',
            extent: '9成新',
            title: '2020新款秋冬款开衫毛衣女短款外搭加厚上衣宽松外穿针织衫小外套短款外搭加厚上衣宽松外穿针织衫小外套',
            publisher: '苏奕娜',
            releaseTime: '2020-11-19',
            iscollect: false
          },
          {
            source: require('@/assets/img/pic3.png'),
            price: '45.0',
            extent: '9成新',
            title: '2020新款秋冬款开衫毛衣女短款外搭加厚上衣宽松外穿针织衫小外套短款外搭加厚上衣宽松外穿针织衫小外套',
            publisher: '苏奕娜',
            releaseTime: '2020-11-19',
            iscollect: false
          },
          {
            source: require('@/assets/img/pic7.png'),
            price: '45.0',
            extent: '9成新',
            title: '2020新款秋冬款开衫毛衣女短款外搭加厚上衣宽松外穿针织衫小外套短款外搭加厚上衣宽松外穿针织衫小外套',
            publisher: '苏奕娜',
            releaseTime: '2020-11-19',
            iscollect: false
          },
          {
            source: require('@/assets/img/pic8.png'),
            price: '45.0',
            extent: '9成新',
            title: '2020新款秋冬款开衫毛衣女短款外搭加厚上衣宽松外穿针织衫小外套短款外搭加厚上衣宽松外穿针织衫小外套',
            publisher: '苏奕娜',
            releaseTime: '2020-11-19',
            iscollect: false
          },
          {
            source: require('@/assets/img/pic8.png'),
            price: '45.0',
            extent: '9成新',
            title: '2020新款秋冬款开衫毛衣女短款外搭加厚上衣宽松外穿针织衫小外套短款外搭加厚上衣宽松外穿针织衫小外套',
            publisher: '苏奕娜',
            releaseTime: '2020-11-19',
            iscollect: false
          }
        ]
      }
    },
    methods: {
      changeHeader(header){
        if (this.currenHeader != header){
          this.currenHeader = header
        }
      },
      collect(item,index){
        if (item.iscollect){
          //取消收藏
          this.shoppingList[index].iscollect = !item.iscollect

        }
        else{
          //收藏
          this.shoppingList[index].iscollect = !item.iscollect
        }
      },
      goTo(){
        this.$router.push('/commodity');
  },
    }
  }
</script>

<style scoped>
  .flex_row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .productList_contain{
    width: 1200px;
    background-color: #ffffff;
    padding: 12px;
    margin-top: 10px;
    box-sizing: border-box;
  }
  .productList_header{
    background-color: #ffffff;
    border-bottom: 3px solid #349B5E;
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
  }
  .header{
    padding: 12px 20px;
    font-size: 13px;
    cursor: pointer;
  }
  .header:hover{
    color: #349B5E;
  }
  .selected{
    background-color: #349B5E;
    color: #ffffff;
    cursor: auto;
  }
  .selected:hover{
    color: #ffffff;
  }
  .img{
    width: 250px;
    overflow: hidden;
    cursor: pointer;
  }
  .product_img{
    width: 250px;
    transition: all 1s;
  }
  .product_img:hover{
    transform: scale(1.2);
  }
  .productItem{
    padding: 10px;
    border: 1px solid #e4e4e4;
    margin-top: 10px;
    width: 250px;
    display: inline-block;
  }
  .product_header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
  }
  .collect{
    align-items: center;
  }
  .price{
    font-size: 20px;
    font-weight: 600;
    color: #D86448;
  }
  .extent{
    border: 1px solid #cccccc;
    font-size: 13px;
    color: #555555;
    padding: 1px 5px;
    border-radius: 3px;
    margin-right: 10px;
  }
  .icon_collect{
    color: #bbbbbb;
    cursor: pointer;
  }
  .icon_collect:hover{
    color: #D86448;
  }
  .product_title{
    color: #555555;
    font-size: 14px;
    margin-top: 10px;
    cursor: pointer;
    width: 250px;
    height: 37px;
    /*两行超出后显示省略号*/
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .product_title:hover{
    color: #D86448;
  }
  .product_publisher{
    font-size: 13px;
    color: #a7a7a7;
  }
  .product_remark{
   margin-top: 20px;
  }
  .info{
    align-items: center;
  }
  .icon_svg{
    margin-right: 8px;
  }
  .clock{
    font-weight: 800;
  }
  .marginRight{
    margin-right: 28px;
  }
  .icon_fill{
    color: #D86448;
  }
</style>