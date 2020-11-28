<template>
  <div class="login_contain">
    <div class="img_contain">
      <img src="@/assets/img/login.png" alt="" class="img1">
    </div>
    <div class="form_login">
      <form>
        <div class="login_title">邑大二手市场 </div>
        <div class="div2">
          <span class="user">
             <icon-svg icon-class="icon-user1" class="icon_svg" icon-size="24px"></icon-svg>
            <input type="text" class="input1" v-model="username"/>
          </span>
          <span class="user">
             <icon-svg icon-class="icon-unlock" class="icon_svg" icon-size="24px"></icon-svg>
            <input type="text" id="password" name="user_password"  class="input2" v-model="password"/>
          </span>
        </div>

        <div class="btn">
          <button type="button" class="btn_common btn_register" @click="register">注册</button>
          <button type="button" class="btn_common btn_login" @click="login">登录</button>
        </div>
      </form>
    </div>
    <div class="text">Copyright by 粤ICP备150XXXXX1号</div>
  </div>
</template>

<script>
  import {getLoginStatus} from '../api/index'
  export default {
    name: "Login.vue",
    data(){
      return{
        username: '',
        password: ''
      }
    },
    methods: {
      register(){
        this.$router.push('/register')
      },
      login(){
        if(this.username && this.password){
          let params = new URLSearchParams();
          params.append("username", this.username);
          params.append("password", this.password);
          console.log("params",params)
          getLoginStatus(params)
            .then((res) => {
              if (res.code == 1){
                this.$message.show("登录成功！", 'icon-close-circle-fill', '#F5222D');
              }else{
                this.$message.show("登录失败！", 'icon-close-circle-fill', '#F5222D');
              }
            })
        }else {
          this.$message.show("账号或密码不能为空，请重新输入！", 'icon-close-circle-fill', '#F5222D');
        }
      }
    }
  }
</script>

<style scoped>
  .login_contain{
    background: #ffffff;
    width: 100%;
  }
  .login_title{
    text-align: center;
    width: 150px;
    font-size: 20px;
    padding: 5px;
    margin: 5px auto;
    border-bottom: 2px solid #04B45F;
    color: #555555;
    font-weight: 600;
  }
  .img_contain{
    width: 100%;
    height: 300px;
    background-color: #04B45F;
  }
  .form_login{
    width: 450px;
    height: 300px;
    background: #FAFAFA;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
  }
  span{
    display: block;
    height: 40px;
    width: 350px;
    margin:20px 50px;
    border: 2px solid #E6E6E6;
    border-radius: 3px;
  }
  span::after{
    border: 1px solid #04B45F;
    box-shadow: 0 0 5px #04B45F;
  }
  .icon_svg{
    color: #888888;
    padding: 7px 10px;
    position: absolute;
    left: 50px;
    border-right: 1px solid #E6E6E6;

  }
  .img1{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -76%);
  }
  .input1{
    height: 35px;
    width: 300px;
    border: none;
    margin: 0 0 0 45px;
  }
  input:focus{
    /*去掉默认input边框*/
    outline:none;
    border: 1px solid #BDBDBD;
    box-shadow: 0 0 3px #BDBDBD;
  }
  .input2{
    height: 35px;
    width: 300px;
    border: none;
    margin: 0 0 0 45px;
  }
  .btn{
    margin-top: 40px;
    border-top: 1px solid #E6E6E6;
    padding: 10px 0;
  }
  .btn_register{
    margin-left: 55px;
  }
  .btn_login{
    margin-left: 200px;
  }
  .btn_login:active {
    outline: none;
    border: 1px solid #04B45F;
    box-shadow: 0 0 2px #04B45F;
  }
  .btn_register:active{
    outline: none;
    border: 1px solid #04B45F;
    box-shadow: 0 0 2px #04B45F;
  }
  .text{
    top: 495px;
    position: absolute;
    width: 100%;
    color: #555555;
    text-align: center;
    font-size: 14px;
  }
  .btn_common{
    cursor: pointer;
    background: #04B45F;
    height: 35px;
    width: 70px;
    border-style: none;
    outline: none;
    color: #ffffff;
    border-radius: 5px;
    font-size: 15px;
  }
  .btn_common:hover{
    background: rgba(4,180,95,0.9);
  }
</style>