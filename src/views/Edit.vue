<template>
<div style="background: #efefef;">
    <div class="header">
        <img src="@/assets/img/images/edit.png" alt="" class="header_img">
        EDIT GOODS
    </div>

    <form action="post" id="form1">
        <div class="content">
            <div class="text">
                <textarea  cols="80" rows="5" placeholder="请输入您的商品信息"></textarea>
                <div>
                    <a href="#" class="a"><input type="file"  class="add_img" ></a>
                    <div class="radio">
                        <input type="radio" name="select" value="recircle">官方回收
                        <input type="radio" name="select" value="sale">自己卖
                        <input type="radio" name="select" value="donate">捐赠
                    </div>
                </div>
            </div>
            <div class="descorate">
                <ul style="list-style-type:none" class="list">
                    <li> <img src="@/assets/img/images/price.png" alt="" class="img_icon"><span>价格</span><input type="text" class="input_price"></li>
                    <li><img src="@/assets/img/images/time.png" alt="" class="img_icon"><span>购买时间</span><input type="date" class="date"></li>
                    <li><img src="@/assets/img/images/classify.png" alt="" class="img_icon"><span>分类</span>
                        <select name="分类">
                            <option value="option1">数码产品</option>
                            <option value="option2">衣服饰品</option>
                            <option value="option3">食品生疏</option>
                            <option value="option4">衣服饰品</option>
                            <option value="option5">书籍</option>
                            <option value="option6">化妆品</option>
                            <option value="option7">其他</option>
                        </select>
                    </li><li><img src="@/assets/img/images/howold.png" alt="" class="img_icon"><span>新旧程度</span><input type="text" class="input_howold"></li>
                </ul>
            </div>
            <button type="submit" form="form1" value="Submit" class="btn">发布</button>
        </div>
    </form>
    <div>  <web-footer></web-footer></div>
</div>

</template>

<script>
    import WebFooter from "../components/WebFooter";
    export default {
        name: "Edit",
        components: {
            WebFooter
        },
    }


</script>

<style scoped>

    .header{
        width: 100%;
        height: 80px;
        background:#349B5E;
        color: white;
        font-family: Arial;
        color: #EEEE00;
    }
    .header_img{
        display: inline-block;
        margin-left: 20px;
        margin-top: 15px;
        margin-right: 20px;
        width: 45px;
        height: 45px;
    }

    .header button:focus{
        border: none;
        outline: none;
    }
    .content{
        border-radius: 20px;
        margin: 40px auto;
        width: 700px;
        height: 600px;
        background: #FFFFFF;
        /*box-shadow:1px 2px 3px 4px #E6E6E6 ;*/
    }
    .text{
        height: 300px;
        border-bottom: 1px dashed #BDBDBD;
    }
    .a input{

        opacity: 0;
        display: inline-block;
        width: 60px;
        height: 60px;

    }
    .a{
        margin-left: 15px;
        margin-top: 130px;
        display: inline-block;
        background: url("../assets/img/images/add_img.png");
        background-size:100% 100%;
        width: 60px;
        height: 60px;
        overflow: hidden;
        cursor: pointer;
    }
    textarea{
        display: block;
        font-size: 16px;
        outline: none;
        border-style: none;
        margin: 0 auto;
        padding: 4px 0px;
    }
    .price{
        width: 700px;
        height: 30px;
        font-size: 13px;
        line-height: 10px;
        color: #BDBDBD;
    }
    .radio{
        display: inline-block;
        margin-left: 300px;
        color: #349B5E;
        margin-bottom: 10px;
    }
    .img_icon{
        display: inline-block;
        width: 25px;
        height: 25px;
        margin-right: 15px;
    }
    .list{
        margin-left:-30px;
        font-size: 15px;
        margin-bottom: 50px;
    }
    li{
        list-sytle:none;
        height: 35px;
        color: #BDBDBD;
        /*border-top: 1px dashed #BDBDBD;*/
        padding-top: 5px;
        margin-bottom: 5px;
    }
    select{
        color: #6E6E6E;
        height: 30px;
        width: 250px;
        margin-left: 38px;
        border: 1px solid #E6E6E6;
        border-radius: 5px;
    }
    .date{
        color: #6E6E6E;
        height: 30px;
        width: 240px;
        margin-left: 15px;
    }
    .input_howold{
        height: 30px;
        width: 240px;
        margin-left: 15px;
    }
    .input_price{

        height: 30px;
        width: 240px;
        margin-left: 45px;
    }
    input{

        border: 1px solid #E6E6E6;
        border-radius: 5px;
    }
    input:focus{
        outline: none;
        border: 1px solid #E6E6E6;
    }
    .btn{
        display: block;
        margin: 0 auto;
        outline: none;
        width: 200px;
        height: 40px;
        font-size: 18px;
        color: white;
        background: #349B5E;
        border-radius: 20px;
        border: 1px solid #FAFAFA;
    }

</style>