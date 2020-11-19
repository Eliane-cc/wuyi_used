<template>
  <div>
    <div class="carousel_contain">
      <!--  轮播图    -->
      <div class="contain">
        <div class="img_contain">
          <div class="img_row">
            <div class="img_item" :style="{'--i': imgList[0]}">
              <img src="@/assets/img/pic8.png" class="img">
            </div>
            <div class="img_item" :style="{'--i': imgList[1]}">
              <img src="@/assets/img/pic7.png" class="img">
            </div>
            <div class="img_item" :style="{'--i': imgList[2]}">
              <img src="@/assets/img/pic6.png" class="img">
            </div>
            <div class="img_item" :style="{'--i': imgList[3]}">
              <img src="@/assets/img/pic5.png" class="img">
            </div>
            <div class="img_item" :style="{'--i': imgList[4]}">
              <img src="@/assets/img/pic4.jpg" class="img">
            </div>
            <div class="img_item" :style="{'--i': imgList[5]}">
              <img src="@/assets/img/pic3.png" class="img">
            </div>
            <div class="img_item" :style="{'--i': imgList[6]}">
              <img src="@/assets/img/pic2.png" class="img">
            </div>
            <div class="img_item" :style="{'--i': imgList[7]}">
              <img src="@/assets/img/pic1.png" class="img current">
            </div>
          </div>
        </div>
      </div>
      <!--  轮播图聚焦框    -->
      <div class="carousel_list">
        <div class="row">
          <div class="column top_left"></div>
          <div class="column top_right"></div>
        </div>
        <div class="row">
          <div class="column" @click="preImg">
            <icon-svg icon-class="icon-left" class="icon_svg" icon-size="30px"></icon-svg>
          </div>
          <div class="column icon_right" @click="nextImg">
            <icon-svg icon-class="icon-right" class="icon_svg" icon-size="30px"></icon-svg>
          </div>
        </div>
        <div class="row">
          <div class="column bottom_left"></div>
          <div class="column bottom_right"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Carousel.vue",
    data(){
      return {
        imgList:[1,2,3,4,5,6,7,8],
        timer: ''
      }
    },
    mounted(){
      this.timer = setInterval(this.nextImg,2000)
    },
    methods: {
      preImg(){
        let temp = this.imgList[0];
        for (let i=0;i<this.imgList.length-1;i++){
          let num = this.imgList[i+1]
          this.$set(this.imgList, i, num)
        }
        this.$set(this.imgList, 7, temp)
      },
      nextImg(){
        let temp = this.imgList[7];
        for (let i=this.imgList.length-1;i>0;i--){
          let num = this.imgList[i-1]
          this.$set(this.imgList, i, num)
        }
        this.$set(this.imgList, 0, temp)
      }
    },
  }
</script>

<style scoped>
  .carousel_contain{
    position: absolute;
    background-color: rgba(79,192,141,0.7);
    width: 100%;
    height: 500px;
    text-align: center;
  }
  .carousel_list{
    background-color: #ffffff;
    width: 1200px;
    height: 450px;
    margin: auto;
    margin-top: 14px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .column{
    width: 20px;
    height: 20px;
  }
  .top_right{
    border-top: 2px solid #349B5E;
    border-right: 2px solid #349B5E;
  }
  .top_left{
    border-top: 2px solid #349B5E;
    border-left: 2px solid #349B5E;
  }
  .bottom_right{
    border-bottom: 2px solid #349B5E;
    border-right: 2px solid #349B5E;
  }
  .bottom_left{
    border-bottom: 2px solid #349B5E;
    border-left: 2px solid #349B5E;
  }
  .contain{
    position: absolute;
    width: 100%;
    top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index: 100;
  }
  .img_contain{
    width: 1080px;
    height: 400px;
  }
  .icon_svg{
    position: absolute;
    color: rgba(79,192,141,0.7);
    cursor: pointer;
    z-index: 1000;
  }
  .icon_svg:hover{
    color: #349B5E;
  }
  .icon_right{
    padding-right: 28px;
  }
  .img{
    width: 200px;
    border-radius: 10px;
  }
  .img_row{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    perspective: 900px;
    transform-style: preserve-3d;
  }
  .img_item{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: center;
    transform: rotateY(calc(45deg * var(--i))) translateZ(420px);
    z-index: -1;
  }
</style>