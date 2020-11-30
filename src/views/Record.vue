<template>
    <div>
        <div class="header">

            <img src="@/assets/img/images/record.png" alt="">
           Record
        </div>
        <div class="content">
            <div class="my_pubilshed" @click="go()">
                <img src="@/assets/img/images/goods5.jpg" alt="">
                <span class="text1">A5折线本</span>
                <span class="span1">￥7</span>
                <span class="span2">9成新</span>
                <span class="span3">2020/11/29</span>

            </div>
            <div class="my_pubilshed" @click="go()">
                <img src="@/assets/img/images/goods5.jpg" alt="">
                <span class="text1">A5折线本</span>
                <span class="span1">￥7</span>
                <span class="span2">9成新</span>
                <span class="span3">2020/11/29</span>


            </div>
            <div class="my_pubilshed" @click="go()">
                <img src="@/assets/img/images/goods5.jpg" alt="">
                <span class="text1">A5折线本</span>
                <span class="span1">￥7</span>
                <span class="span2">9成新</span>
                <span class="span3">2020/11/29</span>

            </div>
            <div class="my_pubilshed" @click="go()">
                <img src="@/assets/img/images/goods5.jpg" alt="">
                <span class="text1">A5折线本</span>
                <span class="span1">￥7</span>
                <span class="span2">9成新</span>
                <span class="span3">2020/11/29</span>

            </div>

        </div>
        <div><web-footer></web-footer></div>
    </div>
</template>

<script>
    import WebFooter from "../components/WebFooter";
    export default {
        name: "Record",
        components:{
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
        width: 50px;
        height: 50px;
    }
    .content{
        overflow: hidden;
        width: 980px;
        margin: 40px auto;

    }
    .my_pubilshed{
        float: left;
        margin-left: 30px;
        width: 200px;
        height: 280px;
        border: 1px dashed #BDBDBD;


    }
    .my_pubilshed:hover{
        border: 1px solid #349B5E;

    }
    .my_pubilshed img{
        width: 160px;
        height: 160px;
        padding: 20px;
        margin-bottom: 5px;
        transition: all 1s;
    }


    .text1{
        padding-left: 8px;
        display: block;
        font-size: 13px;
        color: #6E6E6E;

    }
    .span1{
        font-size: 13px;
        padding-left: 5px;
        color: red;
    }
    .span2{
        display: inline-block;
        border: 1px solid #ededed;
        padding: 3px;
        border-radius: 10px;
        margin-left: 120px;
        color: #BDBDBD;
        font-size: 10px;
    }
    .span3{
        color: #cccccc;
        font-size: 12px;
        margin-left: 120px;
    }
</style>