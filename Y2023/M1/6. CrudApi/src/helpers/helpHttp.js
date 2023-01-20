export default httpsRequest = () => {
    const customFetch = (endpoint,options) => {

        //Default Headers
        const defaultHeaders = {
            accept:'application/json',
        }
        
        //Setting headers
        options.headers = options.headers?{...defaultHeaders,...options.headers}:defaultHeaders;

        //Setting body
        if(options.body){options.body = JSON.stringify(options.body)}

        //Setting abort controller
        const abortController =new AbortController(); 
        options.signal=abortController.signal;
        setTimeout( ()=>{abortController.abort()} ,3000)

        return fetch(endpoint, options)
      .then((res) =>
        res.json()
      )
      .catch((err) => {return{error:err}});
    }

    const get = (endpoint,options= {}) => {
        options.method = 'GET'
        return customFetch(endpoint,options)
    }

    const post = (endpoint,options= {}) => {
        options.method = 'POST'
        options.headers ={"Content-Type": "application/json"}
        return customFetch(endpoint,options)
    }

    const del = (endpoint,options= {}) => {
        options.method = 'DELETE'
        return customFetch(endpoint,options)
    }

    const put = (endpoint,options= {}) => {
        options.method = 'PUT'
        options.headers ={"Content-Type": "application/json"}
        return customFetch(endpoint,options)
    }

    return { get, post, del, put }
}