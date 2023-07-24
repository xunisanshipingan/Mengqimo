<template>
    <div class="dialog-main">
        <div class="modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">{{props.title}}</div>
                    <div class="modal-body" :style="{ width: clist.length*60 + 'px', height: height*55 + 'px'}">
                        <div class="ver" v-for="item in clist">
                            <div class="hor" v-for="key in item">{{key}}</div>
                        </div>
                    </div>
                    <div class="modal-footer">{{props.author}}</div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop" @click="closeDialog"></div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
    title : {type: [Number, String], default: 'title'},
    content : {type: [Number, String], default: 'content'},
    author : {type: [Number, String], default: 'author'},
})
const emits = defineEmits(['closeDialog'])

// 循环并以逗号分隔为一列
let clist = props.content.split(/[,，.。!！；?？、]/), height = ref(0)

clist.pop()
console.log(clist)
clist.forEach((v,k)=>{
    if(v.length>height.value) (height.value = v.length)
})


const closeDialog = ()=>{
    emits('closeDialog')
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
        transition: opacity .5s linear;
        background: #fff;
        padding: 20px;
        color: #000;
        font-family: "FZSJ";
        border-radius: 10px;
        .modal-content{
            .modal-header{
                font-size: 35px;
                font-weight: bold;
                letter-spacing: 3px;
                font-family: 'FZSJ';
            }
            .modal-body{
                padding-top: 30px;
                font-size: 30px;
                max-width: 1600px;
                max-height: 500px;
                overflow-x: auto;
                overflow-y: auto;
                display: flex;
                flex-wrap: nowrap;
                justify-content: space-between;
                flex-direction: row;
                align-items: flex-start;
                div{
                    line-height: 50px;
                    width: 50px;
                    border: 1px #f00 solid;
                }
            }
            .modal-footer{
                padding-top: 30px;
            }
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