import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引用自制插件
import fireworks from './assets/js/fireworks'
import utils from './assets/js/Utils';

const app = createApp(App);
app.use(store)
    .use(router)
    .use(fireworks)

// app.config.globalProperties.$btf = utils
app.provide('$btf',utils)

app.mount('#app')