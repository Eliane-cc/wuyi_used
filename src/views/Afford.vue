<template>
    <div>
        <div class="a">
            <img src="@/assets/img/images/money.jpg" alt=""></div>

        <div>  <web-footer></web-footer></div>
    </div>

</template>

<script>
    import WebFooter from "../components/WebFooter";
    export default {
        name: "Afford",
        components: {
            WebFooter
        },
    }

</script>

<style scoped>
.a{
    display: block;
    width: 400px;
    height: 500px;
    margin: 40px auto;
}
    img{
        width: 400px;
        height: 500px;
    }
</style>