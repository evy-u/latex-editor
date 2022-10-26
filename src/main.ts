import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'

const app = createApp(App)
app.use(ElementPlus, {
	locale,
})
app.use(router).mount('#app')
export default app
