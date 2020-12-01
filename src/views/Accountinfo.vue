<template>
    <div class="body">
        <div class="container">
            <div class="user_info">
                <div class="user_img"><img src="@/assets/img/images/user_icon.jpg" alt="">Twinkle</div>
                <table>
                    <tr>
                        <td >账号：10191718</td>
                        <td>卖了：1件</td>
                        <td>收藏：19</td>
                        <td>注册时间：2020/11/20</td>
                    </tr>
                    <tr>
                        <td>地区：广东-揭阳</td>
                        <td>关注：10</td>
                        <td>获赞：19</td>
                        <td>登录时间：2020/11/30</td>
                    </tr>
                </table>
                <div class="notice"><button>+关注</button></div>
            </div>
            <div class="navigation">
                <div >
                   <div ><button class="li" @click="goTo_record">购物记录</button></div>
                    <div ><button class="li" @click="goTo_publish">我发布的</button></div>
                    <div ><button class="li" @click="goTo_collect">收藏夹</button></div>
                    <div ><button class="li" @click="goTo_about">关于</button></div>
                    <div ><button class="li">设置</button></div>
                    <div ><button class="li">退出登录</button></div>
                </div>


            </div>
            <div class="addinfo">
                <form action="#">
                    <div class="tip">请完善您的个人信息</div>
                    <div class="info"><span>真实姓名：</span><input type="text"></div>
                    <div class="info"><span>出生年月：</span><input type="date"></div>
                    <div class="info"><span>性别：</span>
                        <input type="radio" name="sex" value="男" class="radio">男
                        <input type="radio" name="sex" value="女" class="radio">女
                    </div>
                    <div class="info"><span>地区：</span><input type="text"></div>
                    <div class="info"><span>联系方式：</span><input type="text"></div>
                    <div class="info"><span>邮箱：</span><input type="text"></div>
                    <div ><button class="save">保 存</button></div>
                </form>
            </div>
        </div>
        <div><web-footer></web-footer></div>
    </div>
</template>

<script>
    import WebFooter from "../components/WebFooter";
    export default {
        name: "Accountinfo",
        components: {
            WebFooter
        },
        methods: {
            goTo_record() {
                //直接跳转
                this.$router.push('/record');
            },
            goTo_publish() {
                //直接跳转
                this.$router.push('/publish');
            },
            goTo_collect() {
                //直接跳转
                this.$router.push('/collect_goods');
            },
            goTo_about() {
                //直接跳转
                this.$router.push('/about');
            },

        }
    }
</script>

<style scoped>
    .body{
        background: #efefef;
        padding: 5px;
    }
.container{
    background: white;
    width: 1020px;
     height: 800px;;
    margin:0px auto;
    overflow: hidden;
    margin-bottom: 40px;
}
.user_info{
    width: 980px;
    height: 140px;
    margin: 2px auto;
    margin-top: 50px;
    background: #F2F2F2;


}
.user_img{
    text-align: center;
    display: inline-block;
    width: 200px;
    height: 120px;
    float: left;
}
.user_img img{
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 15px auto;
}
.notice{
    display: inline-block;
    width: 120px;
    height: 120px;
    float: left;
    margin-left: 40px;
}
.notice button{
    display: block;
    outline: none;
    border: none;
    width: 70px;
    height: 30px;
    background: #349B5E;
    color: white;
    margin-top: 40px;
    cursor: pointer;
}
.save{
    display:block;
    outline: none;
    border: none;
    width: 500px;
    height: 40px;
    font-size: 15px;
    background: #349B5E;
    color: white;
    margin: 40px auto;
    cursor: pointer;
}
.save:hover{
    box-shadow: 5px 5px 5px #cccccc;
 }
.notice button:hover {
    transform: scale(1.2);
    }

.radio{
    width: 15px;
    height: 15px;
}
.li{
    outline: none;
    border: none;
    display: block;
    width: 200px;
    height: 50px;
    color: #349B5E;
    font-size: 15px;
    border-bottom: 3px solid white;
    cursor: pointer;

}
.li:hover{
    background: white;
}

table{
    float: left;
}
tr{
    width: 1020px;
    height: 55px;
    font-size: 14px;
    color: #2c3e50;
}

td{
    width: 150px;
    background: #F2F2F2;
}
.navigation{
    float: left;
    margin-left: 20px;
    width: 200px;
    height: 600px;
    background: #F2F2F2;
    }
.tip{
    border-bottom: 2px solid #349B5E;
    font-size: 20px;
    }
    span{

        display: inline-block;
        width: 80px;
    }
    input{
        display: inline-block;
        width: 250px;
        outline: none;
        height: 20px;
        border: none;
        border: 1px solid #D2D2D7;
        border-radius: 2px;
    }
    form{
        width: 500px;
        height: 600px;
        margin: 40px auto;
        color: #888888;
    }
    .addinfo{
        float: left;
        width: 780px;
        height: 600px;
        background: white;
    }
    .info{
        display: block;
        margin-top: 20px;
    }
</style>