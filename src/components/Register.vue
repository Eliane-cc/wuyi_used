<template>
  <div class="contain">
    <div class="form_register">
      <form action="#">
        <div class="title">创建你的账号</div>
        <div class="input">
          <div class="input_title">用户名:</div>
          <input type="text" class="input1" v-model="username">
        </div>
        <div class="input">
          <div  class="input_title">密码:</div>
          <input type="password" class="input1" v-model="pwd1">
        </div>
        <div class="input">
          <div  class="input_title">确认密码:</div>
          <input type="password" class="input1" v-model="pwd2">
        </div>
        <div class="btn_row">
          <button @click="cancel">取消</button>
          <button @click="register">注册</button>
        </div>
        <div class="footer">
          已有帐号，去
          <div class="nav_login" @click="nav_login">登录</div>

        </div>
      </form>
    </div>
  </div>

</template>

<script>
  import {getRegisterStatus} from '../api/index'

  export default {
    name: "Register.vue",
    data(){
      return{
        username: '',
        pwd1: '',
        pwd2: ''
      }
    },
    methods:{
      cancel(){
        this.username = ''
        this.pwd1 = ''
        this.pwd2 = ''
      },
      //注册用户
      register(){
        if (this.username && this.pwd1 && this.pwd2){
          if (this.pwd1 && this.pwd2 && this.pwd1 != this.pwd2){
            this.$message.show("对不起，您输入的两次密码不一致！", 'icon-close-circle-fill', '#F5222D');
          }else{
            let params = new URLSearchParams();
            params.append("username", this.username);
            params.append("password", this.pwd1);
            console.log("params",params)
            getRegisterStatus(params)
              .then((res) => {
                if (res.code == 1){
                  //注册成功
                  this.$message.show(res.msg, 'icon-check-circle-fill', '#52C41A');
                  this.$router.back('/login')
                }else if (res.code == 0){
                  //用户已注册
                  this.$message.show(res.msg, 'icon-warning-circle-fill', '#FAAD14');
                  this.username = ''
                  this.pwd1 = ''
                  this.pwd2 = ''
                }else{
                  //注册失败
                  this.$message.show(res.msg, 'icon-close-circle-fill', '#F5222D');
                }
              })
          }
        }else {
          this.$message.show("用户名和密码不能为空！", 'icon-warning-circle-fill', '#FAAD14');
        }
      },
      nav_login(){
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  .contain{
    width: 100%;
    height: 600px;
    background:#349B5E;
  }
  .title{
    text-align: center;
    margin-bottom: 40px;
    font-size: 16px;
    padding: 10px;
    padding-bottom: 0px;
  }
  .form_register{
    width: 350px;
    height: 400px;
    background: #FAFAFA;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-top: 3px solid rgba(216,100,72,0.8);
    border-radius: 8px;
  }
  .input{
    width: 300px;
    margin: 25px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
  .input1{
    width: 200px;
    border: 1px solid #BDBDBD;
    border-radius: 3px;
    padding: 8px;
  }
  input:focus{
    /*去掉默认input边框*/
    outline:none;
    box-shadow: 0 0 5px #BDBDBD;
  }
  button{
    display: block;
    padding: 10px 40px;
    background: #04B45F;
    color: white;
    border: none;
    outline: none;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 40px;
    cursor: pointer;
  }
  button:active{
    outline: none;
    border: 1px solid #04B45F;
    box-shadow: 0 0 2px #04B45F;
  }
  .btn_row{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .input_title{
    color: #444444;
    font-size: 15px;
  }
  .footer{
    font-size: 13px;
    color: #999999;
    text-align: center;
    margin-top: 10px;
  }
  .nav_login{
    color: #555555;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    cursor: pointer;
  }
  button:hover{
    background: rgba(4,180,95,0.9);
  }
</style>