<template>
  <div class="tags" @mousedown="mouseDown">
    <div
      class="item"
      @click="handelRoute(item.path)"
      :class="{ active: item.path == $route.path }"
      v-for="(item, index) in useAside.asideList"
      :key="index"
    >
      <el-icon class="icon">
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.name }}</span>
      <el-icon @click.stop="handelDelRoute(index, item.path)"><Close /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAsideStore } from '@/stores/aside'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const useAside = useAsideStore()

const handelRoute = (path: string) => {
  console.log(path)
  router.push(path)
}

const handelDelRoute = (index: number, path: string) => {
  let idx = index === useAside.asideList.length - 1

  let Last = idx ? 'last' : 'notLast'

  if (Last === 'last') {
    useAside.DelAsideList(useAside.asideList.length - 1)
    router.push(useAside.asideList[useAside.asideList.length - 1].path)
  } else if (path === route.path) {
    useAside.DelAsideList(index)
    router.push(useAside.asideList[index].path)
  } else {
    useAside.DelAsideList(index)
    console.log(index)
  }
}

const mouseDown = (e) => {
  console.log(e)
}
</script>

<style lang="scss" scoped>
.tags {
  flex: 1;
  margin: 0px 10px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  overflow-x: auto;
  min-width: 800px;
  .item {
    margin: 0 10px;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    margin: 0 5px;
    border-radius: 15px;
    cursor: pointer;
    .icon {
      margin-right: 10px;
    }
  }
  .item.active {
    background-color: blueviolet;
  }
}
.tags::-webkit-scrollbar {
  // scrollbar-width: none;
  height: 0;
}
</style>
