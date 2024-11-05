import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css' // 引入 Tailwind CSS 文件
import router from './router'  // 导入路由配置
import store from './store'  // 导入 Vuex store

// 全局引入 icons.css
import './style/icons.css';

const app = createApp(App)

app.use(router)  // 使用路由
app.use(store)   // 使用 Vuex store

app.mount('#app')
