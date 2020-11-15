<template>
  <div class="nav_item nav_list"  @click="nav" :class="{active: isActive}">
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavItem",
    props: {
      path: String
    },
    data(){
      return {

      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods: {
      nav(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .nav_list:hover{
    color: #349B5E;
    /*border-bottom: 4px solid #349B5E;*/
  }
  .active{
    color: #349B5E;
    /*border-bottom: 4px solid #349B5E;*/
  }

</style>