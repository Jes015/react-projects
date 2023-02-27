
export default function helpHttp () {
  const customHttp = (url, options) => {
    return fetch(url, options).then(res => res.json()).catch(err => { return { error: err } })
  }

  const httpRequest = (method, url, options = {}) => {
    options.method = method.toUpperCase()

    return customHttp(url, options)
  }

  return httpRequest
}
