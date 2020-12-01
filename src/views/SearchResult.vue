<template>
  <div>
    <result-list :shopping-list.sync="shoppingList"></result-list>
    <web-footer class="footer"></web-footer>
  </div>
</template>

<script>
  import ResultList from "../components/Mall/ResultList";
  import WebFooter from "../components/WebFooter";
  export default {
    name: "SearchResult.vue",
    data(){
      return {
        shoppingList: []
      }
    },
    components: {
      ResultList,
      WebFooter
    },
    created() {
      this.shoppingList = this.$route.query.result
      console.log("this.shopping",this.shoppingList,this.$route.query.result)
    }
  }
</script>

<style scoped>

</style>