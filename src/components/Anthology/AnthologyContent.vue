<!-- blogs(获取列表并显示) -->
<template>
    <div class="AnthologyInfo">
        <router-link :to="'/AnthologyPage/'+link"><span class="name">{{name}}</span></router-link>
        <span class="shortcut" >{{shortcut}}</span>
    </div>
</template>

<script setup>
import { ref } from 'vue';


    const anthology = defineProps({
        name : {type:[Number,String], default: "文字名称"},
        shortcut: {type:[Number, String], default: "文字介绍"},
        link: {type:[Number, String], default: "link"}
    })
    const name = ref(anthology.name),
          shortcut = ref(anthology.shortcut),
          link = ref(anthology.link)

</script>

<style lang="less" scoped>
    .AnthologyInfo{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 25px;
        cursor: pointer;
        .name{
            font-weight: bold;
            font-size: 16px;
            margin: 10px 0;
        }
        .shortcut{
            .FontStyle();
            font-size: 16px;
            text-align: start;
            margin: 10px 0;
            display: block;
            width: -webkit-fill-available;
            opacity: .65;
        }
    }
</style>