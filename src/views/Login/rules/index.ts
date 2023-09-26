import type { FormRules } from 'element-plus'
import { reactive } from 'vue'

//免密登录校验规则
export const PhoneCodeRules = reactive<FormRules>({
  phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
  smsCode: [{ required: true, message: '请输入短信验证码', trigger: 'blur' }],
  imgCode: [{ required: true, message: '请输入图片验证码', trigger: 'blur' }]
})

//账号登录校验规则
export const UserLoginRules = reactive<FormRules>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  imgCode: [{ required: true, message: '请输入图片验证码', trigger: 'blur' }]
})
