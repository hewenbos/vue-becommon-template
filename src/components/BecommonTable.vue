<template>
  <div>
    <div class="search-box flex">
      <div class="btns flex-item">
        <el-button type="primary" icon="Plus">添加数据</el-button>
        <slot name="btns"></slot>
      </div>

      <div class="search-form-box flex">
        <div class="search-label-box">快捷搜索:</div>
        <div class="search-type-box">
          <el-select v-model="form.type" class="m-2" placeholder="Select">
            <el-option label="item.label" value="item.value" />
          </el-select>
        </div>
        <div class="search-value-box">
          <el-input class="search-value"></el-input>
        </div>

        <div class="search-btn-group">
          <el-button-group>
            <el-button type="primary" icon="Search">搜索</el-button>
            <el-button type="danger" icon="Refresh">刷新</el-button>
            <el-button type="primary" icon="Filter" @click="filterStatusFlag = !filterStatusFlag"
              >筛选</el-button
            >
          </el-button-group>
        </div>
      </div>
    </div>

    <el-divider />

    <div class="search-tag-box flex">
      <div class="search-taglabel-box">当前筛选项:</div>
      <div class="search-tag"><el-tag type="success" closable effect="plain">Tag 2</el-tag></div>
    </div>

    <el-divider />

    <div class="search-filter-box" v-if="filterStatusFlag">
      <el-form inline :mode="filterFrom">
        <el-form-item label="名称">
          <el-input v-model="filterFrom.name" placeholder="请输入名称" clearable />
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="filterFrom.type" placeholder="请输入类型" clearable>
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button-group>
            <el-button type="primary">确定</el-button>
            <el-button type="primary" @click="filterStatusFlag = false">取消</el-button>
          </el-button-group>
        </el-form-item>
      </el-form>
    </div>

    <div class="table-tools-box flex">
      <div class="tools-btn flex-item">
        <el-button-group>
          <el-button type="primary" size="small" icon="Delete">删除数据</el-button>
          <el-button type="danger" icon="Download" size="small">导出数据</el-button>
        </el-button-group>
      </div>
      <div>
        <el-button type="danger" icon="Tools" size="small"></el-button>
      </div>
    </div>

    <el-divider />

    <div class="table-box">
      <el-table stripe :data="tableData" border style="width: 100%">
        <el-table-column v-for="(item, index) in config" :key="index" v-bind="item" />
      </el-table>

      <div class="page-box">
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { geEntityApi } from '@/api/entity'
//快捷搜索数据
const form = reactive({
  type: ''
})

//高级搜索数据
const filterFrom = reactive({
  name: '',
  type: ''
})

//控制高级筛选的状态
const filterStatusFlag = ref(false)

//表格数据
const tableData = ref([
  {
    id: '1',
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
])

//分页

const currentPage4 = ref(4)

const pageSize4 = ref(100)
const small = ref(false)
const background = ref(true)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

//获取关键词
const config = ref([])
const geEntity = async () => {
  let res = await geEntityApi({ type: 'demo' })
  config.value = res.data
}
geEntity()
</script>

<style lang="scss" scoped>
.search-box {
  height: 40px;
  line-height: 40px;
}
.el-divider--horizontal {
  margin: 10px 0;
}
.search-form-label {
  font-size: 14px;
  margin-right: 5px;
}
.search-type-box {
  margin-right: 10px;
  width: 150px;
}
.search-btn-group {
  margin-left: 10px;
}

.search-label-box {
  font-size: 12px;
}
.search-taglabel-box {
  line-height: 30px;
}
.search-tag {
  margin-top: 3px;
  margin-left: 10px;
}

.page-box {
  margin-top: 10px;
}
</style>
