import axios from 'axios'
import { store } from '@/setup'

axios.interceptors.response.use((response) => {
  if(response.status === 401) {
    store.dispatch('logout', true)
  }
  return response;
}, (error) => {
  if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
  }
  return Promise.reject(error.message);
})

const query = (action, url, params) => {
  return axios[action](url, params)
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
    get: (action, params) => query('get', baseUrl + action, params),
    post: (action, params) => query('post', baseUrl + action, params)
  }
}
