<template>
  <div class="header-Page">
    <div class="leftIcon" @click="useMenu.setAsideWidth">
      <el-icon>
        <component :is="useMenu.comAside ? 'Fold' : 'Expand'"></component>
      </el-icon>
    </div>
    <TagsHeader></TagsHeader>
    <RightIcon></RightIcon>
  </div>
</template>

<script lang="ts" setup>
import { useMenuStore } from '@/stores/Menu'
import TagsHeader from './components/TagsHeader.vue'
import RightIcon from './components/RightIcon.vue'
const useMenu = useMenuStore()
</script>

<style lang="scss" scoped>
.header-Page {
  display: flex;
  align-items: center;
  height: 100%;
  .leftIcon {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
