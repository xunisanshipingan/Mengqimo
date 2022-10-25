<template>
    <div class="modal" v-show="props.visible">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">{{props.title}}</div>
                <div class="modal-body">
                    <div v-for="key in props.content">{{key}}</div>
                </div>
                <div class="modal-footer">{{props.author}}</div>
            </div>
        </div>
    </div>
    <div class="modal-backdrop" v-show="props.visible" @click="closeDialog"></div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
    visible : {type: [Number, String, Boolean], default: true},
    title : {type: [Number, String], default: 'title'},
    content : {type: [Number, String], default: 'content'},
    author : {type: [Number, String], default: 'author'},
})
let visible = ref(props.visible)
const emits = defineEmits(['closeDialog'])
const closeDialog = ()=>{
    visible.value = false
    emits('closeDialog', visible.value)
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