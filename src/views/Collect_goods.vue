<template>
    <div>
        <div class="header">
            <img src="@/assets/img/images/collect.png" alt="">
            <button class="btn1">宝贝收藏</button>
                <button class="button" @click='goTo()'>卖家收藏</button>
        </div>
        <div class="content">
            <div class="recordgoods" @click="go()"><img src="@/assets/img/images/goods4.jpg" alt=""><a href="">宜家大鲨鱼玩偶<span>$70</span></a></div>
            <div class="recordgoods" @click="go()"><img src="@/assets/img/images/goods4.jpg" alt=""><a href="">宜家大鲨鱼玩偶<span>$70</span></a></div>
            <div class="recordgoods" @click="go()"> <img src="@/assets/img/images/goods4.jpg" alt=""><a href="">宜家大鲨鱼玩偶<span>$70</span></a></div>
            <div class="recordgoods" @click="go()"> <img src="@/assets/img/images/goods4.jpg" alt=""><a href="">宜家大鲨鱼玩偶<span>$70</span></a></div>
            <div class="recordgoods" @click="go()"> <img src="@/assets/img/images/goods4.jpg" alt=""><a href="">宜家大鲨鱼玩偶<span>$70</span></a></div>
            <div class="recordgoods" @click="go()"> <img src="@/assets/img/images/goods4.jpg" alt=""><a href="">宜家大鲨鱼玩偶<span>$70</span></a></div>
            <div class="recordgoods" @click="go()"> <img src="@/assets/img/images/goods4.jpg" alt=""><a href="">宜家大鲨鱼玩偶<span>$70</span></a></div>
            <div class="recordgoods" @click="go()"> <img src="@/assets/img/images/goods4.jpg" alt=""><a href="">宜家大鲨鱼玩偶<span>$70</span></a></div>
        </div>

<div><web-footer></web-footer></div>
    </div>
</template>

<script>
    import WebFooter from "../components/WebFooter";
    export default {
        name: "Collect_goods",
        components: {
            WebFooter
        },
        methods: {
            goTo() {
                //直接跳转
                this.$router.push('/collect_salers');
            },
            go(){
                this.$router.push('/commodity');
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
    .header .btn1{
        border: none;
        background:none;
        color: #EEEE00;

    }

    .header .btn1:hover{
        border: none;
    }
    .header .btn1:focus{
        border: none;
        outline: none;

    }
    .header .btn1{
        background: none;
        border: none;
        color: #EEEE00;
        font-size: 20px;

    }

    .header .btn1:hover{
        border: none;

    }

    .header .btn1:focus{
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

        border: none;
        outline: none;
        color: #FAFAFA;
        background: none;
        font-size: 18px;
        margin-left: 30px;
        width: 100px;
        height: 50px;

    }

    .content{
        overflow: hidden;
        width: 980px;
        margin: 20px auto;

    }
    .div1{
        overflow: hidden;
        width: 980px;
        margin: 0 auto;

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
        margin-top: 40px;
        text-align: center;

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
        background:#FAFAFA;
        border: 1px solid #E6E6E6;
        border-top: 2px solid #349B5E;
        float: left;
        margin-left: 30px;
        margin-bottom: 20px;
        margin-top: 40px;
        transition: 1s;
    }
    .recordgoods:hover{
       transform: scale(1.1);


    }
    .recordgoods img{
        display: inline-block;
        margin: 0 auto;
        padding: 10px;
        width: 180px;
        height: 160px;
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