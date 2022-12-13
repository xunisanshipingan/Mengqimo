<template>
    <div class="dialog-main">
        <div class="modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">{{props.title}}</div>
                    <div class="modal-body" :style="{ width: props.modal_width + 'px'}">
                        <div v-for="key in props.content">{{key}}</div>
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
    modal_width: {type: [Number, String], default: 0}
})
const emits = defineEmits(['closeDialog'])
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
                max-height: 500px;
                min-width: 400px;
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
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