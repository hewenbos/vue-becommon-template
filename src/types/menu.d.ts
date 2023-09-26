export type MenuResponseType = {
  name: string
  path: string
  icon: string
  createDate: number
  description: string
  id: number
  components: string
  requiresAuth: boolean
  children: MenuResponseType[]
  permissions: string[]
}
