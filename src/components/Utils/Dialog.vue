<template>
    <div class="modal" v-show="showIn">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">醉后却寄元九</div>
                <div class="modal-body">蒲池村里悤悤别，沣水桥边兀兀回。行到城门残酒醒，万重离恨一时来。</div>
                <div class="modal-footer">白居易</div>
            </div>
        </div>
    </div>
    <div class="modal-backdrop" v-show="showIn"></div>
</template>

<script setup>
const { ref }=require("@vue/reactivity")

let showIn = ref(true)
const show = ()=>{
    showIn.value = false
}
</script>


<style lang="less" scoped>
    .modal{
        z-index: 999;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        opacity: 1;
        transition: opacity .15s linear;
        background: #fff;
        padding: 20px;
        color: #000;
        font-family: "FZSJ";
        border-radius: 10px;
        .modal-header{
            font-size: 38px;
            font-weight: bold;
            letter-spacing: 3px;
        }
        .modal-body{
            padding-top: 30px;
            font-size: 30px;
            writing-mode: vertical-lr;
            height: 380px;
            letter-spacing: 15px;
            line-height: 55px;
        }
    }
    .modal-backdrop{
        opacity: .5;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000;
    }
</style>