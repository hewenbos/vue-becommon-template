import axios from '@/utils/request'
import type { accountLoginType, LoginResponseType } from '@/types/login'
//账号登录
export const getPhoneCodeLoginApi = (data: accountLoginType) => {
  return axios.post<LoginResponseType>('/api/login/username', data)
}
