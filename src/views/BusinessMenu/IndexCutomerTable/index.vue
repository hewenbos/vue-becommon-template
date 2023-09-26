<template>
  <div>
    <el-card>
      <BecommonTable>
        <template #btns>
          <el-button type="primary" icon="Ticket">导出数据</el-button>
        </template>
      </BecommonTable>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import BecommonTable from '@/components/BecommonTable.vue'
</script>

<style lang="scss" scoped></style>
