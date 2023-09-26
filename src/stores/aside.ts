import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MenuResponseType } from '@/types/menu.d.ts'
export type asideType = {
  name: string
  path: string
  index?: number
  icon: string
}
export const useAsideStore = defineStore('aside', () => {
  const asideList = ref<asideType[]>([])
  const addAsideList = (item: MenuResponseType) => {
    const index = asideList.value.findIndex((ele) => ele.path === item.path)
    if (index == -1) {
      asideList.value.push({
        name: item.name,
        path: item.path,
        icon: item.icon
      })
    }
  }
  const DelAsideList = (index: number) => {
    asideList.value.splice(index, 1)
  }
  return { asideList, addAsideList, DelAsideList }
})
