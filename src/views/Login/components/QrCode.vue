<template>
  <div class="Two-dimensionalCode">
    <div class="Two-dimensionalCode-Img">
      <img
        :class="{ 'end-Img': TwoDimensionalCodeTime <= 0 }"
        :src="TwoDimensionalCodeUrl"
        alt=""
      />
      <div
        class="MaskLayer"
        v-if="TwoDimensionalCodeTime <= 0"
        @click="TwoDimensionalCodeRefreshTime"
      >
        二维码已过期 点击重新刷新
      </div>
    </div>
    <div class="tip-text">请使用微信扫码登录或应用登录</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const TwoDimensionalCodeTime = ref(0)
let timer: number
let TwoDimensionalCodeUrl: string
//设置一个定时器 , 当定时器走到0的时候弹出二维码以过期节点
const TwoDimensionalCodeRefreshTime = () => {
  TwoDimensionalCodeTime.value = 60

  TwoDimensionalCodeUrl = new URL('@/assets/qcode.png', import.meta.url).href

  timer = setInterval(() => {
    TwoDimensionalCodeTime.value--
    TwoDimensionalCodeStatus()
    if (TwoDimensionalCodeTime.value <= 0) {
      clearInterval(timer)
    }
  }, 1000)
}
TwoDimensionalCodeRefreshTime()

//请求二维码接口 在定时器里调用 每一秒获取当前的二维码状态
const TwoDimensionalCodeStatus = () => {}
</script>

<style lang="scss" scoped>
.Two-dimensionalCode {
  .Two-dimensionalCode-Img {
    margin: 0 auto;
    position: relative;
    width: 55%;
    height: 55%;
    img {
      width: 100%;
      height: 100%;
      vertical-align: bottom;
    }
    .MaskLayer {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #00000055;
      color: #f00;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      cursor: pointer;
    }
    .end-Img {
      filter: brightness(10%);
    }
  }
  .tip-text {
    text-align: center;
    color: #ccc;
    margin-top: 15px;
    font-size: 13px;
  }
}
</style>
