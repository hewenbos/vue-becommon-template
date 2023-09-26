<template>
  <template v-for="item in list" :key="item.id">
    <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 0">
      <template #title>
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.name }}</span>
      </template>

      <MenuItem :list="item.children" v-if="item.children && item.children.length > 0"></MenuItem>
    </el-sub-menu>
    <el-menu-item v-else :index="item.path">
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.name }}</span>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
defineProps<{
  list: any
}>()
</script>

<style lang="scss" scoped></style>
