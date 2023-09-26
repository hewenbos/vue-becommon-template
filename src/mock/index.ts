import Mock from 'mockjs'
const Random = Mock.Random
import { user } from './userData'
import './menuData'
Mock.mock('/api/login/username', (options) => {
  console.log(options)
  if (!options || !options.body) {
    return {
      code: 101,
      message: '参数不能为空'
    }
  }
  const data = JSON.parse(options.body)
  if (!data.username || !data.password || !data.imgcode) {
    return {
      code: 101,
      message: '参数不能为空'
    }
  }

  if (data.username === 'admin' && data.password === '123456') {
    return {
      code: 888,
      message: '',
      data: user,
      token: Random.string(64)
    }
  }

  return {
    code: 102,
    message: '用户名或密码错误'
  }
})
