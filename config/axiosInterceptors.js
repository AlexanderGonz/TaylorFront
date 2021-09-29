import axios from 'axios'

axios.interceptors.request.use(request => {
  if (localStorage.taylorAuthToken && request.url.indexOf('auth') === -1) {
    request.headers['Authorization'] = `${window.localStorage.taylorAuthToken}`
  }
  return request
})

axios.interceptors.response.use(null, err => {
  if (err.message === 'Request failed with status code 401') {
    localStorage.clear()
    window.location = '/'
  }
  return Promise.reject(err)
})