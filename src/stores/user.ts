import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { LoginResponseType } from '@/types/login'
export const useUserStore = defineStore('user', () => {
  const userInfo = ref<LoginResponseType>()
  const token = ref('')

  const setUserInfo = (user: LoginResponseType) => {
    userInfo.value = user
  }

  const setToken = (key: string) => {
    token.value = key
  }

  const removeToken = () => {
    token.value = ''
  }

  const removeUserInfo = () => {
    userInfo.value = undefined
  }
  return { userInfo, token, setUserInfo, setToken, removeToken, removeUserInfo }
})
