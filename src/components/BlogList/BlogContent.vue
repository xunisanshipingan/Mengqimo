<!-- blogs(获取列表并显示) -->
<template>
    <div class="bloginfo">
        <span class="title">{{title}}</span>
        <span class="content" @click="showPoetry">{{content}}</span>
        <span class="timedate">{{timedate}}</span>
    </div>
</template>

<script setup>
import { ref } from 'vue';


    const props = defineProps({
        title : {type:[Number,String], default: "标题"},
        content: {type:[Number, String], default: "内容"},
        timedate: {type:[Number, String], default: "1970-01-01 00:00:00"}
    })
    const title = ref(props.title),
          content = ref(props.content),
          timedate = ref(props.timedate)

</script>

<style lang="less" scoped>
    .bloginfo{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 25px;
        cursor: pointer;
        .title{
            font-weight: bold;
            font-size: 16px;
            margin: 10px 0;
        }
        .content{
            .FontStyle();
            font-size: 16px;
            text-align: start;
            margin: 10px 0;
            overflow: hidden;
            display: block;
            white-space: nowrap;
            width: -webkit-fill-available;
        }
        .timedate{
            .FontStyle();
            opacity: 0.6;
            font-size: 11px;
        }
    }
</style>