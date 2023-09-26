<template>
  <div class="PhoneCode">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="UserLoginRules"
      label-width="0px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item prop="username">
        <el-input
          prefix-icon="UserFilled"
          size="large"
          v-model="ruleForm.username"
          placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          prefix-icon="Postcard"
          size="large"
          v-model="ruleForm.password"
          placeholder="请输入密码"
          type="password"
        />
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
          <el-checkbox v-model="ruleForm.isUsername">记住用户名</el-checkbox>
          <el-checkbox v-model="ruleForm.isPassword">记住密码</el-checkbox>
          <div class="routeLink">
            <router-link to="/RecoverPassword">忘记密码?</router-link>
          </div>
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
import { usePhoneCodeLoginStorage } from '../composabel/PhoneCodeFromLogin'
import { UserLoginRules } from '../rules'
import type { LoginUserFromType } from '../types/login-types'
import { useImgCode } from '../composabel'
import { getPhoneCodeLoginApi } from '@/api/login'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import utils from '@/utils/utils'
const useUser = useUserStore()
const router = useRouter()

const { imgColr } = useImgCode()
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<LoginUserFromType>({
  username: '',
  password: '',
  isUsername: false,
  isPassword: false,
  imgCode: ''
})

const { useSetStorageUserOrPass, useGetStorageUserOrPass } = usePhoneCodeLoginStorage(ruleForm)

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fides) => {
    if (valid) {
      try {
        utils.showLoading(() => {})
        const res = await getPhoneCodeLoginApi({
          username: ruleForm.username,
          imgcode: ruleForm.imgCode,
          password: ruleForm.password
        })
        useSetStorageUserOrPass()
        if (res.code === 888) {
          utils.SuccessEvent('登录成功')
          useUser.setToken(res.token!)
          useUser.setUserInfo(res.data!)
          router.push('/')
        }
      } catch (error) {
        console.log(error)
        utils.ErrorEvent('登录失败')
      } finally {
        utils.hideLoading()
      }
    } else {
      let fide = Object.keys(fides!)
      utils.WarningEvent(fides![fide[0]][0].message as string)
    }
  })
}

onMounted(() => {
  useGetStorageUserOrPass()
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
  .routeLink {
    display: inline-block;
    margin-left: 20px;
  }
}
</style>
