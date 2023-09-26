import BringElementPlus from './Bring-element-plus'
import BringElementIcon from './Bring-element-icon'

import type { App } from 'vue'
export default {
  install(app: App) {
    app.use(BringElementPlus)
    app.use(BringElementIcon)
  }
}
