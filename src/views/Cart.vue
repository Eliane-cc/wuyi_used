<template>
    <div>
        <div class="header">
        <img src="@/assets/img/images/cart.png" alt="">
       SHOPPING CART
    </div>
        <table>
            <thead>
            <tr>
                <th></th>
                <th>商品</th>
                <th>名称</th>
                <th>数量</th>
                <th>单价<span>（元）</span></th>
                <th>金额<span>（元）</span></th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><input type="checkbox" ></td>
                <td>
                    <img src="@/assets/img/images/goods1.jpg" />
                </td>
                <td><p>花西子定妆散粉</p></td>
                <td>
                    <span class="add"><img src="@/assets/img/images/jiahao.png" alt=""></span>
                    <span class="num">1</span>
                    <span class="dec"><img src="@/assets/img/images/jian.png" alt=""></span>
                </td>
                <td class="per">￥<span>190</span></td>
                <td class="money">￥<span>190</span></td>
                <td><a class="del"><img src="@/assets/img/images/shanchu.png" alt=""></a></td>
            </tr>
            <tr>
                <td><input type="checkbox"></td>
                <td>
                    <img src="@/assets/img/images/goods2.jpg"/>

                </td>
                <td> <p>米色毛呢外套</p></td>
                <td>
                    <span class="add"><img src="@/assets/img/images/jiahao.png" alt=""></span>
                    <span class="num">1</span>
                    <span class="dec"><img src="@/assets/img/images/jian.png" alt=""></span>
                </td>
                <td class="per">￥<span>100</span></td>
                <td class="money">￥<span>100</span></td>
                <td><a class="del"><img src="@/assets/img/images/shanchu.png" alt=""></a></td>
            </tr>
            <tr>
                <td><input type="checkbox"></td>
                <td>
                    <img src="@/assets/img/images/goods3.jpg" />

                </td>
                <td> <p>小度智能音箱</p></td>
                <td>
                    <span class="add"><img src="@/assets/img/images/jiahao.png" alt=""></span>
                    <span class="num">1</span>
                    <span class="dec"><img src="@/assets/img/images/jian.png" alt=""></span>
                </td>
                <td class="per">￥<span>200</span></td>
                <td class="money">￥<span>200</span></td>
                <td><a class="del"><img src="@/assets/img/images/shanchu.png" alt=""></a></td>
            </tr>
            <tr>
                <td><input type="checkbox" ></td>
                <td>
                    <img src="@/assets/img/images/goods4.jpg" />

                </td>
                <td> <p>宜家大鲨鱼玩偶</p></td>
                <td>
                    <span class="add"><img src="@/assets/img/images/jiahao.png" alt=""></span>
                    <span class="num">1</span>
                    <span class="dec"><img src="@/assets/img/images/jian.png" alt=""></span>
                </td>
                <td class="per">￥<span>20</span></td>
                <td class="money">￥<span>20</span></td>
                <td><a class="del"><img src="@/assets/img/images/shanchu.png" alt=""></a></td>
            </tr>
            <tr>
                <td><input type="checkbox" ></td>
                <td>
                    <img src="@/assets/img/images/goods5.jpg" />

                </td>
                <td> <p>学生活性页本子</p></td>
                <td>
                    <span class="add"><img src="@/assets/img/images/jiahao.png" alt=""></span>
                    <span class="num">1</span>
                    <span class="dec"><img src="@/assets/img/images/jian.png" alt=""></span>
                </td>
                <td class="per">￥<span>9.9</span></td>
                <td class="money">￥<span>9.9</span></td>
                <td><a class="del"><img src="@/assets/img/images/shanchu.png" alt=""></a></td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td></td>
                <td>
                    已选：<span class="choosen">0</span>件 

                </td>

                <td> 共<span class="total">0</span>元</td>
                <td></td>
                <td></td>
                <td></td>
                <td><button class="sure" @click='goTo()'>购买</button></td>
            </tr>
            </tfoot>
        </table>
        <div>  <web-footer></web-footer></div>

    </div>
</template>

