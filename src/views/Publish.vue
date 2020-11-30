<template>
    <div class="body">
        <div class="header">

            <img src="@/assets/img/images/publish.png" alt="">
            MY ISSUE
        </div>
        <div class="content">
            <div class="my_pubilshed">
                <img src="@/assets/img/images/goods3.jpg" alt="" @click="go()">
                <span class="text1">HUAWEI MatePad 5G 10.4英寸</span>
                <span class="span1">分类：数码产品</span>
                <span class="span1">价格：￥7</span>
                <span class="span1">新旧程度：9成新</span>
                <span class="span1">购买时间：2020/11/29</span>

            </div>
            <div class="my_pubilshed">
                <img src="@/assets/img/images/goods2.jpg" alt="" @click="go()">
                <span class="text1">HUAWEI MatePad 5G 10.4英寸</span>
                <span class="span1">分类：数码产品</span>
                <span class="span1">价格：￥7</span>
                <span class="span1">新旧程度：9成新</span>
                <span class="span1">购买时间：2020/11/29</span>


            </div>
            <div class="my_pubilshed">
                <img src="@/assets/img/images/goods4.jpg" alt="" @click="go()">
                <span class="text1">HUAWEI MatePad 5G 10.4英寸</span>
                <span class="span1">分类：数码产品</span>
                <span class="span1">价格：￥7</span>
                <span class="span1">新旧程度：9成新</span>
                <span class="span1">购买时间：2020/11/29</span>

            </div>
            <div class="my_pubilshed" @click="go()">
                <img src="@/assets/img/pic3.png" alt="">
                <span class="text1">HUAWEI MatePad 5G 10.4英寸</span>
                <span class="span1">分类：数码产品</span>
                <span class="span1">价格：￥7</span>
                <span class="span1">新旧程度：9成新</span>
                <span class="span1">购买时间：2020/11/29</span>

            </div>
        </div>
        <div>  <web-footer></web-footer></div>
    </div>
</template>

<script>
    import WebFooter from "../components/WebFooter";
    export default {
        name: "Publish",
        components: {
            WebFooter
        },
        methods: {

            go(){
                this.$router.push('/commodity');
            }

        }

    }
</script>

<style scoped>
.body{
    background: #F2F2F2;
}
    .header{
        width: 100%;
        height: 80px;
        background: #349B5E;
        color: #EEEE00;
        font-family: Arial;

    }
    .header img{
        margin-left: 20px;
        margin-top: 20px;
        margin-right:20px;
        width: 40px;
        height: 40px;
    }
    .header button{
        background: none;
        border: none;
        font-size: 20px;
        margin-left: 30px;
        color: #EEEE00;
    }

    .header button:focus{
        border: none;
        outline: none;
    }
    .content{
        overflow: hidden;
        width: 1020px;
        margin: 0px auto;

    }
    .my_pubilshed{
        float: left;
        margin-left: 30px;
        margin-top: 40px;
        margin-bottom: 40px;
        width: 200px;
        height: auto;
      background: white;
        padding: 10px;

    }

    .my_pubilshed:hover{

        box-shadow: 5px 7px 5px #cccccc;
    }


    .my_pubilshed img{
        display: block;
        width: 180px;
        height: 160px;
        padding: 10px;
        margin-bottom: 5px;

    }
    .text1{
        display: block;
        font-size: 13px;
        color: #349B5E;
        padding: 5px;
    }
    .span1{
        font-size: 13px;
        display: block;
        padding-left: 5px;
        color: #a7a7a7;
        margin-bottom: 5px;
    }
    .span2{
        margin-left: 90px;
        color: #BDBDBD;
        font-size: 10px;

    }
</style>