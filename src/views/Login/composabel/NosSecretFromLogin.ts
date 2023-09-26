import { ref } from 'vue'
import utils from '@/utils/utils'
import type { RuleForm } from '../types/login-types'
//开启定时器
export const getLogionFromCoed = (ruleForm: RuleForm) => {
  let timer: number
  const currentTime = ref(0)
  const disabled = ref(false)
  const timerText = ref('获取验证码')
  const getCode = () => {
    if (!ruleForm.phone) {
      utils.ErrorEvent('请输入手机号')
      return
    }
    clearInterval(timer)
    currentTime.value = 60
    timerText.value = `${currentTime.value}秒后重新获取`
    disabled.value = true
    timer = setInterval(() => {
      currentTime.value--
      timerText.value = `${currentTime.value}秒后重新获取`
      if (currentTime.value <= 0) {
        clearInterval(timer)
        timerText.value = `获取验证码`
        disabled.value = false
        timer = 0
      }
    }, 1000)
  }

  return {
    getCode,
    disabled,
    timerText
  }
}

//本地存储手机号
export const getStoragePhone = (ruleForm: RuleForm) => {
  const setUserphone = () => {
    if (ruleForm.isChecked) {
      utils.setStorage('phone', ruleForm.phone)
      utils.setStorage('isChecked', ruleForm.isChecked)
    } else {
      utils.removeStorage('phone')
      utils.removeStorage('isChecked')
    }
  }
  const getUserphone = () => {
    if (utils.getStorage('isChecked')) {
      ruleForm.phone = utils.getStorage('phone')
    }
  }
  return {
    setUserphone,
    getUserphone
  }
}
