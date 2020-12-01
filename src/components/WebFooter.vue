<template>
  <div class="footer">
    <div class="contain">
      <div class="footer_left">
        <div>
          <img src="@/assets/img/logo.jpg" class="footer_logo">
        </div>
        <div class="detail">
          <div class="detail_text">地址：广东省江门市蓬江区东成村22号</div>
          <div class="detail_text">邮编：529020</div>
          <div class="detail_text">传真：(0750)3358395</div>
        </div>
        <div class="remark">版权所有©五邑大学</div>
        <div class="remark">粤ICP备150XXXXX1号</div>
      </div>
      <div class="footer_center">
        <div class="code">
          <img src="@/assets/img/code.jpg" class="code_img">
        </div>
        <div class="code_text">五邑大学招生办</div>
      </div>
      <div class="footer_right">
        <div class="footer_title">友情链接</div>
        <div class="link_contain">
          <div class="footer_link">
            <a href="https://www.wyu.edu.cn/" target="_blank" class="link">五邑大学官网</a>
          </div>
          <div class="footer_link">
            <a href="https://www.wyu.edu.cn/lib/" target="_blank"  class="link">五邑大学图书馆网站</a>
          </div>
          <div class="footer_link">
            <a href="https://www.wyu.edu.cn/zsb/" target="_blank"  class="link">五邑大学招生网站</a>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: "Footer.vue"
  }
</script>

<style scoped>
  .footer{
    background-color: #efefef;
    position: relative;
    /*top: 2430px;*/
    width: 100%;
    height: 330px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 30px;
  }
  .footer_logo{
    width: 80px;
    height: 80px;
  }
  .contain{
    width: 1200px;
    height: 300px;
    background-color: #ffffff;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .footer_left{
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    color: #333333;
  }
  .detail{
    margin-top: 20px;
    font-size: 15px;
  }
  .detail_text{
    color: #333333;
    margin-top: 10px;
  }
  .remark{
    margin-top: 20px;
    font-size: 13px;
  }
  .code_img{
    width: 250px;
    height: 250px;
  }
  .code_text{
    text-align: center;
    color: #444444;
    font-size: 15px;
  }
  .footer_right{
    width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .footer_title{
    font-weight: 600;
    margin-top: -20px;
    color: #444444;
  }
  .link_contain{
    margin-top: 30px;
    color: #444444;
    font-size: 15px;
  }
  .link{
    text-decoration: none;
    color: #444444;
    display: block;
    margin-bottom: 10px;
  }
  .link:hover{
    color: #349B5E; 
  }
</style>