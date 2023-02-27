const defaultHeaders = { accept: 'application/json' }

const http = () => {
  const customHttp = (url, options = {}) => {
    options.headers = { ...options.headers, ...defaultHeaders }

    if (options.body) options.body = JSON.stringify(options.body)

    const abortController = new AbortController()
    options.signal = abortController.signal
    setTimeout(() => { abortController.abort() }, 3000)

    return fetch(url, options).then(res => res.json()).catch(err => { return ({ error: err }) })
  }

  const get = (url, options) => {
    options.method = 'GET'
    return customHttp(url, options)
  }
  const post = (url, options) => {
    options.method = 'POST'
    return customHttp(url, options)
  }
  const del = (url, options) => {
    options.method = 'DELETE'
    return customHttp(url, options)
  }

  const update = (url, options) => {
    options.method = 'UPDATE'
    return customHttp(url, options)
  }

  return { get, post, del, update }
}
export default http
