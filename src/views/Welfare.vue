<template>
  <div>
    <!--主-->
    <div class="main">
      <!--新闻报告，轮播广告-->
      <div class="main-layout1">
        <div class="layout1-left">
          <div class="layout1CarouselPic" :style="{display: isShowArr[0]}">
            <img src="@/assets/img/charity/layout1-carousel1.png"  alt="1">
          </div>
          <div class="layout1CarouselPic" :style="{display: isShowArr[1]}">
            <img src="@/assets/img/charity/layout1-carousel2.png"  alt="1">
          </div>
          <div class="layout1CarouselPic" :style="{display: isShowArr[2]}">
            <img src="@/assets/img/charity/layout1-carousel3.png"  alt="1">
          </div>
        </div>
        <div class="layout1-right">

          <ul class="layout1-right-title">
            <li class="layout1-right-title-item" style="background:#35495e;color:white;">新闻资讯</li>
            <li class="layout1-right-title-item">机构月报</li>
            <li class="layout1-right-title-item">公益视频</li>
          </ul>

          <ul class="layout1-right-content">
            <li class="layout1-right-content-item" :style="setBackground" v-for="(item,index) in rightList">
              <a href="#">{{item.content}}</a>
            </li>
          </ul>
        </div>
      </div>
      <!--    公益活动-->
      <div class="main-layout3-activity">
        <div class="layout3-title">
          <span>公益项目</span>
          <a href="#">+更多</a>
        </div>
        <div class="layout3-content">
          <div class="layout3-content-item">
            <img src="@/assets/img/charity/layout3-item1.png" alt="">
            <p>
              【邑大公益】
              <br>
              <a href="">&nbsp;&nbsp;邑大二手联合智能制造学部学生会三下乡·你的爱心由我们来传递·一支笔·一本书·一份爱·一份希望</a>
            </p>
          </div>
          <div class="layout3-content-item">
            <img src="@/assets/img/charity/layout3-item2.png" alt="">
            <p>
              【邑大公益】
              <br>
              <a href="">&nbsp;&nbsp;邑大二手联合智能制造学部学生会三下乡之韶关·你的爱心由我们来传递·一支笔·一本书·一份爱·一份希望</a>
            </p>
          </div>
          <div class="layout3-content-item">
            <img src="@/assets/img/charity/layout3-item3.png" alt="">
            <p>
              【邑大公益】
              <br>
              <a href="">&nbsp;&nbsp;邑大二手联合金融学部学生会三下乡之肇庆·你的爱心由我们来传递·一支笔·一本书·一份爱·一份希望</a>
            </p>
          </div>
          <div class="layout3-content-item">
            <img src="@/assets/img/charity/layout3-item4.png" alt="">
            <p>
              【邑大公益】
              <br>
              <a href="">&nbsp;&nbsp;邑大二手联合计算机学生会三下乡之关东·你的爱心由我们来传递·一支笔·一本书·一份爱·一份希望</a>
            </p>
          </div>
        </div>
      </div>
      <!--    捐赠活动，捐赠名单-->
      <div class="main-layout2-child">

        <div class="layout2-left">
          <div class="layout2-left-title">
            <span>小孩寄语</span>
            <a href="#">+更多</a>
          </div>
          <div class="layout2-left-content">
            <div class="layout2-left-child">
              <img src="@/assets/img/charity/layout2-child1.png" alt="1">
              <span>谢谢邑大二手，希望做个舞蹈家</span>
            </div>
            <div class="layout2-left-child">
              <img src="@/assets/img/charity/layout2-child2.png" alt="2">
              <span>谢谢邑大二手，非常开心</span>
            </div>
            <div class="layout2-left-child">
              <img src="@/assets/img/charity/layout2-child3.png" alt="3">
              <span>谢谢邑大二手，以后做个警察保护国家</span>
            </div>
            <div class="layout2-left-child">
              <img src="@/assets/img/charity/layout2-child4.png" alt="4">
              <span>谢谢邑大二手，希望做个漫画家</span>
            </div>
          </div>
        </div>
        <div class="layout2-right">
          <div class="layout2-right-title">
            <span>爱心捐赠人</span>
            <a href="#">+更多</a>
          </div>
          <div class="layout2-right-content">
            <div class="layout2-donate-table">
              <table >
                <thead>
                  <tr><td>捐赠人</td><td>捐赠物品</td><td>爱心寄语</td></tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in list">
                    <td>{{item.name}}</td><td>{{item.thing}}</td><td>{{item.content}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="layout2-donate-btn">我要捐赠</div>

          </div>
        </div>
      </div>

      <!--公益合作伙伴-->
      <div class="main-layout4-partner">
        <div class="layout4-partner-title"><span>公益合作</span></div>
        <div class="layout4-partner-content">
          <a href="#">
            <div class="layout4-partner-item">
              <img src="@/assets/img/charity/layout4-partner5.png" alt="">
            </div>
          </a>
          <a href="#">
            <div class="layout4-partner-item">
              <img src="@/assets/img/charity/layout4-partner2.png" alt="">
            </div>
          </a>
          <a href="#">
            <div class="layout4-partner-item">
              <img src="@/assets/img/charity/layout4-partner3.png" alt="">
            </div>
          </a>
          <a href="#">
            <div class="layout4-partner-item">
              <img src="@/assets/img/charity/layout4-partner4.png" alt="">
            </div>
          </a>
          <a href="#">
            <div class="layout4-partner-item">
              <img src="@/assets/img/charity/layout4-partner1.png" alt="">
            </div>
          </a>
        </div>
      </div>
    </div>
    <web-footer></web-footer>
  </div>
</template>

<script>
  import WebFooter from "../components/WebFooter";
  export default {
    name: "Welfare",
    components: {
      WebFooter
    },
    data(){
      return{
        list: [
          {
            name: '冯嘉雯',
            content: "加油吧，孩子们！要努力学习",
            thing: '蜡笔'
          },
          {
            name: '吴华敏',
            content: "加油吧，孩子们！要努力学习",
            thing: '笔盒'
          },
          {
            name: '苏奕娜',
            content: "加油哦，孩子们！要好好学习",
            thing: '衣服'
          },
          {
            name: '吴纯纯',
            content: "加油哦，孩子们！要好好喝水",
            thing: '水瓶'
          },
          {
            name: '冯嘉雯',
            content: "加油吧，孩子们！要努力学习",
            thing: '蜡笔'
          },
          {
            name: '吴华敏',
            content: "加油吧，孩子们！要努力学习",
            thing: '笔盒'
          },
          {
            name: '苏奕娜',
            content: "加油哦，孩子们！要好好学习",
            thing: '衣服'
          },
          {
            name: '吴纯纯',
            content: "加油哦，孩子们！要好好喝水",
            thing: '水瓶'
          },
          {
            name: '冯嘉雯',
            content: "加油吧，孩子们！要努力学习",
            thing: '蜡笔'
          },
          {
            name: '吴华敏',
            content: "加油吧，孩子们！要努力学习",
            thing: '笔盒'
          },
          {
            name: '苏阿姨',
            content: "加油哦，孩子们！要好好学习",
            thing: '衣服'
          },
          {
            name: '吴纯纯',
            content: "加油哦，孩子们！要好好喝水",
            thing: '水瓶'
          }
        ],
        setBackground: {
          background: "url(" + require("@/assets/img/charity/triangle.png") + ") no-repeat left center"
        },
        rightList: [
          {
            content: "邑大二手爱心捐助基金会2020年第三季度工作报告"
          },
          {
            content: "邑大二手爱心捐助基金会2020年第三季度工作报告"
          },
          {
            content: "邑大二手爱心捐助基金会2020年第三季度工作报告"
          },
          {
            content: "邑大二手爱心捐助基金会2020年第三季度工作报告"
          },
          {
            content: "邑大二手爱心捐助基金会2020年第三季度工作报告"
          },
          {
            content: "邑大二手爱心捐助基金会2020年第三季度工作报告"
          },{
            content: "邑大二手爱心捐助基金会2020年第三季度工作报告"
          },
          {
            content: "邑大二手爱心捐助基金会2020年第三季度工作报告"
          },
          {
            content: "邑大二手爱心捐助基金会2020年第三季度工作报告"
          }, {
            content: "邑大二手爱心捐助基金会2020年第三季度工作报告"
          }, {
            content: "邑大二手爱心捐助基金会2020年第三季度工作报告"
          },
        ],
        isShowArr: ['block','none','none']
      }
    },
    mounted() {
      this.$nextTick(() => {
        setInterval(this.carousel, 3000);
      })
    },
    methods:{
      carousel(){
        if(this.isShowArr[0] == 'block' && this.isShowArr[1] == 'none' && this.isShowArr[2] == 'none'){
          this.$set(this.isShowArr,1,"block")
          this.$set(this.isShowArr,0,"none")
        }else if(this.isShowArr[0] == 'none' && this.isShowArr[1] == 'block' && this.isShowArr[2] == 'none'){
          this.$set(this.isShowArr,1,"none")
          this.$set(this.isShowArr,2,"block")
        }else if(this.isShowArr[0] == 'none' && this.isShowArr[1] == 'none' && this.isShowArr[2] == 'block'){
          this.$set(this.isShowArr,2,"none")
          this.$set(this.isShowArr,0,"block")
        }
      }
    }
  }
</script>

<style scoped>
*{margin:0px; padding: 0px; }
/*body{background: #4fc08d;}*/
ul li { list-style-type: none;}
a {text-decoration:none;color: #000;}
  #headNav
  {
    height: 70px;
    width: 100%;
    background: white;
    border-bottom: lightgrey 1px solid;
  }
  .top-line
  {
    background: #4fc08d;
    height: 3px;
    width: 100%;
  }
  .nav-container
  {

    display: flex;
    align-items: center;
    width: 1200px;
    height: 64px;
    margin: 0 auto;
    background: white;
    /*background: lightgoldenrodyellow;*/
    justify-content: space-between;
  }
  .nav-item
  {
    width: 130px;
    height: 100%;
    display: flex;
    /*background: darkgreen;*/
  }
  .nav-text
  {
    margin: 0 auto;
    /*background: #4fc08d;*/
    text-align: center;
    align-self: center;
    font-size: 18px;
  }
  .main
  {
    width: 1200px;
    margin: 0 auto;
    background: white;
    padding: 30px;
  }

  .main-layout1
  {
    width: 100%;
    height: 500px;
    /*margin-top: 10px;*/
    /*background: blue;*/
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .layout1-left
  {
    width: 740px;
    height: 500px;
    /*background: blue;*/
    box-sizing: border-box;

  }
  .layout1-left img
  {
    width: 100%;
    height: 100%;
  }
  .layout1CarouselPic
  {
    background: blue;
    width: 100%;
    height: 100%;
  }
  .layout1-right
  {
    width: 420px;
    height: 500px;
    /*background:pink;*/

  }

  .layout1-right-title
  {

    width: 420px;
    height: 50px;
    margin-bottom: 10px;
  }
  .layout1-right-title-item
  {
    background:#e5e5e5;
    float: left;
    height: 100%;
    width: 140px;
    margin: 0 auto;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    font-weight: bold;
    color:  #35495e;
  }


  .layout1-right-content
  {
    width: 100%;
    height: 440px;
    /*background: pink;*/
  }
  .layout1-right-content-item
  {
    width: 100%;
    height:40px;
    border-bottom: lightgrey 1px solid;
    box-sizing: border-box;
    line-height: 40px;
    text-align: left;
    padding-left: 25px;
    background-size: 10px 10px;
    /*background: url(imgUrl) no-repeat left center;*/
    vertical-align: center;
  }
  /*捐赠名单寄语*/
  .main-layout2-child
  {
    width: 100%;
    height: 580px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    /*background: burlywood;*/
    /*border-top: #e5e5e5 1px solid;*/
  }
  .layout2-left
  {
    width: 740px;
    height: 100%;
    /*position: relative;*/
    /*background: #4fc08d;*/

  }
  .layout2-left-title
  {
    width: 100%;
    height: 50px;
    border-bottom: #e5e5e5 1px solid;
    /*background: yellow;*/
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .layout2-left-title span,.layout2-right-title span
  {
    display: flex;
    align-items: flex-end;
    font-size: 20px;
    color: #4fc08d;
    font-weight: bold;
  }
  .layout2-left-title a
  {
    align-self: flex-end;
    font-size: 16px;
    color: darkgrey;
    /*margin-right: 15px;*/
  }
  .layout2-left-content
  {
    width: 100%;
    height: 510px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    /*background: pink;*/
  }

  .layout2-left-child
  {
    width: 360px;
    height: 240px;
    border: #e5e5e5 3px solid;
    box-sizing: border-box;
    display: block;
    position: relative;
  }

  .layout2-left-child img
  {
    width: 100%;
    height: 100%;
  }

  .layout2-left-child span
  {
    display: block;
    width: 100%;
    height: 50px;
    position: absolute;
    background: black;
    z-index: 2;
    bottom: 0px;
    opacity: 0.7;
    color: white;
    text-align: center;
    line-height: 50px;
  }


  .layout2-right
  {
    width: 420px;
    height: 100%;
    float: left;
    /*background: blueviolet;*/
  }
  .layout2-right-title
  {
    width: 100%;
    height: 50px;
    /*padding-right: 15px;*/
    /*background: yellow;*/
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: #e5e5e5 1px solid;
  }
  .layout2-right-title a,.layout3-title a
  {
    color: darkgrey;
    font-size: 16px;
  }
  .layout2-right-content
  {
    width: 100%;
    height: 510px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /*background: pink;*/
  }
  .layout2-donate-table
  {
    width: 100%;
    /*border: black 1px solid;*/
    height: 450px;
    margin-top: 15px;
    /*background: lightgoldenrodyellow;*/
    overflow: hidden;
  }
  .layout2-donate-table table{
    width: 100%;
    text-align: center;
    /*overflow: hidden;*/
  }
  .layout2-donate-table table thead{
    background: #e5e5e5;
    color: #35495e;
    font-weight: bold;
  }
  .layout2-donate-table table td
  {
    height: 30px;
  }
  .layout2-donate-table table tbody tr{
    animation:layout2move 11s  infinite ;
  }
  .layout2-donate-btn{
    width: 100%;
    height: 40px;
    background: #4fc08d;
    color: white;
    text-align: center;
    line-height: 40px;
  }


  /*捐赠活动*/
  .main-layout3-activity
  {
    width: 100%;
    height: 360px;
    padding-top: 15px;
    /*background: cornflowerblue;*/

  }
  .layout3-title{
    width: 100% ;
    height:30px;
    border-bottom: #e5e5e5 1px solid;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .layout3-title span{
    color: #4fc08d;
    font-size: 20px;
    font-weight: bold;
  }
  .layout3-content{
    margin-top: 20px;
    width: 100%;
    height: 300px;
    /*background: lightgoldenrodyellow;*/
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

  }

  .layout3-content-item{
    width: 290px;
    height: 100%;
    border: #e5e5e5 2px solid;
    display: flex;
    flex-wrap: wrap;
  }
  .layout3-content-item img{
    height:230px ;
    width: 290px;
  }
  .layout3-content-item p{
    height:60px ;
    width: 290px;
    /*background: #4fc08d;*/
    color: darkgrey;
    font-size: 14px;
    align-self: flex-end;
  }

  .layout3-content-item p a{
    color: darkgrey;
    font-size: 12px;
  }
  .main-layout4-partner
  {
    width: 100%;
    height: 180px;
    /*background: darkgoldenrod;*/
    margin-top: 15px;
  }
  .layout4-partner-title{
    width: 100%;
    height: 40px;
    border-bottom: #e5e5e5 1px solid;
    display: flex;
    align-items: flex-end;

  }
  .layout4-partner-title span{
    font-size: 20px;
    font-weight: bold;
    color: #4fc08d;

  }
  @keyframes layout4move {
    0%{
      transform: translateX(0%);
    }
    100%{
      transform: translatex(-100%);
    }
  }
  .layout4-partner-content{
    width: 100%;
    height: 130px;
    margin-top: 10px;
    /*background: darkgrey;*/
    display: block;
    /*position: relative;*/
    overflow: hidden;
    white-space: nowrap;

  }


  .layout4-partner-item{
    height: 108px;
    width: 250px;
    display: inline-block;
    border-top:#e5e5e5 1px solid;
    border-bottom:#e5e5e5 1px solid;
    margin-right: 15px;
    padding: 10px;
    white-space:nowrap;
    animation: layout4move 11s  infinite;


  }
  /*版权*/
  .copyright
  {
    width: 100%;
    height: 200px;
    background: #35495e;
    /*margin:0px;*/
  }
</style>