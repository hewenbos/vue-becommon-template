import utils from '@/utils/utils'
import type { LoginUserFromType } from '../types/login-types'
export const usePhoneCodeLoginStorage = (ruleForm: LoginUserFromType) => {
  //存放username和password
  const useSetStorageUserOrPass = () => {
    if (ruleForm.isUsername) {
      utils.setStorage('username', ruleForm.username)
      utils.setStorage('isUsername', ruleForm.isUsername)
    } else {
      utils.removeStorage('username')
      utils.removeStorage('isUsername')
    }

    if (ruleForm.isPassword) {
      utils.setStorage('password', ruleForm.password)
      utils.setStorage('isPassword', ruleForm.isPassword)
    } else {
      utils.removeStorage('password')
      utils.removeStorage('isPassword')
    }
  }
  //获取username和password
  const useGetStorageUserOrPass = () => {
    if (utils.getStorage('isUsername')) {
      console.log(1111)

      ruleForm.username = utils.getStorage('username')
    }

    if (utils.getStorage('isPassword')) {
      ruleForm.password = utils.getStorage('password')
    }
  }

  return {
    useSetStorageUserOrPass,
    useGetStorageUserOrPass
  }
}
