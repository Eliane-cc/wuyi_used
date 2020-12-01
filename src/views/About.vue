<template>
  <div>
    <div class="header"></div>
    <div class="wrapper">
      <div class="nav_left" id="J_nav" style="left: 0px; top: 5px; position: absolute;">
        <h6 class="nav1_title"></h6>
        <!--<div class="arrow"></div>-->
        <ul class="">
          <li class="">
            <a class="c_about selected" href="javascript:void(0)">HI 邑大二手</a>
          </li>
          <li>
            <a class="c_chronicle" href="#c_chronicle">服务项目</a>
          </li>
          <li>
            <a class="c_cul" href="#c_cul">联系我们</a>
          </li>
        </ul>
      </div>
      <div class="wrapper_content">
        <div class="section about J_section" id="c_about" data-start-diff-height="150">
          <div class="il">
            <img width="658" height="235" src="@/assets/img/images/1.jpg"/>
          </div>
          <div class="about_text1">
            <h4>邑大二手欢迎您！</h4>
            <br />
            <p class="">
              <strong>尊敬的客户：</strong>
            </p>
            <p>很高兴在这里遇见您！遇见您是我们人生中最佳的缘分。</p>
            <p>邑大二手是一个买卖闲置物品的交易平台，是电子商务的一种具体应用，是一个虚拟化的市场。</p>
            <p>专门为五邑大学的学生服务，没有中间商，免费发布。</p>
            <p>学生本人注册并登陆本网站就可以直接发布自己的闲置到此网站售卖，也可以买自己心意的或者所需的商品。</p>
            <p>非常便利的一个二手交易平台！</p>
            <p>相信您独特的眼光，在我们这里挑选最棒的商品。</p>
            <p>品牌授权，产地直采，保证100%正品。</p>
            <p>特别的商品，特别的价格。</p>
            <p>让我们一起行动吧，让好物变废为宝吧！</p>
          </div>
        </div>
        <div class="clear"></div>
        <div class="section chronicle J_section" id="c_chronicle" data-start-diff-height="110" data-end-diff-height="-70">
          <div class="about_text2">
            <h2>服务项目</h2>
            <p>赠人玫瑰，手留余香！作为一条咸鱼，也不忘记贡献爱心。</p>
            <p>邑大二手网站不仅是买卖闲置,还可以奉献自己的爱心。</p>
            <p>将自己闲置的学习用品或生活必需物品捐献给那些贫困地区可爱的人儿!</p>
          </div>
          <div id="container">
            <div id="photo">
              <img src="@/assets/img/images/2.jpg" />
              <img src="@/assets/img/images/3.jpg" />
              <img src="@/assets/img/images/4.jpg" />
            </div>
          </div>
          <div class="blank">
          </div>
        </div>
        <div class="clear"></div>
        <div class="section cul J_section" id="c_cul" data-start-diff-height="110" data-end-diff-height="-70">
          <div class="pic">
            <img width="369" height="63" src="@/assets/img/images/5.jpg">
          </div>
          <div class="about_text3">
            <strong>联系我们</strong>
            <p style="padding-top:20px;">联系人：邑大二手</p>
            <p>手机：10000000000</p>
            <p>电话：0000-0000000</p>
            <p>邮箱：邑大二手@qq.com</p>
            <p>地址：广东省江门市蓬江区东成村22号</p>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="wrapper_bt"></div>
    </div>
    <div><web-footer></web-footer></div>
  </div>
</template>

<script>
  import WebFooter from "../components/WebFooter";
  export default {
    name: "About",
    components:{
      WebFooter
    }
  }
</script>

