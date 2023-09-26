<template>
  <el-container>
    <el-aside :width="useMenu.asideWidth"><ComAsid></ComAsid></el-aside>
    <el-container>
      <el-header><ComHeader /></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import ComAsid from './components/ComAside/index.vue'
import ComHeader from './components/ComHeader/index.vue'
import { useMenuStore } from '@/stores/Menu'
const useMenu = useMenuStore()
</script>

<style lang="scss" scoped>
.el-container {
  width: 100%;
  height: 100%;
  .el-aside {
    background-color: var(--topbar-bg);
    transition: width 0.5s;
  }
  .el-header {
    background-color: var(--topbar-bg);
    height: 60px;
    color: #ccc;
  }
}
</style>
