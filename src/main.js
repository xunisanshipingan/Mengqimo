import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引用自制插件
import fireworks from './assets/js/fireworks'

const app = createApp(App);
app.use(store)
    .use(router)
    .use(fireworks)
    .mount('#app')