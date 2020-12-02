<template>
  <div class="mall">
    <div class="mall_filter">
      <div class="row sort condition">
        <div class="title">类别：</div>
        <div class="item_row">
          <div v-for="(item,index) in sortList" :class="{list: true, select: conditionList[0].text==item.name ? true : false}" @click="filterCommoditys(item.name,index-1,'sort')">{{item.name}}</div>
        </div>
      </div>
      <div class="row price">
        <div class="title">价格：</div>
        <div class="item_row">
          <div v-for="(item,index) in priceList" :class="{list: true, select: conditionList[1].text==item.name ? true : false}" @click="filterCommoditys(item.name,index-1,'price')">{{item.name}}</div>
        </div>
        <div class="price_range">
          <input type="number" class="input_price" v-model="number1">-
          <input type="number" class="input_price price_range_right" v-model="number2">元
          <button type="submit" class="certain" @click="confirm">确定</button>
        </div>
      </div>
      <div class="row extent">
        <div class="title">新旧程度：</div>
        <div class="item_row">
          <div v-for="(item,index) in extentList" :class="{list: true, select: conditionList[2].text==item.name ? true : false}" @click="filterCommoditys(item.name,index-1,'extent')">{{item.name}}</div>
        </div>
      </div>
      <div class="row" v-show="conditionList[0].text!='不限'|| conditionList[1].text!='不限'|| conditionList[2].text!='不限'">
        <div class="title">筛选条件：</div>
        <div class="item_row">
          <div v-for="(item,index) in conditionList" class="list" v-if="item.text!='不限'">
            <div class="selectedCon" @click="deleteCondition(item.text)">
              {{item.text}}
              <icon-svg icon-class="icon-close" class="icon_close" icon-size="15px"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <product-list :shopping-list.sync="shoppingList"></product-list>
    <web-footer class="footer"></web-footer>
  </div>
</template>

<script>
  import ProductList from "../components/Mall/ProductList";
  import WebFooter from "../components/WebFooter";
  import {getCommodityList,filterCommodity} from "../api";
  export default {
    name: "Mall",
    components: {
      ProductList,
      WebFooter
    },
    data(){
      return{
        sortList: [
          {
            name: '不限'
          },
          {
            name: '二手电脑'
          },
          {
            name: '二手手机'
          },
          {
            name: '二手生活'
          },
          {
            name: '二手数码'
          },
          {
            name: '二手家具'
          },
          {
            name: '二手衣饰'
          },
          {
            name: '二手文具'
          },
          {
            name: '网游/虚拟物品'
          },
          {
            name: '其它'
          }
        ],
        priceList: [
          {
            name: '不限'
          },
          {
            name: '10元以下'
          },
          {
            name: '20元以下'
          },
          {
            name: '50元以下'
          },
          {
            name: '100元以下'
          },
          {
            name: '100-200元'
          },
          {
            name: '200-300元'
          }
        ],
        extentList: [
          {
            name: '不限'
          },
          {
            name: '全新'
          },
          {
            name: '95成新'
          },
          {
            name: '9成新'
          },
          {
            name: '8成新'
          },
          {
            name: '7成新及以下'
          }
        ],
        conditionList: [
          {
            text: '不限',
            key: -1
          },
          {
            text: '不限',
            key: -1
          },
          {
            text: '不限',
            key: -1
          },
        ],
        number1: '',
        number2: '',
        shoppingList: []
      }
    },
    created() {
      this.getDataList()
    },
    methods: {
      getDataList(){
        this.shoppingList = [];
        getCommodityList().then(res => {
          this.shoppingList = res
        })
      },
      filterCommoditys(item,index,value){
        if (value == "sort"){
          //筛选分类
          this.$set(this.conditionList,0,{text: item,key: index})
        }else if(value == "price"){
          //筛选价格
          this.$set(this.conditionList,1,{text: item,key: index})
        }else if(value == "extent"){
          //筛选新旧程度
          this.$set(this.conditionList,2,{text: item,key: index})
        }
        let params = new URLSearchParams();
        params.append("sort", this.conditionList[0].key);
        params.append("extent", this.conditionList[2].key);
        let price;
        let priceText = this.conditionList[1].text;
        if(priceText == "不限"){
          price = "-1"
        }else if (priceText == "10元以下"){
          price = "0-10";
        }else if(priceText == "20元以下"){
          price = "0-20";
        }else if(priceText == "50元以下"){
          price = "0-50";
        }else if(priceText == "100元以下"){
          price = "0-100";
        }else{
          price = priceText.substring(0,priceText.length-1);
        }
        params.append("price", price);
        console.log("price",price)
        filterCommodity(params).then(res => {
          this.shoppingList = [];
          this.shoppingList = res
        })
      },
      confirm(){
        if (this.number2 && this.number1){
          this.$set(this.conditionList,1,{text: this.number1+"-"+this.number2+"元",key: -1})
          this.filterCommoditys(this.number1+"-"+this.number2+"元",-1,"qita")
          this.number2=''
          this.number1=''
        }else {
          this.$message.show("请输入要搜索的价格范围", 'icon-info-circle-fill', '#42B782');
        }
      },
      deleteCondition(name){
        let num = ''
        this.conditionList.forEach((item,index) => {
          if(item.text == name){
            num = index
          }
        })
        this.$set(this.conditionList,num,{text: '不限',key: -1})
      }
    }
  }
</script>

<style scoped>
  .mall{
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mall_filter{
    width: 1200px;
    background-color: #ffffff;
    margin-top: 20px;
    border: 1px solid #efefef;
    padding: 10px;
    box-sizing: border-box;
  }
  .row{
    display: flex;
    flex-direction: row;
    justify-content: left;
    font-size: 14px;
    border-top: 1px dashed #bbbbbb;
    padding: 15px;
  }
  .item_row{
    display: flex;
    flex-direction: row;
    align-content: center;
    color: #444444;
  }
  .list{
    margin-right: 20px;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
    vertical-align: middle;
  }
  .list:hover{
    color: #349B5E;
  }
  .title{
    color: #999999;
    margin-right: 20px;
    margin-top: 5px;
  }
  .condition{
    border-top: none;
  }
  .price_range{
    font-size: 14px;
    color: #999999;
  }
  .price_range_right{
    margin-left: 8px;
  }
  .certain{
    display: inline-block;
    width: 45px;
    height: 27px;
    background-color: #349B5E;
    border: none;
    border-radius: 3px;
    color: #ffffff;
    margin-left: 20px;
    cursor: pointer;
    outline: none;
  }
  .certain:hover{
    background-color: rgba(52,155,94,0.9);
  }
  .input_price{
    display: inline-block;
    width: 45px;
    height: 24px;
    border: 1px solid #349B5E;
    border-radius: 4px;
    margin-right: 8px;
    color: #444444;
  }
  .selectedCon{
    border: 1px solid #349B5E;
    border-radius: 3px;
    padding: 3px;
    cursor: auto;
  }
  .icon_close{
    cursor: pointer;
  }
  .select{
    background-color: #349B5E;
    color: #ffffff;
    cursor: auto;
  }
  .select:hover{
    color: #ffffff;
  }
  .footer{
    /*top: 400px;*/
  }
</style>