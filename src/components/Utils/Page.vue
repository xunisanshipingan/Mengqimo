<template>
    <div class="pageBar">
        <span class="jump" v-show="obj.pageNo != 1" @click="setPageNo(obj.pageNo - 1)">&lt</span>
        <span class="jump" v-show="obj.pageNo >= 3" @click="setPageNo(1)">1</span>
        <span class="ellipsis" v-show="obj.pageNo > 3">...</span>
        <span class="jump" v-for="num in obj.indexs" :class="{bgprimary:obj.pageNo == num}" @click="setPageNo(num)">{{num}}</span>
        <span class="ellipsis" v-show="obj.pageNo < (pageCount - 2)">...</span>
        <span class="jump" v-show="obj.pageNo <= pageCount - 2" @click="setPageNo(pageCount)">{{pageCount}}</span>
        <span class="jump">></span>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    name : "Page",
    setup() {
        // var pageNo      = 5,                        //当前页
        //       count     = 100,                      //总数量
        //       showCount = 10,                       //每页显示数量
        //       pageCount = Math.ceil(count/showCount),    //总页数
        //       indexs    = getIndexs()               //当前显示页列表
        var obj = reactive({
            pageNo    : 5,                        //当前页
            count     : 100,                      //总数量
            showCount : 10,                       //每页显示数量
            indexs    : getIndexs()               //当前显示页列表
        })
        var pageCount = Math.ceil(obj.count/obj.showCount)    //总页数
        // 设置当前显示页列表
        function getIndexs (){
            var ar = []
            if(pageCount >= 5){
                if(obj.pageNo < 3){
                    ar = [1,2,3]
                }else if(obj.pageNo >= 3 && obj.pageNo <= pageCount - 2){
                    ar = [Number(obj.pageNo) - 1,obj.pageNo,Number(obj.pageNo) + 1]
                }else{
                    ar = [pageCount - 2,pageCount - 1,pageCount]
                }
            }
            return ar
        }
        // 切换页面函数
        function setPageNo(page){
            obj.pageNo = page
            obj.indexs = getIndexs()
        }
        const result = {
            obj,setPageNo,pageCount
        }
        return result
    },
}
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
        }
    }

</style>