<script>
    import WebFooter from "../components/WebFooter";
    export default {
        name: "Cart",
        components: {
            WebFooter
        },
        methods: {


            goTo() {
                //直接跳转
                this.$router.push('/afford');
            }
        }

    }

    window.onload = function () {
        let oListNumber = document.getElementsByClassName('add').length;
        let oAdds = document.getElementsByClassName('add');
        let oDecs = document.getElementsByClassName('dec');
        let oDels = document.getElementsByClassName('del');
        let oInputs = document.getElementsByTagName('input');
        let oAllChecked = false ;//全选
        let othercheckbox = 0 ;//除了全选以外的其他checkbox

        changeMoney();

        // checkbox点击事件
        for (let i = 0; i < oInputs.length; i++) {
            oInputs[i].onclick = function () {
                // 判断除了全选以外的checkbox
                if (i != 0) {
                    if (this.checked == true) {
                        othercheckbox++;
                    } else {
                        othercheckbox--;
                    }
                }
                //判断是否全选
                if (othercheckbox == oListNumber) {
                    oInputs[0].checked = true;
                } else {
                    oInputs[0].checked = false;
                }
                //判断是否选择了全选checkbox
                if (i == 0) {
                    oAllChecked = !oAllChecked;
                    for (let j = 0; j < oInputs.length; j++) {
                        oInputs[j].checked = oAllChecked;
                    }
                    if (oAllChecked) {
                        othercheckbox = oListNumber;
                    } else {
                        othercheckbox = 0;
                    }
                }
                changeTotal();
            }
        }
        // add事件
        for (let i = 0; i < oAdds.length; i++) {
            oAdds[i].onclick = function () {
                this.nextElementSibling.innerText =
                    parseInt(this.nextElementSibling.innerText) + 1;
                changeMoney();
                changeTotal();
            }
        }

        // dec事件
        for (let i = 0; i < oDecs.length; i++) {
            oDecs[i].onclick = function () {
                if (this.previousElementSibling.innerText != '0') {
                    this.previousElementSibling.innerText =
                        parseInt(this.previousElementSibling.innerText) - 1;
                }
                changeMoney();
                changeTotal();
            }
        }

        // add事件和dec事件伴随的金额改变事件
        function changeMoney() {
            let oListNumber = document.getElementsByClassName('add').length;
            let oNums = document.getElementsByClassName('num');
            let oMoneys = document.getElementsByClassName('money');
            let oPers = document.getElementsByClassName('per');
            let oPerSpan = [] ;//单价
            let oMoneySpan = []; //金额
            for (let i = 0; i < oListNumber; i++) {
                oPerSpan[i] = oPers[i].getElementsByTagName('span')[0].innerText;
                oMoneySpan[i] = oMoneys[i].getElementsByTagName('span')[0];
                oMoneySpan[i].innerText =
                    // parseInt(oNums[i].innerText) * parseInt(oPerSpan[i])
                    parseFloat(oNums[i].innerText) * parseFloat(oPerSpan[i]);
            }
        }

        // del事件
        for (let i = 0; i < oDels.length; i++) {
            oDels[i].onclick = function () {
                let thisdom = this.parentNode.parentNode;
                let tbody = thisdom.parentNode;
                tbody.removeChild(thisdom);
                changeTotal();
            }
        }


        // 总数量 总金额
        function changeTotal() {
            let oNums = document.getElementsByClassName('num');
            let oInputs = document.getElementsByTagName('input');
            let oMoneys = document.getElementsByClassName('money');
            let oChoosen = document.getElementsByClassName('choosen')[0];
            let oTotal = document.getElementsByClassName('total')[0];
            let sumNUM = 0;
            let sumTOTAL = 0;

            for (let i = 0; i < oInputs.length; i++) {
                if (oInputs[i].checked) {
                    sumNUM = parseFloat(oNums[i - 1].innerText) + parseFloat(sumNUM);
                    sumTOTAL =
                        parseFloat(
                            oMoneys[i - 1].getElementsByTagName('span')[0].innerText
                        ) + parseFloat(sumTOTAL);
                }
            }

            oChoosen.innerText = sumNUM;
            oTotal.innerText = sumTOTAL;
        }
    }


</script>

<style scoped>


    * {
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: 16px;
        font-family: 'arial';
        font-weight: normal;
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
        width: 50px;
        height: 50px;
    }
    table {
        width: 1020px;
        margin: 0 auto;
        border: 1px solid gray;
        margin-top: 40px;
        border-collapse: collapse;
        text-align: center;
    }
    table tr {
        height: 150px;
        /*line-height: 100px;*/
    }
    table th:nth-child(1) {
        width: 50px;
    }
    table th:nth-child(2) {
        width: 120px;
    }
    table th:nth-child(3) {
        width: 250px;
    }
    table th:nth-child(4) {
        width: 180px;
    }

    table th:nth-child(5),
    table th:nth-child(6),
    table th:nth-child(7) {
        width: 140px;
    }

    thead {
        background: #FE9A2E;
        color: white;
    }
    thead tr,
    tfoot tr {
        height: 40px;
        line-height: 40px;
    }

    tbody tr {
        border-bottom: 1px solid black;
    }

    table img {
        float: left;
        width: 100px;
        height: 100px;
        margin-left: 10px;
    }
    /*table input[type='checkbox'] {*/
    /*    width: 32px;*/
    /*    height: 32px;*/
    /*    -webkit-appearance: none;*/
    /*    background: url(../images/复选框-未选择.png) no-repeat center center;*/
    /*    vertical-align: middle;*/
    /*}*/
    /*input[type='checkbox']:checked {*/
    /*    background: url(../images/复选框-选中.png) no-repeat center center;*/
    /*}*/

    table .add,
    table .dec,
    table .del {
        display: inline-block;
        width: 20px;
        height: 20px;
        cursor: pointer;
        /*background: #FA5858;*/
        /*border: 1px solid #FA5858;*/
    }
    table .add img{
        /*background: url(../images/jiahao.png) repeat center center;*/
        display: inline-block;
        width: 20px;
        height: 20px;
    }
    table .dec img{
        /*background: url(../images/jian.png) no-repeat center center;*/
        display: inline-block;
        width: 20px;
        height: 20px;
    }
    table .del img{
        display: inline-block;
        width: 20px;
        height: 20px;
    }
    table .num {
        display: inline-block;
        width: 20px;
        height: 20px;
        /*background: #585858;*/
        margin-left: 10px;
        margin-right: -10px;
        font-size: 18px;

    }
    table .money,
    table .total {
        color: red;
    }
    /*table .choosen {*/
    /*    color: #3083ff;*/
    /*}*/
    table .sure {
        display: inline-block;
        border: 1px solid #FE9A2E;
        outline: none;
        cursor: pointer;
        width: 100px;
        height: 38px;
        color: #FE9A2E;
        border-radius: 5px;
        margin: 10px;
        background: none;
    }
    table .sure:hover{
        border: none;
        outline: none;
        background: #FE9A2E;
        color: #FAFAFA;

    }
    .footer{
        width: 100%;
        height: 350px;
        background:#F2F2F2;
        margin-top: 50px;
    }

</style>