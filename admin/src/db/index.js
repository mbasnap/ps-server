import axios from 'axios'
import { store } from '@/setup'

axios.interceptors.response.use((response) => {
  

  return response;
}, async (error) => {
  if(error.response.status === 401) {
    const user = await store.dispatch('updateUser')
    user && store.dispatch('logout', true)
  }
  if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
  }
  return Promise.reject(error.message);
})

const query = (method, url, params) => {
  return axios[method](url, params)
    .then(res => res.data)
}

const setHeaders = (name, token) => {
  const headers = axios.defaults.headers.common
  if (token) headers[name] = token
  else delete headers[name]
}

export const getToken = (name) => {
  const token = localStorage.getItem(name)
  setHeaders(name, token)
}

export const db = (name = '') => {
  const baseUrl = '/api' + name
  return {
    get: (method, params) => query('get', baseUrl + method, params),
    post: (method, params) => query('post', baseUrl + method, params)
  }
}
