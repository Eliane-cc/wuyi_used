<template>
    <div>
        <div>
            <router-link to='/record'>
            <button>购物记录</button>
            </router-link>
        </div>
        <div>
            <router-link to='/publish'>
            <button>我发布的</button>
            </router-link>
        </div>
        <div>
            <router-link to='/collect_goods'>
                <button>收藏夹</button>
            </router-link>
        </div>
        <div><web-footer></web-footer></div>
    </div>
</template>

<script>
    import WebFooter from "../components/WebFooter";
    export default {
        name: "Accountinfo",
        component: {
            WebFooter
        },
    }
</script>

<style scoped>

</style>