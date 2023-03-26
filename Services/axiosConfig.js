import { COOKIE } from '@/common/constant'
import axios from 'axios'
import Cookies from 'js-cookie'

// const tokenUser = Cookies.get('tokenUser')
// console.log('tokenUser - send api', tokenUser)
// console.log('tokenUser - send api 2', (Cookies.get('tokenUser'))?.length)

const defaultOptions = {
  baseURL: process.env.NEXT_PUBLIC_URI_NFT,
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}
const BaseAPI = axios.create(defaultOptions)

BaseAPI.interceptors.request.use(
  async config => {
    const tokenUser = Cookies.get(COOKIE.TOKEN_USER)

    if (config?.headers?.Authorization === undefined) {
      config.headers.Authorization = tokenUser?.length > 0 ? `ThanhCong ${tokenUser}` : ''
    }

    return config
  },
  error => {
    Promise.reject(error)
  })

export { BaseAPI }
