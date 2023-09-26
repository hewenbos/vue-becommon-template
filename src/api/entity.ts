import axios from '@/utils/request'
export type EntityConfigType = {
  type: string
}

export const geEntityApi = (data: EntityConfigType) => {
  return axios.post('/api/entity', data)
}
