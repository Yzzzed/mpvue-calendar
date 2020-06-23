import fly from 'flyio'

function createFly () {
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  } else {
    return null
  }
}

function handleResponse (res, resolve, reject) {
  if (res && res.data && res.data.error_code === 0) {
    resolve(res)
  } else {
    reject(res)
  }
}

function handleError (err) {
  console.log(err.status, err.message)
}

export function get (url, data = null, options = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.get(url, data).then(res => handleResponse(res, resolve, reject)).catch(err => handleError(err))
    })
  }
}

export function post (url, data = null, options = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.post(url, data).then(res => handleResponse(res, resolve, reject)).catch(err => handleError(err))
    })
  }
}

export function patch (url, data = null, options = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.patch(url, data).then(res => handleResponse(res, resolve, reject)).catch(err => handleError(err))
    })
  }
}

export function put (url, data = null, options = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.put(url, data).then(res => handleResponse(res, resolve, reject)).catch(err => handleError(err))
    })
  }
}

export function del (url, data = null, options = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.delete(url, data).then(res => handleResponse(res, resolve, reject)).catch(err => handleError(err))
    })
  }
}
