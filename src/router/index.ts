import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/index.vue'
import RecoverPassword from '../views/RecoverPassword/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/RecoverPassword',
      name: 'RecoverPassword',
      component: RecoverPassword
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: '/Index/Cutomer/Table',
          name: 'IndexCutomerTable',
          component: () => import('@/views/BusinessMenu/IndexCutomerTable/index.vue')
        },
        {
          path: '/Index/Cutomer/TreeTable',
          name: 'IndexCutomerTreeTable',
          component: () => import('@/views/BusinessMenu/IndexCutomerTreeTable/index.vue')
        },
        {
          path: '/Index/Cutomer/Form',
          name: 'IndexCutomerForm',
          component: () => import('@/views/BusinessMenu/IndexCutomerForm/index.vue')
        },
        {
          path: '/Index/Cutomer/Info',
          name: 'IndexCutomerInfo',
          component: () => import('@/views/BusinessMenu/IndexCutomerInfo/index.vue')
        },
        {
          path: '/Index/Cutomer/File',
          name: 'IndexCutomerFile',
          component: () => import('@/views/BusinessMenu/IndexCutomerFile/index.vue')
        },
        {
          path: '/Index/Cutomer/Chart',
          name: 'IndexCutomerChart',
          component: () => import('@/views/BusinessMenu/IndexCutomerChart/index.vue')
        },
        {
          path: '/Index/Home',
          name: 'IndexHome',
          component: () => import('@/views/IndexHome/index.vue')
        },
        {
          path: '/Index/Cutomer/MapChart',
          name: 'IndexCutomerMapChart',
          component: () => import('@/views/BusinessMenu/IndexCutomerMapChart/index.vue')
        },
        {
          path: '/Index/Cutomer/RichForm',
          name: 'IndexCutomerRichForm',
          component: () => import('@/views/BusinessMenu/IndexCutomerRichForm/index.vue')
        },
        {
          path: '/Index/Data/Entity',
          name: 'IndexDataEntity',
          component: () => import('@/views/BasicData/IndexDataEntity/index.vue')
        },
        {
          path: '/Index/Data/Message',
          name: 'IndexDataMessage',
          component: () => import('@/views/BasicData/IndexDataMessage/index.vue')
        },
        {
          path: '/Index/Data/MessageRead',
          name: 'IndexDataMessageRead',
          component: () => import('@/views/BasicData/IndexDataMessageRead/index.vue')
        },
        {
          path: '/Index/Data/Code',
          name: 'IndexDataCode',
          component: () => import('@/views/BasicData/IndexDataCode/index.vue')
        },
        {
          path: '/Index/System/user',
          name: 'IndexSystemUser',
          component: () => import('@/views/SystemManagement/IndexSystemUser/index.vue')
        },
        {
          path: '/Index/System/Role',
          name: 'IndexSystemRole',
          component: () => import('@/views/SystemManagement/IndexSystemRole/index.vue')
        },
        {
          path: '/Index/System/Permission',
          name: 'IndexSystemPermission',
          component: () => import('@/views/SystemManagement/IndexSystemPermission/index.vue')
        },
        {
          path: '/Index/System/Menu',
          name: 'IndexSystemMenu',
          component: () => import('@/views/SystemManagement/IndexSystemMenu/index.vue')
        },
        {
          path: '/Index/System/Dict',
          name: 'IndexSystemDict',
          component: () => import('@/views/SystemManagement/IndexSystemDict/index.vue')
        },
        {
          path: '/Index/Data/Cache',
          name: 'IndexDataCache',
          component: () => import('@/views/SystemManagement/IndexDataCache/index.vue')
        },
        {
          path: '/Index/System/Log',
          name: 'IndexSystemLog',
          component: () => import('@/views/SystemManagement/IndexSystemLog/index.vue')
        },
        {
          path: '/Index/System/Setting',
          name: 'IndexSystemSetting',
          component: () => import('@/views/SystemManagement/IndexSystemSetting/index.vue')
        }
      ]
    }
  ]
})

export default router