<style scoped>
  .top_head {
    width: 1000px;
    height: 25px;
    margin: 0 auto;
    position: relative;
  }
  .header {
    height: 50px;
    background-color: #349B5E;
  }
  .wrapper {
    position: relative;
    width: 1000px;
    margin: 20px auto 0;
    background: #f8f8f8;
    background-image: none;
    background-attachment: scroll;
    background-repeat: repeat;
    background-position-x: 0;
    background-position-y: 0;
    background-size: auto;
    background-origin: padding-box;
    background-clip: border-box;
    background-color: #f8f8f8;
  }
  blockquote, body, button, code, dd, div, dl, dt, fieldset, figure, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
  }

  body, button, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, td, textarea, th, ul {

  }
  .wrapper .nav_left {
    width: 188px;
  }
  .wrapper .nav_left h6.nav1_title {
    background-image: none;
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-position-x: 0;
    background-position-y: 0;
    background-size: auto;
    background-origin: padding-box;
    background-clip: border-box;
    background-color: #f8f8f8;
    height: 57px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
  }
  .wrapper .nav_left ul {
    padding: 7px 15px 0 42px;
    position: relative;
  }
  /*设置导航栏的下划线格式*/
  .wrapper .nav_left ul li {
    text-indent: 10px;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #edeeef;
  }
  /*去掉导航栏字体前面的.*/
  li, ol, ul {
    list-style: none;
  }
  .wrapper .nav_left ul li a.selected, .wrapper .nav_left ul li a.selected:visited {
    color: #349B5E;
    background-image: none;
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-position-x: 103px;
    background-position-y: 0%;
    background-size: auto;
    background-origin: padding-box;
    background-clip: border-box;
    background-color: transparent;
  }
  .wrapper .nav_left ul li a, .wrapper .nav_left ul li a:visited {
    color: #349B5E;/*设置服务项目、联系我们的颜色*/
    display: block;
  }
  a {
    background: 0 0;
    outline: 0;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
  a, a:hover {
    text-decoration: none;
  }

  fieldset, img {
    border: 0 none;
  }
  img {
    vertical-align: bottom;
    margin: 0;
    padding: 0;
  }
  fieldset, img {
    border: 0 none;
  }
  a, img {
    vertical-align: top;
  }

  .wrapper .wrapper_content {
    background-image: none;
    background-attachment: scroll;
    background-repeat: repeat;
    background-position-x: 0%;
    background-position-y: 0%;
    background-size: auto;
    background-origin: padding-box;
    background-clip: border-box;
    background-color: transparent;
  }
  /*调节字体图片靠右对齐*/
  .wrapper .section {
    position: relative;
    float: right;
    width: 670px;
    padding: 10px 70px 0 69px;
    overflow: hidden;
  }
  .about, .chronicle {
    margin-top: 0px;
  }
  .wrapper .section .il {
    padding: 5px;/*设置所有四个填充都是5px*/
    background: #fff;
    box-shadow: 0px 0px 2px #c3c3c3;
    margin-left: 2px;/*设置元素的左外边距*/
  }
  .wrapper .section .pic {
    margin-top: 40px;
  }
  .wrapper .about_text1 {
    position: relative;
    padding-bottom: 200px;
  }
  .wrapper .about_text2 {
    position: relative;
    padding-bottom: 40px;
  }
  .wrapper .about_text3 {
    position: relative;
    padding-bottom: 300px;
  }
  .wrapper .about_text p {
    font-size: 14px;
    color: #333;
    line-height: 32px;
    font-family: \5FAE软雅黑;
  }
  .wrapper .section h4 {
    color: #349B5E;
    font-size: 22px;
    font-family: 微软雅黑;
    font-weight: 100;
    padding-top: 30px;
  }
  .wrapper .section {
    position: relative;
    float: right;
    width: 670px;
    padding: 10px 70px 0 69px;
    overflow: hidden;
  }
  .wrapper .section h2 {
    display: block;
    font-size: 20px;
    color: #1b1b1b;
    padding-top: 20px;
    font-family: \5FAE软雅黑;
  }
  .wrapper .section p{
    font-size: 14px;
    color: #333;
    line-height: 32px;
    font-family: \5FAE软雅黑;
  }
  .carousel .slides {
    position: relative;
    margin: 0 auto 30px;
    overflow: hidden;
  }
  .carousel .slides .slideItem {
    position: absolute;
    cursor: pointer;
    overflow: hidden;
    padding: 0;
    opacity: 1 !important;
  }
  .carousel .slides .slideItem .cover {
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 400px !important;
    height: 413px !important;
    overflow: hidden;
    background: #fff;

  }

  .clear {
    clear: both;
    content: ".";
    display: block;
    height: 0px;
    visibility: hidden;
  }
  .cul_main {

  }
  .about_text3 strong {
    display: block;
    font-size: 20px;
    color: #1b1b1b;
    padding-top: 20px;
    font-family: \5FAE软雅黑;
  }
  .about_text3 p {
    display: block;
    font-size: 14px;
    color: #333;
    line-height: 32px;
    padding-bottom: 15px;
    font-family: \5FAE软雅黑;
  }
  #container {
    width: 400px;
    height: 300px;
    overflow: hidden;
  }
  #photo {
    width: 1200px;
    animation: switch 5s ease-out infinite;

  }
  #photo > img {
    float: left;
    width: 400px;
    height: 300px;

  }
  .section .blank {
    margin-bottom: 120px;
  }
  @keyframes switch {
    0%, 25% {
      margin-left: 0;
    }
    35%, 60% {
      margin-left: -400px;
    }
    70%, 100% {
      margin-left: -800px;
    }
  }

</style>