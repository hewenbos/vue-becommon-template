import type { AxiosCreateType } from '@/types/Request'
export const AxiosCreate: AxiosCreateType = {
  baseURL: '',
  timeout: 30 * 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  withCredentials: true,
  ResponseType: 'json',
  responseEncoding: 'utf8'
}
