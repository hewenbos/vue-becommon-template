import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios'

import type { AxiosCreateType } from '@/types/Request'
import { AxiosCreate } from './AxiosExample'
import type { Data } from '@/types/Request'
import utils from '@/utils/utils'
class Http {
  private service: AxiosInstance
  constructor(AxiosCreate: AxiosCreateType) {
    this.service = axios.create(AxiosCreate)
    this.instance()
  }

  instance() {
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        if (response.status === 200) {
          if (response.data.code !== 888) {
            utils.ErrorEvent(response.data.message ? response.data.message : '请求失败')
          }
          return response.data
        }
      },
      (err) => {
        return Promise.reject(err)
      }
    )
  }

  //get请求
  get<T>(url: string, parmas?: object) {
    return this.service.get<T, Data<T>>(url, parmas)
  }
  post<T>(url: string, data?: object) {
    return this.service.post<T, Data<T>>(url, data)
  }
  put<T>(url: string, data?: object) {
    return this.service.put<T, Data<T>>(url, data)
  }
  delete<T>(url: string, parmas?: object) {
    return this.service.delete<T, Data<T>>(url, parmas)
  }
}

export default new Http(AxiosCreate)
