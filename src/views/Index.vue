<template>
  <div class="contain">
    <carousel></carousel>
    <featured-products></featured-products>
    <guess-favourite></guess-favourite>
    <direction></direction>
    <!-- 页尾   -->
    <div class="web_footer">
      <web-footer></web-footer>
    </div>
  </div>
</template>

<script>
  import Carousel from "@/components/Index/Carousel";
  import FeaturedProducts from "@/components/Index/FeaturedProducts";
  import GuessFavourite from "@/components/Index/GuessFavourite";
  import Direction from "@/components/Index/Direction";
  import WebFooter from "@/components/WebFooter";

  export default {
    name: "Index",
    components: {
      Carousel,
      FeaturedProducts,
      GuessFavourite,
      Direction,
      WebFooter
    }
  }
</script>

<style scoped>
  .contain{

  }
  .web_footer{
    position: relative;
    top: 850px;
  }
</style>