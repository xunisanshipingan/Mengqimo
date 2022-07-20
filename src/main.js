import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引用自制插件
import fireworks from './assets/js/fireworks.js'

const app = createApp(App);
app.use(store).use(router).mount('#app')
app.use(fireworks)