import type { MenuResponseType } from '@/types/menu.d.ts'
import { toRaw } from 'vue'

export const DucoAsideList = (
  list: MenuResponseType[],
  path: string,
  callBack: (item: MenuResponseType) => void
) => {
  const data = toRaw(list)
  data.forEach((item) => {
    if (item.path === path) {
      callBack(item)
    }

    if (item.children && item.children.length > 0) {
      DucoAsideList(item.children, path, callBack)
    }
  })
}
