<template>
  <div class="contain">
    <carousel></carousel>
    <featured-products></featured-products>
    <guess-favourite></guess-favourite>
    <direction></direction>
  </div>
</template>

<script>
  import Carousel from "@/components/Index/Carousel";
  import FeaturedProducts from "@/components/Index/FeaturedProducts";
  import GuessFavourite from "@/components/Index/GuessFavourite";
  import Direction from "@/components/Index/Direction";
  export default {
    name: "Index",
    components: {
      Carousel,
      FeaturedProducts,
      GuessFavourite,
      Direction
    }
  }
</script>

<style scoped>
  .contain{

  }
</style>