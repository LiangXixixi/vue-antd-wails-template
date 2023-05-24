declare type AxiosHeaders =
  | 'application/json'
  | 'application/x-www-form-urlencoded'
  | 'multipart/form-data'

declare type AxiosConfig = {
  params?: any
  data?: any
  url?: string
  method?: AxiosMethod
  headersType?: string
}

declare type AxiosMethod = 'get' | 'post' | 'delete' | 'put'

// declare module 'vue-loading-overlay'