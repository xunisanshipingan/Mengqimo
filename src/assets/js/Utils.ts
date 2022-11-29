
const btf = {
    // 防抖：在事件被触发后的N秒后再执行回调，N秒内再次触发则重新计时
    debounce: function (func: Function, wait: number, immediate= false) {
        let timeout: number | null = null
        return (...args: any) => {
            const context = this
            const later = function () {
                timeout = null
                if (!immediate) func.apply(context, args)
            }
            const callNow = immediate && !timeout
            if(timeout)clearTimeout(timeout)
            timeout = setTimeout(later, wait)
            if (callNow) func.apply(context, args)
        }
    },
    // 节流：N秒内回调函数只会执行一次，先执行后计算
    throttle: function (func: Function, wait: number, options:{leading: boolean,trailing: boolean}) {
        // 定义计时器返回值，外部this，argments
        let timeout: number | null = null, context:any , args:any
        let previous = 0
        // 定义默认选项
        if (!options) options = {leading:true,trailing: true}

        const later = function () {
            previous = options.leading === false ? 0 : new Date().getTime()
            timeout = null
            func.apply(context, args)
            if (!timeout) context = args = null
        }

        const throttled =  () => {
            const now = new Date().getTime()
            if (!previous && options.leading === false) previous = now
            const remaining = wait - (now - previous)
            context = this
            args = arguments
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout)
                    timeout = null
                }
                previous = now
                func.apply(context, args)
                if (!timeout) context = args = null
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining)
            }
        }

        return throttled
    },

    sidebarPaddingR: () => {
        const innerWidth: number = window.innerWidth
        const clientWidth: number = document.body.clientWidth
        const paddingRight:number = innerWidth - clientWidth
        if (innerWidth !== clientWidth) {
            document.body.style.paddingRight = paddingRight + 'px'
        }
    },

    diffDate: (d:Date, more = false) => {
        const dateNow = new Date()
        const datePost = new Date(d)
        const dateDiff = dateNow.getTime() - datePost.getTime()
        const minute = 1000 * 60
        const hour = minute * 60
        const day = hour * 24
        const month = day * 30

        let result
        if (more) {
            const monthCount = dateDiff / month
            const dayCount = dateDiff / day
            const hourCount = dateDiff / hour
            const minuteCount = dateDiff / minute

            if (monthCount > 12) {
                result = datePost.toLocaleDateString().replace(/\//g, '-')
            } else if (monthCount >= 1) {
                result = monthCount + '月'
            } else if (dayCount >= 1) {
                result = dayCount + '日'
            } else if (hourCount >= 1) {
                result = hourCount + '小时'
            } else if (minuteCount >= 1) {
                result = minuteCount + '分钟'
            } else {
                result = "0分钟"
            }
        } else {
            result = dateDiff / day
        }
        return result
    },

    loadComment: (dom:Element, callback:Function) => {
        if ('IntersectionObserver' in window) {
            const observerItem = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    callback()
                    observerItem.disconnect()
                }
            }, { threshold: [0] })
            observerItem.observe(dom)
        } else {
            callback()
        }
    },

    // // 回到顶部
    scrollToDest: (pos:number, time:number) => {
        if (pos < 0 || time < 0) {
            return
        }

        const currentPos = window.scrollY || window.screenTop
        if (currentPos > pos) pos = pos - 70

        if ('CSS' in window && CSS.supports('scroll-behavior', 'smooth')) {
            window.scrollTo({
                top: pos,
                behavior: 'smooth'
            })
            return
        }

        let start:number = 0
        time = time || 500
        window.requestAnimationFrame(function step(currentTime) {
            start = !start ? currentTime : start
            if (currentPos < pos) {
                const progress = currentTime - start
                window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos)
                if (progress < time) {
                    window.requestAnimationFrame(step)
                } else {
                    window.scrollTo(0, pos)
                }
            } else {
                const progress = currentTime - start
                window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time))
                if (progress < time) {
                    window.requestAnimationFrame(step)
                } else {
                    window.scrollTo(0, pos)
                }
            }
        })
    },

    fadeIn: (ele:HTMLDivElement, time:number) => {
        ele.style.cssText = `display:block;animation: to_show ${time}s`
    },

    fadeOut: (ele:HTMLDivElement, time:number) => {
        ele.addEventListener('animationend', function f() {
            ele.style.cssText = "display: none; animation: '' "
            ele.removeEventListener('animationend', f)
        })
        ele.style.animation = `to_hide ${time}s`
    },

    // /**
    //  *
    //  * @param {*} selector
    //  * @param {*} eleType the type of create element
    //  * @param {*} id id
    //  * @param {*} cn class name
    //  */
    // wrap: function (selector, eleType, id = '', cn = '') {
    //     const creatEle = document.createElement(eleType)
    //     if (id) creatEle.id = id
    //     if (cn) creatEle.className = cn
    //     selector.parentNode.insertBefore(creatEle, selector)
    //     creatEle.appendChild(selector)
    // },

    // unwrap: function (el) {
    //     const elParentNode = el.parentNode
    //     if (elParentNode !== document.body) {
    //         elParentNode.parentNode.insertBefore(el, elParentNode)
    //         elParentNode.parentNode.removeChild(elParentNode)
    //     }
    // },

    // isJqueryLoad: (fn) => {
    //     if (typeof jQuery === 'undefined') {
    //         getScript(GLOBAL_CONFIG.source.jQuery).then(fn)
    //     } else {
    //         fn()
    //     }
    // },

    // isHidden: (ele) => ele.offsetHeight === 0 && ele.offsetWidth === 0,

    // getEleTop: (ele) => {
    //     let actualTop = ele.offsetTop
    //     let current = ele.offsetParent

    //     while (current !== null) {
    //         actualTop += current.offsetTop
    //         current = current.offsetParent
    //     }

    //     return actualTop
    // }

}
export default { btf }