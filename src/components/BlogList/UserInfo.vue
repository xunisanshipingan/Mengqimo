<template>
    <div class="UserInfo">
        <div class="avatar">
            <img src="../../assets/images/avatar1.png" alt="头像">
        </div>
        <span class="name">慕师</span>
        <div class="poetry">
            <span class="signature">{{currentSignature}}</span>
            <span class="type_cousor" :class="{type_cousor_1 : isend}">|</span>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, watchEffect } from "@vue/runtime-core";

    const signature = "譬如高山，未成一篑，止，吾止也；譬如平地，虽覆一篑，往，吾往也"
    let currentSignature = ref('')
    let isend = ref(true)
    let currentCount = ref(0)
    const signatureCount = signature.length
    // 逐字递增
    function interval (){
        currentSignature.value += signature[currentCount.value]
        currentCount.value = currentCount.value + 1
    }
    // 逐字递减
    function interval_1 (){
        if(currentSignature.value.length > 0){
            currentSignature.value = currentSignature.value.substr(0, currentSignature.value.length - 1)
            setTimeout(interval_1, 50)
        }else{
            currentCount.value = 0
        }
    }
    // 侦查器
    watchEffect(()=>{
        if(currentCount.value < signatureCount){
            isend.value = true
            setTimeout(interval, 200)
        }else{
            isend.value = false
            setTimeout(interval_1, 4000)
        }
    })
</script>


<style lang="less" scoped>
    .UserInfo{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        .avatar{
            height: 80px;
            width: 80px;
            border-radius: 40px;
            position: relative;
            display: inline-block;
            overflow: hidden;
            margin: 100px 0 10px 0;
            img{
                object-fit: cover;
                max-width: 100%;
                height: 100%;
            }
        }
        .poetry{
            span:nth-child(1){
                font-size: 16px;
            }
            .type_cousor{
                opacity: 1;
            }
            .type_cousor.type_cousor_1{
                animation: fontflash 0.7s infinite;
            }
        }
        span{
            font-size: 22px;
            margin: 20px 0;
        }
    }
    @keyframes fontflash{
        50% {opacity: 0.0;}
    }
</style>