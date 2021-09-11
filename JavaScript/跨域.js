// 跨域是由于浏览器的同源策略引起的，协议，域名和端口号有一个不同就是跨域，主要是为了防止CSRF攻击

// 解决方案：
// JSONP , CORS

// JSONP
function jsonp(url, jsonpCallback, success) {
  let script = document.createElement('script')
  script.src = url
  script.async = true
  script.type = 'text/javascript'
  window[jsonpCallback] = function (data) {
    success&&success(data)
  }
  document.body.appendChild(script)
}

jsonp('http://xxx', 'callback', function (value) {
  console.log(value);
})

// CORS
// 需要浏览器和后端同时支持
// 服务器端设置Access-Control-Allow-Origin就可以开启CORS