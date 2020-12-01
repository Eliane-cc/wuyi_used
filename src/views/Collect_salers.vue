<template>
    <div>
        <div class="header">
            <img src="@/assets/img/images/collect.png" alt="">
                <button @click='goTo()'>宝贝收藏</button>
                <button class="btn1">卖家收藏</button>
        </div>
        <div class="div1" id="btn_2">
            <div class="div2" @click='goTo_saler()'>
                <img src="@/assets/img/images/me.jpg" alt="" class="img1">
                <p class="username">Twinkle</p>
            </div>
            <div class="div2">
                <img src="@/assets/img/images/me.jpg" alt="" class="img1">
                <p class="username">Twinkle</p>
            </div>
            <div class="div2">
                <img src="@/assets/img/images/me.jpg" alt="" class="img1">
                <p class="username">Twinkle</p>
            </div>
            <div class="div2">
                <img src="@/assets/img/images/me.jpg" alt="" class="img1">
                <p class="username">Twinkle</p>
            </div>
            <div class="div2">
                <img src="@/assets/img/images/me.jpg" alt="" class="img1">
                <p class="username" id="usr">Twinkle</p>
            </div>
        </div>
        <div><web-footer></web-footer></div>
    </div>
</template>

<script>
    import WebFooter from "../components/WebFooter";
    export default {
        name: "Collect_salers",
        components:{
            WebFooter
        },
        methods: {
            goTo() {
                //直接跳转
                this.$router.push('/collect_goods');
            },
            goTo_saler(){
                this.$router.push('/accountinfo');
            }
        }
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height: 80px;
        background: #349B5E;
        font-size: 25px;
        color: #EEEE00;
        font-family: Arial;

    }
    .btn1{
        border: none;
        background:none;
        color: #EEEE00;
        margin-left: 30px;


    }

     .btn1:hover{
        border: none;
    }
   .btn1:focus{
        border: none;
        outline: none;

    }
     .btn1{
        background: none;
        border: none;
        color: #EEEE00;
        font-size: 20px;

    }

   .btn1:hover{
        border: none;

    }

     .btn1:focus{
        border: none;
        outline: none;

    }
    .header img{
        margin-left: 20px;
        margin-top: 20px;
        margin-right: 55px;
        width: 40px;
        height: 40px;
    }
    button{
        font-size: 18px;
        border: none;
        outline: none;
        color: #FAFAFA;
        background: none;
        margin-left: 30px;
        width: 100px;
        height: 50px;
    }

    /*.content{*/
    /*    overflow: hidden;*/
    /*    width: 980px;*/
    /*    margin: 20px auto;*/

    /*}*/
    .div1{
        overflow: hidden;
        width: 980px;
        margin: 20px auto;

    }
    .div2{
         padding: 8px;
         border: 1px solid #E6E6E6;
         border-top: 2px solid #349B5E;
         width: 150px;
         height: 130px;
         background: #FAFAFA;
         float: left;
         margin-right: 20px;
         text-align: center;
        transition: 1s;
        margin-top: 40px;
        margin-bottom: 20px;
     }

    .div2:hover{
     transform: scale(1.1);
    }
    .username{
        font-size: 15px;
        color: #6E6E6E;
    }
    .img1{

        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .img2{
        display: block;
        width: 50px;
        height: 50px;
        margin-left: 68px;
    }

    .recordgoods{
        width: 200px;
        height: 230px;
        background: #FAFAFA;
        float: left;
        margin-left: 30px;
        margin-top: 20px;
    }
    .recordgoods img{
        width: 200px;
        height: 180px;
    }
    a{
        display: block;
        text-align: center;
        text-decoration: none;
        overflow: hidden;
        color: #6E6E6E;

    }
    span{
        display: block;
        margin-top: 5px;
        color: red;
    }


</style>