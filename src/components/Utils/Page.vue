<template>
    <div class="pageBar">
        <!-- 上一页 -->
        <span class="jump" v-show="currentPage != 1" @click="setCurrentPage(Number(currentPage),'prev')">&lt</span>
        <!-- 首页 -->
        <span class="jump" v-show="currentPage >= 3" @click="setCurrentPage(1)">1</span>
        <span class="ellipsis" v-show="currentPage > 3">...</span>
        <!-- 页码 -->
        <span class="jump" v-for="num in pageList" :class="{current:currentPage == num}" @click="setCurrentPage(num)">{{num}}</span>
        <span class="ellipsis" v-show="currentPage < (pageCount - 2)">...</span>
        <!-- 尾页 -->
        <span class="jump" v-show="currentPage <= (pageCount - 2)" @click="setCurrentPage(pageCount)">{{pageCount}}</span>
        <!-- 下一页 -->
        <span class="jump" @click="setCurrentPage(Number(currentPage),'next')">></span>
    </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import { inject, watchEffect } from '@vue/runtime-core'
const props = defineProps({
    pageNo : {type:[Number,String], default: 0},        //当前页
    total  : {type:[Number,String], default: 1},        //总数量
    pageSize : {type:[Number,String], default: ()=>10}       //每页显示数量
})
const emits = defineEmits(["setPageNo","getIndexs"])
const currentPage = ref(Number(props.pageNo))
const currentPageSize = ref(Number(props.pageSize))
const pageCount = Math.ceil(props.total/currentPageSize.value)    //总页数
const pageList = ref([])      // 当前显示页码

const btf = inject('$btf')
// 设置页面页码
const setCurrentPage = (pageNo = 1,type) => {
    let num = currentPage.value
    type == "prev" ? num-- : type == "next" ? num++ : (num = Number(pageNo))

    currentPage.value = num < 1 ? 1 : num > pageCount ? pageCount : num
    btf.btf.scrollToDest(0,500)
    emits("setPageNo", currentPage.value)
}
// 设置当前显示页码
const getIndexs = () => {
    if(pageCount >= 5){
        if(currentPage.value < 3){
            pageList.value = [1,2,3]
        }else if(currentPage.value >= 3 && currentPage.value <= pageCount - 2){
            pageList.value = [Number(currentPage.value) - 1,currentPage.value,Number(currentPage.value) + 1]
        }else{
            pageList.value = [pageCount - 2,pageCount - 1,pageCount]
        }
    }
    emits("getIndexs",pageList.value)
}

watchEffect(() => {
    getIndexs()
})
</script>

<style lang="less" scoped>
    .pageBar{
        padding:1rem 0 5rem 0;
        *{
            display: inline-block;
            width: 2rem;
            height: 2rem;
            line-height: 2rem;
            margin: 0 5px;
            color: var(--white);
        }
        *:not(.ellipsis){
            border-radius: 8px;
            background: #e5b3b373;
        }
        .jump{
            width: 30px;
            border: 1px solid #e5b3b373;
            padding: 4px 5px;
            cursor: pointer;
            box-shadow: var(--card-box-shadow);
            &.current{
                background: #39aedd73;
            }
        }
    }

</style>