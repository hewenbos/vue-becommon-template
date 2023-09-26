<template>
  <div class="PhoneCode">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="PhoneCodeRules"
      label-width="0px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item prop="phone">
        <el-input
          prefix-icon="UserFilled"
          size="large"
          v-model="ruleForm.phone"
          placeholder="请输入手机号"
        />
      </el-form-item>
      <el-form-item prop="smsCode">
        <div class="flex flexCode">
          <div class="inputBox">
            <el-input
              prefix-icon="Postcard"
              size="large"
              v-model="ruleForm.smsCode"
              placeholder="请输入短信验证码"
            />
          </div>
          <el-button type="primary" class="getCode" @click="getCode" :disabled="disabled">{{
            timerText
          }}</el-button>
        </div>
      </el-form-item>
      <el-form-item prop="imgCode">
        <div class="flex flexCode">
          <div class="inputBox">
            <el-input
              prefix-icon="PictureRounded"
              size="large"
              v-model="ruleForm.imgCode"
              placeholder="请输入图片验证码"
            />
          </div>
          <img class="img" :src="imgColr" alt="" />
        </div>
      </el-form-item>
      <el-form-item>
        <div>
          <el-checkbox v-model="ruleForm.isChecked">记住用户名</el-checkbox>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button round class="login-btn" type="danger" @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { getLogionFromCoed, getStoragePhone } from '../composabel/NosSecretFromLogin'
import { PhoneCodeRules } from '../rules'
import type { RuleForm } from '../types/login-types'

import { useImgCode } from '../composabel'
const { imgColr } = useImgCode()
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  phone: '',
  smsCode: '',
  imgCode: '',
  isChecked: false
})
const { setUserphone, getUserphone } = getStoragePhone(ruleForm)
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      setUserphone()
    }
  })
}

//开启倒计时
const { getCode, disabled, timerText } = getLogionFromCoed(ruleForm)

onMounted(() => {
  getUserphone()
})
</script>

<style lang="scss" scoped>
.PhoneCode {
  padding: 20px 45px 0;
  .login-btn {
    width: 100%;
  }
  .flexCode {
    width: 100%;
    .inputBox {
      flex: 1;
    }
    .getCode {
      height: 40px;
      margin-left: 10px;
      width: 100px;
      font-size: 12px;
    }
    .img {
      margin-left: 10px;
      width: 100px;
    }
  }
}
</style>
