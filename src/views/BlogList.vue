<!-- 浮生四梦(风花雪月) -->
<template>
    <div class="BlogContainer">
        <userinfo></userinfo>
        <blogs></blogs>
        <div class="Foot">

        </div>
        <page :pageNo="1" :count="100" :showCount="10"></page>
        <div class="Rss">

        </div>
    </div>
</template>

<script>
import userinfo from "@/components/BlogList/UserInfo.vue"
import blogs from "@/components/BlogList/BlogList.vue"
import page from '@/components/Utils/Page.vue';
export default {
    name : "bloglist",
    components : {userinfo, blogs,page},
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