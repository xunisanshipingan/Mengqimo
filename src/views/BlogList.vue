<!-- 浮生四梦(风花雪月) -->
<template>
    <div class="BlogContainer">
        <userinfo></userinfo>
        <blogs :pageNo="currentPage" :pageSize="10"></blogs>
        <page :pageNo="currentPage" :total="100" :pageSize="10"></page>
        <div class="Rss">

        </div>
    </div>
</template>

<script setup>
import userinfo from "@/components/BlogList/UserInfo.vue"
import blogs from "@/components/BlogList/BlogList.vue"
import page from '@/components/Utils/Page.vue'
import { ref } from "@vue/reactivity"
const currentPage = ref(1)
const total = ref(0)
</script>

<style lang="less" scoped>
    .BlogContainer {
        width: 40%;
        padding: 0 30%;
    }
</style>