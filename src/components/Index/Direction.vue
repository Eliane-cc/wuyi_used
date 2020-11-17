<template>
  <div class="direction">
    <div class="direction_item">
      <div v-for="(item,index) in directionList" class="direction_list">
        <div class="direction_header">
          <icon-svg :icon-class="item.iconClass" class="icon_svg" icon-size="28px"></icon-svg>
          <div class="direction_title">{{item.title}}</div>
        </div>
        <div class="direction_remark">
          <div class="remark" v-for="(remarkItem, remarkIndex) in item.remark">{{remarkItem.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Direction.vue",
    data(){
      return{
        directionList: [
          {
            iconClass: 'icon-insurance-fill',
            title: "消费者保障",
            remark: [
              {
                content: '保障范围'
              },
              {
                content: '退货退款流程'
              },
              {
                content: '服务中心'
              },
              {
                content: '更多特色服务'
              },
            ]
          },
          {
            iconClass: 'icon-question',
            title: "新手上路",
            remark: [
              {
                content: '新手专区'
              },
              {
                content: '消费警示'
              },
              {
                content: '交易安全'
              },
              {
                content: '24小时在线帮助'
              },
              {
                content: '免费开店'
              },
            ]
          },
          {
            iconClass: 'icon-accountbook-fill',
            title: "付款方式",
            remark: [
              {
                content: '快捷支付'
              },
              {
                content: '信用卡'
              },
              {
                content: '余额宝'
              },
              {
                content: '蚂蚁花呗'
              },
              {
                content: '货到付款'
              },
            ]
          },
          {
            iconClass: 'icon-verified',
            title: "本站特色",
            remark: [
              {
                content: '页面美观'
              },
              {
                content: '功能齐全'
              },
              {
                content: '客服热心'
              },
              {
                content: '更多特色服务'
              },
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .direction{
    background-color: #ffffff;
    position: absolute;
    top: 2210px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: center;
  }
  .direction_item{
    background-color: #efefef ;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    height: 160px;
    margin-top: 30px;
  }
  .direction_header{
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    width: 230px;
  }
  .direction_remark{
    width: 230px;
    font-size: 13px;
    color: #a7a7a7;
    margin-top: 10px;
  }
  .remark{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
  }
  .direction_list{
    margin-left: 30px;
  }
  .icon_svg{
    color: #888888;
  }
  .direction_title{
    font-size: 13px;
    font-weight: 600;
    color: #444444;
    margin-left: 8px;
  }
</style>