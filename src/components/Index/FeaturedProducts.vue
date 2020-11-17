<template>
  <div class="contain">
    <!--  精选商品分类  -->
    <div class="featured_contain">
      <div v-for="(item,index) in featured_item" @mouseenter="featuredEnter(item)">
        <div :class="{featured_item_selected: isHover}" class="featured_item" :style="{background: item.color==currentColor? item.color : '#efefef'}">
          <div class="title" :style="{color: item.color==currentColor ? '#ffffff' : item.color}">{{item.title}}</div>
          <div class="second_title" :style="{color: item.color==currentColor ? '#ffffff' : ''}">{{item.detail}}</div>
          <div class="border" :style="{'border-bottom-color': item.color==currentColor ? '#ffffff' : item.color}"></div>
          <div>
            <img :src="item.source" class="featured_img">
          </div>

          <div class="icon_caret_down">
              <icon-svg icon-class="icon-caret-down" class="icon_svg" icon-size="25px" :style="{color: item.color==currentColor? item.color : '#ffffff'}"></icon-svg>
          </div>
        </div>
      </div>

      <!--  精选商品  -->
      <div class="shop_contain" v-for="(rowItem, num) in featured_shop">
        <div class="shop_column">
          <div class="shop_row" v-for="(item, index) in rowItem.row">
            <div class="shop_item" v-show="rowItem.color==currentColor ? true : false">
              <img :src="item.source" class="shop_img">
              <div class="info_title">{{item.title}}</div>
              <div class="info_detail" :style="{color: rowItem.color==currentColor ? rowItem.color : '#ffffff'}">{{item.detail}}</div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "FeaturedProducts",
    data(){
      return{
        featured_item:[
          {
            title: '二手书籍',
            detail: '几乎全新的热门二手书籍',
            color: '#35C276',
            source: require('@/assets/img/index/book_pic.png')
          },
          {
            title: '二手生活',
            detail: '好用常用的二手生活用品',
            color: '#FEB624',
            source: require('@/assets/img/index/life_pic.png')
          },
          {
            title: '二手数码',
            detail: '你想要的二手数码产品 这里都有',
            color: '#FA6A11',
            source: require('@/assets/img/index/digital_pic.png')
          },
          {
            title: '官方严选',
            detail: '不仅直卖 更是严选',
            color: '#0AB38C',
            source: require('@/assets/img/index/book_pic.png')
          },
        ],
        isHover: true,
        currentColor: '#35C276',
        featured_shop:[
          {
            row: [
              {
                title: '小王子',
                detail: '你们很美，但你们是空虚的',
                source: require('@/assets/img/index/book1.png'),
              },
              {
                title: '奎妮小姐的石头大屋',
                detail: '一个温暖的长篇故事',
                source: require('@/assets/img/index/book2.png')
              },
              {
                title: '目光',
                detail: '世界如此美好，值得我走这一趟',
                source: require('@/assets/img/index/book3.png')
              },
              {
                title: '朝花夕拾',
                detail: '现代文学家鲁迅散文集',
                source: require('@/assets/img/index/book4.png')
              },
              {
                title: '被讨厌的勇气',
                detail: '所谓的自由，就是被别人讨厌',
                source: require('@/assets/img/index/book5.png')
              },
              {
                title: 'Photoshop',
                detail: 'Photoshop全能一本通',
                source: require('@/assets/img/index/book6.png')
              }
            ],
            color: '#35C276'
          },
          {
            row: [
              {
                title: '子',
                detail: '测试',
                source: require('@/assets/img/index/book1.png')
              },
              {
                title: '奎妮小姐',
                detail: '长篇故事',
                source: require('@/assets/img/index/book2.png')
              },
              {
                title: '目光',
                detail: '值得我走这一趟',
                source: require('@/assets/img/index/book3.png')
              },
              {
                title: '朝花夕拾',
                detail: '鲁迅散文集',
                source: require('@/assets/img/index/book4.png')
              },
              {
                title: '被讨厌的勇气',
                detail: '所谓的自由，就是被别人讨厌',
                source: require('@/assets/img/index/book5.png')
              }
            ],
            color: '#FEB624'
          },
          {
            row: [
              {
                title: '小王子',
                detail: '你们很美，但你们是空虚的',
                source: require('@/assets/img/index/book1.png'),
              },
              {
                title: '奎妮小姐的石头大屋',
                detail: '一个温暖的长篇故事',
                source: require('@/assets/img/index/book2.png')
              },
              {
                title: '目光',
                detail: '世界如此美好，值得我走这一趟',
                source: require('@/assets/img/index/book3.png')
              },
              {
                title: '朝花夕拾',
                detail: '现代文学家鲁迅散文集',
                source: require('@/assets/img/index/book4.png')
              },
              {
                title: '被讨厌的勇气',
                detail: '所谓的自由，就是被别人讨厌',
                source: require('@/assets/img/index/book5.png')
              }
            ],
            color: '#FA6A11'
          },
          {
            row: [
              {
                title: '子',
                detail: '测试',
                source: require('@/assets/img/index/book1.png')
              },
              {
                title: '奎妮小姐的石头大屋',
                detail: '一个温暖的长篇故事',
                source: require('@/assets/img/index/book2.png')
              },
              {
                title: '目光',
                detail: '世界如此美好，值得我走这一趟',
                source: require('@/assets/img/index/book3.png')
              },
              {
                title: '朝花夕拾',
                detail: '现代文学家鲁迅散文集',
                source: require('@/assets/img/index/book4.png')
              },
              {
                title: '被讨厌的勇气',
                detail: '所谓的自由，就是被别人讨厌',
                source: require('@/assets/img/index/book5.png')
              }
            ],
            color: '#0AB38C'
          }
        ]
      }
    },
    methods: {
      featuredEnter(item){
        if (item.color != this.currentColor){
          this.currentColor = item.color
        }
      }
    }
  }
</script>

<style scoped>
  .contain{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .featured_contain{
    position: relative;
    width: 1220px;
    height: 180px;
    top: 530px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .featured_item{
    width: 290px;
    height: 230px;
    background-color: #efefef;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .title{
    font-size: 18px;
    font-weight: bold;
    margin: 45px 0px 5px 30px;
  }
  .second_title{
    font-size: 14px;
    margin: 5px 0px 6px 30px;
  }
  .border{
    border-bottom: 5px solid #ffffff;
    width: 15px;
    height: 5px;
    margin: 6px 0px 10px 30px;
  }
  .shop_contain{
    position: absolute;
    top: 260px;
    width: 100%;
    height: 180px;
  }
  .shop_row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    overflow: hidden;
  }
  .featured_img{
    width: 110px;
    height: 110px;
    margin-left: 150px;
  }
  .icon_caret_down{
    text-align: center;
    margin-top: 3px;
  }
  .info_title{
    color: #333333;
    margin-top: 15px;
  }
  .info_detail{
    color: #35C276;
    font-size: 14px;
    margin-top: 7px;
  }
  .shop_item{
    width: 240px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .shop_img{
    width: 100px;
    height: 100px;
  }
  .shop_column{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .title_selected{
    color: #ffffff;
  }
  .second_title_selected{
    color: #ffffff;
  }
</style>