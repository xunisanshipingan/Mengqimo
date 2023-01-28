<template>
    <div>
        <span v-for="item in navlist" :key="item.id">
            <router-link :to="item.host">{{item.name}}</router-link>
        </span>
    </div>
</template>

<script>
export default {
    name : "NavBar",
    setup(){
        const navlist = [
            {"id" : "1","name" : "浮生四梦","host" : "bloglist"},
            {"id" : "2","name" : "姻缘一线","host": "subscribe"},
            {"id" : "3","name" : "摘叶飞花","host" : "anthology"}
        ]
        const result = {
            navlist
        }
        return result
    }
}
</script>

<style lang="less" scoped>
    div{
        border-bottom: 1px solid #eee;
        padding: 20px 40px;
        span{
            padding: 0 2%;
            a{
                .FontStyle();
            }
            a:hover{
                color: #f00;
            }
        }
    }
</style>