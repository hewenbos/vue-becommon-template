import type { DefineComponent } from 'vue'

export type LoginComponent = {
  name: string
  componentName: DefineComponent<{}, {}, any>
}
//免密登录类型校验
export interface RuleForm {
  phone: string
  smsCode: string
  imgCode: string
  isChecked: boolean
}

//账号登录类型校验
export interface LoginUserFromType extends Pick<RuleForm, 'imgCode'> {
  username: ''
  password: ''
  isUsername: boolean
  isPassword: boolean
}
