<template>
  <div class="login-page">
    <div class="login-main">
      <div class="login-main-Img">
        <img src="@/assets/logo.svg" alt="" />
      </div>
      <div class="login-main-border"></div>
      <div class="login-main-Login">
        <div class="login-tab">
          <div
            @click="selectStatus = index"
            :class="{ select: selectStatus == index }"
            class="tab-item"
            v-for="(item, index) in tabList"
            :key="index"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="login-tabs">
          <component :is="tabList[selectStatus].componentName"></component>
        </div>
      </div>
    </div>
    <div class="login-footer">版权所有: 通用管理系统</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { LoginComponent } from './types/login-types'
const bgColor = 'linear-gradient(0deg, #2196f3, #00bcd4, #00bcd4, #03a9f4)'
const loginPanelWidth = '800px'
const loginPanelHeight = '400px'
const selectStatus = ref(0)
import NoSecret from './components/NoSecret.vue'
import PhoneCode from './components/PhoneCode.vue'
import QrCode from './components/QrCode.vue'

const tabList: LoginComponent[] = [
  {
    name: '免密登录',
    componentName: NoSecret
  },
  {
    name: '账号登录',
    componentName: PhoneCode
  },
  {
    name: '扫码登录',
    componentName: QrCode
  }
]
</script>

<style lang="scss" scoped>
.login {
  &-page {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: v-bind(bgColor);
  }
  &-main {
    width: v-bind(loginPanelWidth);
    height: v-bind(loginPanelHeight);
    background-color: #fff;
    margin: 0 auto;
    margin-top: calc((100vh - v-bind(loginPanelHeight)) / 2);
    box-shadow: 0 0 5px #646464;
    display: flex;

    padding: 5px 0;
    &-Img {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 60%;
      }
    }
    &-border {
      width: 1px;
      background-color: #ccc;
      height: 100%;
      margin: 0 10px;
    }
    &-Login {
      flex: 1;
      .login-tab {
        display: flex;
        align-items: center;
        height: 50px;
        margin-top: 25px;

        .tab-item {
          text-align: center;
          flex: 1;
          margin: 0 10px;
          font-size: 17px;
          cursor: pointer;
          &.select,
          &:hover {
            color: #f00;
          }
        }
      }
    }
  }
  &-footer {
    position: fixed;
    left: 0;
    bottom: 0px;
    height: 60px;
    width: 100%;
    text-align: center;
    color: #fff;
  }
}
</style>
