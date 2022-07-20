<!-- blogs(获取列表并显示) -->
<template>
    <template v-for="item in bloglists" :key="item.id" >
        <a href="" class="bloginfo">
            <span class="title">{{item.title}}</span>
            <span class="content">{{item.content}}</span>
            <span class="timedate">{{item.timedate}}</span>
        </a>
    </template>
</template>

<script>
    export default {
        name : "blogs",
        setup (){
            const bloglists = [
                {id : "1","title": "代沟" , "content" : "我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。", "timedate" : "2021-11-16 20:37"},
                {id : "2","title": "代沟" , "content" : "我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。", "timedate" : "2021-11-16 20:37"},
                {id : "3","title": "代沟" , "content" : "我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。", "timedate" : "2021-11-16 20:37"},
                {id : "4","title": "代沟" , "content" : "我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。", "timedate" : "2021-11-16 20:37"},
                {id : "5","title": "代沟" , "content" : "我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。我对世界的看法、书信、读书记录以及由此而来的思考。短文居多。", "timedate" : "2021-11-16 20:37"},
            ]
            const result = {
                bloglists
            }
            return result
        }
    }
</script>

<style lang="less" scoped>
    .bloginfo{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 25px;
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
        }
        .timedate{
            .FontStyle();
            opacity: 0.6;
            font-size: 11px;
        }
    }
</style>