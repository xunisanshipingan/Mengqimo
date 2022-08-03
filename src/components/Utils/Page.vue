<template>
    <div class="pageBar">
        <span class="jump" v-show="props.pageNo != 1" @click="setPageNo(Number(props.pageNo) - 1)">&lt</span>
        <span class="jump" v-show="props.pageNo >= 3" @click="setPageNo(1)">1</span>
        <span class="ellipsis" v-show="props.pageNo > 3">...</span>
        <span class="jump" v-for="num in calcObj.indexs" :class="{current:props.pageNo == num}" @click="setPageNo(num)">{{num}}</span>
        <span class="ellipsis" v-show="props.pageNo < (pageCount - 2)">...</span>
        <span class="jump" v-show="props.pageNo <= pageCount - 2" @click="setPageNo(pageCount)">{{pageCount}}</span>
        <span class="jump" @click="setPageNo(Number(props.pageNo) + 1)">></span>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    name : "Page",
    props : {
        pageNo : Number,        //当前页
        count : Number,         //总数量
        showCount : Number      //每页显示数量
    },
    setup(props) {
        // var props = reactive({
        //     pageNo    : 1,                        
        //     count     : 100,                      
        //     showCount : 10,                       
        // })
        var pageCount = Math.ceil(props.count/props.showCount)    //总页数
        var calcObj = reactive({
            indexs    : getIndexs()               //当前显示页列表
        })
        // 设置当前显示页列表
        function getIndexs (){
            var ar = []
            if(pageCount >= 5){
                if(props.pageNo < 3){
                    ar = [1,2,3]
                }else if(props.pageNo >= 3 && props.pageNo <= pageCount - 2){
                    ar = [Number(props.pageNo) - 1,props.pageNo,Number(props.pageNo) + 1]
                }else{
                    ar = [pageCount - 2,pageCount - 1,pageCount]
                }
            }
            return ar
        }
        // 切换页面函数
        function setPageNo(page){
            props.pageNo = page
            calcObj.indexs = getIndexs()
            this.btf.btf.scrollToDest(0,500)
        }
        const result = {
            setPageNo,calcObj,pageCount
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
            &.current{
                background: #39aedd73;
            }
        }
    }

</style>