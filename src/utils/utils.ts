import { ElMessage, ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading.js'

export default {
  //错误提示框
  ErrorEvent: (message: string) => {
    return ElMessage({
      message: message,
      type: 'error'
    })
  },
  //成功提示框
  SuccessEvent: (message: string) => {
    return ElMessage({
      message: message,
      type: 'success'
    })
  },
  //警告提示框
  WarningEvent: (message: string) => {
    return ElMessage({
      message: message,
      type: 'warning'
    })
  },
  //存放数据
  setStorage: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
  },

  //获取数据
  getStorage: (key: string) => {
    const data = localStorage.getItem(key)

    if (data) {
      return JSON.parse(data)
    } else {
      return null
    }
  },

  //删除数据
  removeStorage: (key: string) => {
    localStorage.removeItem(key)
  },
  //开启loading加载
  showLoading: (callBack: Function, msg?: string) => {
    const loadingInstance = ElLoading.service({
      body: true,
      background: 'rgba(0, 0, 0, 0.7)',
      text: msg ? msg : '加载中...'
    })

    callBack(loadingInstance)
  },
  //关闭loading加载
  hideLoading() {
    this.showLoading((loadingInstance: LoadingInstance) => {
      loadingInstance.close()
    })
  }
}
