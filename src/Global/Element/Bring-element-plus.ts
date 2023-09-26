//引入Element-Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import type { App } from 'vue'
//引入中文包
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'

//引入css变量
import 'element-plus/theme-chalk/dark/css-vars.css'

export default function (app: App) {
  app.use(ElementPlus, {
    locale: zhCn
  })
}
