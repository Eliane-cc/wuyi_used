<template>
    <div>
        <div id="headNav">
            <div class="top-line"></div>
        </div>
        <div class="main">
            <div class="layout1-seller-detail">
                <div class="layout1-icon">头像</div>
                <div class="layout1-detail">
                    <span>账号:<a href="#">12345678</a></span>
                    <span>获赞:<a href="#">19</a></span>
                </div>

                <div class="layout1-detail">
                    <span>卖了:<a href="#">1</a>件</span>
                    <span>注册时间:<a href="#">2020-11-19</a></span>
                </div>
                <div class="layout1-detail">
                    <span>好评率:<a href="#">100</a>%</span>
                    <span>信用度:<a href="#">100</a>分</span>
                </div>
                <div class="layout1-detail">
                    <span>粉丝:<a href="#">12</a></span>
                    <span>关注:<a href="#">19</a></span>
                </div>
                <div class="layout1-detail">
                    <input class="btn-follow" type="button" value="+关注" id="follow">
                </div>
            </div>
            <div class="layout2-commodity-detail">
                <div class="layout2-left">
                    <div class="layout2-pic">
                        <img src="@/assets/img/charity/commodity1.png" alt="">
                    </div>
                    <div class="layout2-more-pics">
                        <img src="@/assets/img/charity/commodity1.png" alt="1">
                        <img src="@/assets/img/charity/commodity1.png" alt="2">
                        <img src="@/assets/img/charity/commodity1.png" alt="3">
                        <img src="@/assets/img/charity/commodity1.png" alt="4">
                        <img src="@/assets/img/charity/commodity1.png" alt="5">
                    </div>
                </div>
                <div class="layout2-right">
                    <div class="layout2-detail-title"><span>8成新海尔洗衣机，宿舍4人用，已过保修期，自提</span></div>
                    <div class="layout2-detail-content">
                        <div class="layout2-sort"><span>分类：</span><span>洗衣机</span></div>
                        <div class="layout2-buy-time"><span>发布时间：</span><span>2019-09-15</span></div>
                        <div class="layout2-price"><span>价格：</span><span>￥11</span></div>
                        <div class="layout2-buy-time"><span>购买时间：</span><span>2019-09-15</span></div>
                        <div class="layout2-new-degree"><span>新旧程度：</span><span>8成新</span></div>

                        <div class="layout2-collect-buy">
                            <button class="layout2-btn-collect">收藏</button><button class="layout2-btn-buy">加入购物车</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="guess"><guess-favourite></guess-favourite></div>
        <div><web-footer></web-footer></div>
    </div>
</template>

<script>
    import WebFooter from "../components/WebFooter";
    import GuessFavourite from "../components/Index/GuessFavourite";
    export default {
        name: "Commodity",
        components:{
            WebFooter,
            GuessFavourite
        }
    }
</script>

<style scoped>
    .guess{
        position: relative;
        top: -800px;
    }
    .top{
        width: 100%;
        height: 50px;
        background:#4fc08d;
        color: white;
        line-height: 50px;
    }

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
    /*##主*/
    .main{
        width: 1200px;
        height: auto;
        margin: 0 auto;

    }
    /*卖家信息*/
    .layout1-seller-detail{
        margin-top:15px ;
        width: 100%;
        height: 110px;
        /*background:yellow;*/
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: #d6d6d6 1px solid;
    }
    .layout1-icon {
        height: 90px;
        width: 90px;
        border-radius: 50%;
        border: 1px #d6d6d6 solid;
        /*background: #4fc08d;*/
        text-align: center;
        line-height: 90px;
    }
    .layout1-detail{
        height:90px;
        width: 180px;
        /*background: pink;*/
        /*line-height: 50px;*/
    }
    .layout1-detail span{
        display: block;
        margin-top: 15px;
    }
    .layout1-detail span a{
        text-decoration: underline;
    }

    .btn-follow{
        margin-top: 20px;
        display: block;
        width: 150px;
        height: 50px;
        background: #4fc08d;
        color: white;
    }
    /*商品详细图*/
    .layout2-commodity-detail{
        margin-top: 15px;
        width: 100%;
        height: 650px;
        /*background: #d6d6d6;*/
        display: flex;
    }
    .layout2-left{
        width: 600px;
        height: 100%;
        /*background: #4fc08d;*/
        display: flex;
        flex-wrap: wrap;
        /*align-items: center;*/
        justify-content: center;
    }
    .layout2-pic{
        margin-top: 30px;
        width: 400px;
        height: 400px;
        border: #d6d6d6 1px solid;
        /*margin:0 auto;*/
    }
    .layout2-pic img{
        width: 400px;
        height: 400px;
    }
    .layout2-more-pics{
        width: 400px;
        height: 100px;
        border: #d6d6d6 1px solid;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: -75px;
        /*margin: 0 auto;*/
    }
    .layout2-more-pics img{
        height: 70px;
        width: 70px;
        border: #d6d6d6 1px solid;

    }
    .layout2-right{

        height: 100%;
        width: 600px;
        /*background: #d6d6d6;*/
    }
    .layout2-detail-title{
        width: 100%;
        height: 30px;
        border-bottom: #d6d6d6 1px solid;
        /*background: yellow;*/
        display: flex;
        align-items: center;
        margin-top: 20px;
    }
    .layout2-detail-title span{
        font-weight: bold;
        font-size: 24px;
    }
    .layout2-detail-content{
        /*margin-top: 40px;*/
        width: 100%;
        height: 600px;
        /*background: yellow;*/
    }
    .layout2-detail-content >*{
        width: 100%;
        height: 30px;
        /*background: pink;*/
        margin-top: 50px;
        font-size: 20px;
        /*color: #d6d6d6;*/
    }
    .layout2-collect-buy button{
        width: 180px;
        height: 50px;
        background: #4fc08d;
        color: white;
        font-size: 18px;
        margin-left: 50px;
    }

    /*留言板*/
    .layout3-guestbook{
        width: 100%;
        height: 400px;
        margin-top: 15px;
        background: yellow;
        overflow: hidden;
    }
    .layout4-related{
        width: 100%;
        height: 400px;
        margin-top: 15px;
        background: yellow;
    }


</style>