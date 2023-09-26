<template>
  <div class="rightIcon">
    <div class="icon-item">
      <el-icon><Search /></el-icon>
    </div>
    <div class="icon-item">
      <el-icon><Bell /></el-icon>
    </div>
    <div class="icon-item">
      <el-icon><FullScreen /></el-icon>
    </div>
    <div class="icon-item">
      <el-icon><Sunny /></el-icon>
    </div>
    <div class="item">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar
            :size="30"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          />
          {{ useUser.userInfo?.name }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="info">个人信息</el-dropdown-item>
            <el-dropdown-item command="password">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
const useUser = useUserStore()

const handleCommand = () => {}
</script>

<style lang="scss" scoped>
.rightIcon {
  display: flex;
  align-items: center;
  .icon-item {
    margin: 0 15px;
  }
  .icon-item:hover {
    color: var(--el-color-primary);
  }
}

:focus-visible {
  outline: none;
}
</style>
