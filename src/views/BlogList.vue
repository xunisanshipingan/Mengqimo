<!-- 浮生四梦(风花雪月) -->
<template>
    <div class="BlogContainer">
        <userinfo></userinfo>
        <blogs v-for="item in currentList.value" :key="item.id" :title="item.title" :content="item.content" :timedate="item.timedate" :id="item.id" @click="showPoetry(item.id)"></blogs>
        <page :pageNo="currentPage" :total="total" :pageSize="pageSize" @setPageNo="setPageNo"></page>
        <Transition>
            <dialogs v-if="poetryDialog.visible" :modal_width="poetryDialog.modal_width" :title="poetryDialog.title" :content="poetryDialog.content" :author="poetryDialog.author" @closeDialog="closeDialog"></dialogs>
        </Transition>
    </div>
</template>

<script setup>
import userinfo from "@/components/BlogList/UserInfo.vue"
import blogs from "@/components/BlogList/BlogContent.vue"
import dialogs from "@/components/Utils/Dialog.vue"
import page from '@/components/Utils/Page.vue'
import { reactive, ref } from "@vue/reactivity"
import poetry from "@/views/FourDreams/shu/poetry.js"
    const poetrys = poetry.poetry
    // 当前页面
    const currentPage = ref(1)
    const pageSize = ref(10)
    
    const total = poetrys.length
    const currentList = reactive({value:poetrys.slice((currentPage.value - 1)*pageSize.value,currentPage.value*pageSize.value)})
    const setPageNo =  (nowPage) => {
        currentPage.value = nowPage
        currentList.value = poetrys.slice((currentPage.value - 1)*pageSize.value,currentPage.value*pageSize.value)
    }
    // 诗词弹窗相关变量
    let poetryDialog = reactive({
        title : 'title',
        content : 'content',
        author : 'author',
        visible : false,
        modal_width: 0
    })
    // 通过诗词id显示弹窗
    const showPoetry = (id)=>{
        let than = {}
        poetrys.forEach((v,k)=>{
            (v.id == id) && ( than = v )
        })
        id--
        poetryDialog.title = than.title.split(' ')[0]
        poetryDialog.author = than.title.split(' ')[1]
        poetryDialog.content = than.content
        poetryDialog.visible = true
    }
    // 关闭弹窗
    const closeDialog = ()=>{
        poetryDialog.visible = false
    }
</script>

<style lang="less" scoped>

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
    .BlogContainer {
        width: 40%;
        padding: 0 30%;
    }
    @media (max-width: 600px) {
        .BlogContainer{
            width: 80%;
            padding: 0 10%;
        }
    }
</style>