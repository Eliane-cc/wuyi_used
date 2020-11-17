<template>
  <div class="contain">
    <carousel></carousel>
    <featured-products></featured-products>
    <guess-favourite></guess-favourite>
  </div>
</template>

<script>
  import Carousel from "@/components/Index/Carousel";
  import FeaturedProducts from "@/components/Index/FeaturedProducts";
  import GuessFavourite from "@/components/Index/GuessFavourite";
  export default {
    name: "Index",
    components: {
      Carousel,
      FeaturedProducts,
      GuessFavourite
    }
  }
</script>

<style scoped>
  .contain{

  }
</style>