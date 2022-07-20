<!-- 浮生四梦(风花雪月) -->
<template>
    <div class="BlogContainer">
        <userinfo></userinfo>
        <blogs></blogs>
        <div class="Foot">

        </div>
        <div class="Rss">

        </div>
    </div>
</template>

<script>
import userinfo from "@/components/BlogList/UserInfo.vue"
import blogs from "@/components/BlogList/BlogList.vue"
export default {
    name : "bloglist",
    components : {userinfo, blogs},
    setup() {
        
    },
}
</script>

<style lang="less" scoped>
    .BlogContainer {
        width: 40%;
        padding: 0 30%;
    }
</style>