export type AxiosCreateType = {
  baseURL: string
  timeout: number
  headers?: {
    'Content-Type': string
  }
  withCredentials?: boolean
  ResponseType?: string
  responseEncoding?: string
}

export type Data<T> = {
  code: number
  message: string
  data?: T
  token?: string
}
