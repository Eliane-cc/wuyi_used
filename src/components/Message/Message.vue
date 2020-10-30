<template>
  <div class="message_row display_animation" v-show="isShow">
    <div class="message_contain">
      <div class="message_box">
        <icon-svg :icon-class="icon" class="icon_svg" :style="{color: iconColor}"/>
        <div>{{message}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Message",
    components: {
    },
    data(){
      return {
        isShow: false,
        message: '',
        icon: 'icon-info-circle-fill',
        iconColor: '#1890FF'
      }
    },
    methods: {
      show(message,iconName,iconColor){
        this.isShow = true;
        this.message = message;
        this.icon = iconName;
        this.iconColor = iconColor;

        setTimeout(() => {
          this.isShow = false;
          this.message = '';
          this.icon = 'icon-info-circle-fill';
          this.iconColor = '#1890FF';
        },2500)
      },

    }
  }
</script>

<style scoped>
  .message_row{
    margin-top: 20px;
    margin-bottom: 12px;
  }
  .message_contain{
    display: inline-block;
    padding: 10px 14px;
    border-radius: 5px;
    box-shadow: 3px 2px 10px #cccccc;
  }
  .message_box{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    font-size: 14px;
    color: #333333;
  }
  .icon_svg{
    margin-right: 5px;
  }
  @keyframes fade-in {
    0% {margin-top: 0px;}
    25% {margin-top: 5px;}
    50% {margin-top: 10px;}
    75% {margin-top: 15px;}
    100% {margin-top: 20px;}
  }
  @-webkit-keyframes fade-in {/*针对webkit内核*/
    0% {margin-top: 0px;}
    25% {margin-top: 5px;}
    50% {margin-top: 10px;}
    75% {margin-top: 15px;}
    100% {margin-top: 20px;}
  }
  .display_animation{
    animation: fade-in;
    animation-duration: 0.4s;
    -webkit-animation:fade-in 0.4s;/*针对webkit内核*/
  }
</style>