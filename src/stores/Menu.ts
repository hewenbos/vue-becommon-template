import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const useMenuStore = defineStore('menu', () => {
  const asideWidth = ref('260px')

  const setAsideWidth = () => {
    console.log(111)

    asideWidth.value = asideWidth.value === '260px' ? '64px' : '260px'
  }

  const comAside = computed(() => {
    return asideWidth.value === '260px' ? true : false
  })

  return { setAsideWidth, asideWidth, comAside }
})
