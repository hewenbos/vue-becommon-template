export type LoginResponseType = {
  id: number
  name: string
  header: string
  account: string
  phone: string
  email: string
  address: string
  roles: RolesType
  permission: permissionType[]
  descrption: string
}

export type permissionType = {
  entity: string
  permissions: string[]
}

export type RolesType = {
  name: string
}

export type accountLoginType = {
  imgcode: string
  password: string
  username: string
}
