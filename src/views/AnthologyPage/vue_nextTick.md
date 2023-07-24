## nextTick 详解
***

官网定义：Vue.nextTick( [callback, context] ),在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

#### 使用方法
引入nextTick后直接调用方法即可，如
    import { nextTick } from "@vue/runtime-core"
    const example = function(){
        msg = '123'
        nextTick(()=>{ document.getElementById('example') })
    }

#### 原理
Vue.nextTick接收2个参数，分别为回调函数与上下文环境
首先根据当前执行环境判断执行回调的是微任务还是宏任务，顺序如下 **Promise > MutationObserver > setlmmediate > setTimeOut** 
再是执行任务队列。首先声明_resolve， 若无回调函数则返回prmise，若存在回调函数则将函数放入callback队列，每次循环使用nextTick时，执行timer函数（上面判断的异步方法），每次再调用nextTick则只将回调函数放入callbacks队列，最终通过flushCallbacks方法执行队列的所有方法。

#### 总结
重点在于Vue更新DOM时也调用nextTick方法实现异步渲染，后面用户调用nextTick自然排在异步渲染后面，拿到更新后的DOM。