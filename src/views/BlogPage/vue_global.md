<!-- 本篇说明如何挂载全局变量并使用 -->
## 挂载全局变量

之前在研究别人的博客如何回到顶部的时候  发现了一个很有用的utils方法集合  从博主那里获得源码后  迫不及待的添加到本地的vue3项目中  在main.js中使用常规的app.use去全局化该插件时  发现控制台出现install失败警告  
``[Vue warn]: A plugin must either be a function or an object with an "install" function.``

本以为不是什么大问题  但是在utils.js里添加install方法时才发现和之前的插件不一样  这个utils.js文件对外只显示一个btf对象  并不是常规js插件那样暴露一个function  

由此意识到应该把该js添加到vue的全局变量里  在网上找了无数重复的资料~~我恨csdn~~  然后去vue3的官方API文档找方法  最后终于总结出来该如何在vue中添加全局变量以及在组件中调用它  

***
具体方法如下：
1. 在utils.js中添加export default
    const btf = {}
    export default {btf}

2. 在main.js中引入utils.js以及添加至vue全局变量
    import btf form "@/assets/js/Utils"
    conset app = createApp(App)
    app.config.globalProperties.btf = btf

3. 在组件中使用(例如使用utils中的scrollToDest)
    this.btf.btf.scrollToDest(0,500)

***
#### 总结
至于为什么使用的时候需要写两个btf  现在还没找到原因  到时候有新的心得会继续更新

2022年7月29日