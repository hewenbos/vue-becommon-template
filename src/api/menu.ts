import axios from '@/utils/request'
import type { MenuResponseType } from '@/types/menu.d.ts'
export const getMenumListApi = () => {
  return axios.post<MenuResponseType[]>('/api/menu')
}
