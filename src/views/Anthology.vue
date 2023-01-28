<!-- 摘叶飞花(摘抄) -->
<template>
	<div class="AnthologyContainer">
		<userinfo></userinfo>
		<Anthologys v-for="item in currentList.value" :key="item.id" :name="item.name" :shortcut="item.shortcut" :link="item.link"></Anthologys>
        <page :pageNo="currentPage" :total="total" :pageSize="pageSize" @setPageNo="setPageNo"></page>
	</div>
</template>

<script setup>
import userinfo from "@/components/BlogList/UserInfo.vue"
import page from '@/components/Utils/Page.vue'
import Anthologys from '@/components/Anthology/AnthologyContent.vue'
import { reactive, ref } from "@vue/reactivity"

const AnthologyList = [
	{id:"1",name:"Subtree用法",shortcut:"打包博客并提交到Git分支进行page托管，提交时总会出现错误，查询资料后解决并记录",link:"Git_Subtree"},
	{id:"2",name:"Github常用命令",shortcut:"为了防止失忆，记录一下Github常用命令，方便查找",link:"Github"},
	{id:"3",name:"java打包成exe教学",shortcut:"为了方便客户一键式安装，特意学习了使用InnoSetup进行打包，主要步骤为打包安装目录以及设置环境变量",link:"InnoSetup"},
	{id:"4",name:"常用软件安装",shortcut:"在工作中常用的一些软件的安装教学以及环境变量配置",link:"ipath"},
	{id:"5",name:"Java连接到Mysql问题",shortcut:"在使用java连接到MySQL时遇到的一些问题以及解决方法",link:"JavaToMysql"},
	{id:"6",name:"JavaScript常见问题",shortcut:"使用JavaScript时常见的一些问题以及解决方法",link:"JsQuestion"},
	{id:"7",name:"CentOS安装",shortcut:"CentOS安装过程中产生的问题以及系统初始化设置",link:"Linux_centos"},
	{id:"8",name:"MySQL语法",shortcut:"一些MySQL常见语法",link:"MySQL"},
	{id:"9",name:"npm使用技巧",shortcut:"常用技巧",link:"Npm"},
	{id:"10",name:"vue全局变量挂载",shortcut:"全局变量挂载的几种方法优劣分析",link:"vue_global"},
	{id:"11",name:"vue侦听器使用详解",shortcut:"对于vue中侦听器的介绍以及使用方法",link:"Vue_watchEffect"},
	{id:"12",name:"学习目标",shortcut:"制定的学习目标以及学习情况，主要是表格",link:"WillLearn"},
]

// 当前页面
const currentPage = ref(1)
const pageSize = ref(10)

const total = AnthologyList.length
const currentList = reactive({value:AnthologyList.slice((currentPage.value - 1)*pageSize.value,currentPage.value*pageSize.value)})

</script>

<style lang="less" scoped>
    .AnthologyContainer {
        width: 40%;
        padding: 0 30%;
    }
    @media (max-width: 600px) {
        .AnthologyContainer{
            width: 80%;
            padding: 0 10%;
        }
    }
</style>