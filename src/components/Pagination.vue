<template>
  <div class="page_footer">
    <div class="flex_row">
      <div class="flex_row icon pre" @click="prePage">
        <icon-svg icon-class="icon-left" class="icon_img" icon-size="15px"/>
      </div>
      <div class="flex_row pages">
        <div v-for="n of total" :class="{flex_row: true, page: true, select: n==currentPage ? true : false}" @click="changePage(n)">
          {{n}}
        </div>
      </div>
      <div class="flex_row icon last" @click="nextPage">
        <icon-svg icon-class="icon-right" class="icon_img" icon-size="15px"/>
      </div>
      <div class="flex_row page_to">
        <div class="to">到第</div>
        <input type="number" class="input_page" v-model="page"/>
        <div class="to">页</div>
        <div class="sure" @click="toPage">确定</div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Pagination.vue",
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      totalCommodity: {
        type: Number,
        required: true
      }
    },
    data(){
      return{
        total: 0,
        page: ''
      }
    },
    created(){
      this.dataLoad()
    },
    // created() {
    //   this.total = Math.ceil(parseInt(this.totalCommodity.length)/12)
    // },
    watch: {
      "totalCommodity"(newVal, oldVal) {
        this.total = Math.ceil(parseInt(newVal)/12)
      }
    },
    methods:{
      dataLoad(){
        this.total = Math.ceil(parseInt(this.totalCommodity)/12)
      },
      changePage(index){
        this.currentPage = index
        this.$emit('changep',this.currentPage)
      },
      prePage(){
        if (this.currentPage != 1) {
          this.currentPage = this.currentPage - 1
          this.$emit('changep',this.currentPage)
        }
      },
      nextPage(){
        if (this.currentPage != this.total) {
          this.currentPage = this.currentPage + 1
          this.$emit('changep',this.currentPage)
        }
      },
      toPage(){
        if(this.page < this.total){
          this.currentPage = this.page
          this.$emit('changep',this.currentPage)
        }else{
          this.$message.show("对不起，您搜索的页面不存在", 'icon-info-circle-fill', '#42B782');
        }
      }
    }
  }
</script>

<style scoped>
  .flex_row{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .page_footer{
    margin: 27px 0;
    width:1200px;
    height:40px;
    font-size:14px;
    color: #444444;
  }
  .icon_img{
    color: #444444;
    cursor: pointer;
  }
  .icon_img:hover{
    color: #349B5E;
  }
  .pages{
    width: 400px;
    align-items: center;
    margin-left: 25px;
  }
  .page{
    width: 30px;
    height: 30px;
    text-align: center;
    margin-right: 20px;
    align-items: center;
    border-radius: 3px;
    cursor: pointer;
  }
  .page:hover{
    color: #349B5E;
  }
  .icon{
    align-items: center;
  }
  .select{
    background-color: #349B5E;
    color: #ffffff;
  }
  .select:hover{
    color: #ffffff;
  }
  .input_page{
    width: 40px;
    height: 26px;
    margin: 0px 12px;
    border: 1px solid #349B5E;
    border-radius: 4px;
  }
  .page_to{
    align-items: center;
    margin-left: 40px;
    color: #444444;
  }
  .sure{
    background-color: #349B5E;
    padding: 6px 12px;
    border-radius: 4px;
    color: #ffffff;
    font-size: 14px;
    margin-left: 15px;
    cursor: pointer;
  }
</style>