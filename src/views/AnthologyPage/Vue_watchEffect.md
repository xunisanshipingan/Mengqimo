## WatchEffect 使用详解
***

使用watchEffect之前首先要了解什么是纯函数，什么是副作用(side effect)
1. 纯函数：返回结果仅依赖它的参数，且执行过程中没有副作用
2. 副作用：函数的执行过程中产生外部可观察的变化，例如：
   - 发起HTTP请求
   - 操作DOM
   - 修改外部数据
   - console.log()打印数据
   - 调用Date.now()或者Math.random()
***
watchEffect使用方法
```
let ii = 0
watchEffect((async)=>{
    console.log(ii++)
    async()
})
```
watchEffect本意指的是侦听器， 它会副作用发生期间自动追踪依赖， 当它在执行同步的过程中， 自动追踪所有能访问到的响应式属性