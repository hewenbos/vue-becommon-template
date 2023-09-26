<template>
  <div class="aside">
    <div class="header">
      <span v-if="useMenu.comAside">vite后台通用模版</span>
      <img src="../../../assets/logo.svg" alt="" />
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#23262E"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#ccc"
      :collapse="!useMenu.comAside"
      router
    >
      <MenuItem :list="list"></MenuItem>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import MenuItem from './component/MenuItem.vue'
import { useMenuStore } from '@/stores/Menu'
import type { MenuResponseType } from '@/types/menu.d.ts'
import { DucoAsideList } from './compsable'
import { useAsideStore } from '@/stores/aside'
const useAside = useAsideStore()
import { getMenumListApi } from '@/api/menu'
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const useMenu = useMenuStore()
const list = ref<MenuResponseType[]>([])

const getMenumList = async () => {
  let res = await getMenumListApi()
  list.value = res.data!
}
getMenumList()

onMounted(() => {
  watch(
    () => route,
    () => {
      DucoAsideList(list.value, route.path, (item) => {
        useAside.addAsideList(item)
      })
    },
    {
      deep: true,
      immediate: true
    }
  )
})
</script>

<style lang="scss" scoped>
.el-menu {
  border: none;
}
.aside {
  height: 100vh;
  overflow-y: auto;
}
::-webkit-scrollbar {
  display: none;
}
.header {
  height: 50px;
  background-color: var(--topbar-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  img {
    width: 30px;
    height: 30px;
  }
  span {
    margin-right: 10px;
  }
}
</style>
