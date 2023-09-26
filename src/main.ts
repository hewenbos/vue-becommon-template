import './styles/main.scss'
import { createApp } from 'vue'
import App from './App.vue'

import GlobalElement from './Global/Element/index'
import GlobalApp from './Global/Router-Pinia/App'

const app = createApp(App)
import './mock'
//注册element
app.use(GlobalElement)
//注册router pinia
app.use(GlobalApp)

app.mount('#app')
