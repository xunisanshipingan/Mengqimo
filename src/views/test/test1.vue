<template>
    <button @click="click">跳转</button>
</template>

<script setup>
    import md5 from "js-md5";
    const loginName='15957191207'
    const time = parseInt(Date.now()/1000)
    const sign = md5(loginName + time + 'ES_HR')
    const click = ()=>{
        window.open('http://xx.xxxx.com/Account/Sso.aspx?loginName='+ loginName +'&time='+ time +'&sign=' + sign,'_blank')
    }
</script>