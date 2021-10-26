> Promise是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理且更强大。

> 所谓的Promise，简单来说就是一个容器，里面保存着某个未来才会结束的事件。

`Prmise对象有以下两个特点：`
1. 对象的状态不受外界影响。
2. 一旦状态改变就不会再变，任何时候都可以得到这个结果。

`Promise的缺点：`
1. 无法取消Promise，一旦新建它就会立即执行，无法中途取消。
2. 如果不设置回调函数，Promise内部抛出的错误不会反应到外部。
3. 当处于Pending状态时，无法得知目前1进展到哪一个阶段（刚刚开始还是即将完成）。

## 1. 基本用法

> Promise是一个构造函数，用来生成Promise实例。
```js
var promise = new Promise((resolve, reject) => {
  // ...some code
  if (/*异步操作成功*/) {
    resolve(value)
  } else {
    reject(error)
  }
})
```
> Promise实例生成以后，可以用then方法分别指定Resolved状态和Rejected状态的回调函数。
```js
promise.then(function(value) {
  // success
}, function(error) {
  // failure
})
```
> Promise对象的简单例子
```js
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done')
  })
}
timeout(100).then(value => {
  console.log(value)
})
```
> 异步加载图片的例子
```js
function loadImageAsync(url) {
  return new Promise((resolve, reject) => {
    var image = new Image();
    // 加载成功调用resolve方法
    image.onload = function() {
      resolve(image)
    }
    // 加载失败调用reject方法
    image.onerror = function() {
      reject(new Error('Could not load image at ' + url))
    }
    image.src = url
  })
}
```
> Promise实现AJAX操作
```js
var getJSON = function(url) {
  var promise = new Promise((resolve, reject) => {
    var client = new XMLHttpRequest()
    client.open('GET', url)
    client.onreadystatechange = handler
    client.responseType = 'json'
    client.setRequestHeader('Accept', 'application/json')
    client.send()
    function handler() {
      if (this.readyState !== 4) {
        return
      }
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
  })
  return promise
}
getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json)
}, function(error) {
  console.log('出错了'，error)
})
```
> resolve函数的参数除了正常的值外，还有可能是另一个Promise实例，比如下面这样：
```js
var p1 = new Promise(function(resolve, reject) {
  // ...
})
var p2 = new Promise(function(resolve, reject) {
  // ...
  resolve(p1)
})
```
**此时p1的状态就会传递给p2。也就是说，p1的状态决定了p2的状态。如果p1的状态是Pending，那么p2的回调函数就会等待p1的状态改变；如果p1的状态已经是Resolved或Rejected，那么p2的回调函数将会立刻执行。**
```js
var p1 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("fail")), 3000)
})
var p2 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})
p2
.then(result => console.log(result))
.catch(error => console.log(error))
// output: Error: fail
```
> 调用resolve或reject并不会终结Promise的参数函数的执行。
```js
new Promise((resolve, reject) => {
  resolve(1)
  console.log(2)
}).then(r => {
  console.log(r)
})
// 2
// 1
```
**上述打印结果因为立即resolved的Promise是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。**
> 一般来说，调用resolve或reject以后，Promise的使命就完成了。
```js
new Promise((resolve, reject) => {
  return resolve(1)
  // 后面的语句不会执行
  console.log(2)
})
```
## 2. Promise.prototype.then()
> 它的作用是为Promise实例添加状态改变时的回调函数。then方法的第一个参数是Resolved状态的回调函数，第二个参数（可选）是Rejected状态的回调函数。

> then方法可以采用链式写法
```js
getJSON("/posts.json").then(function(json) {
  return json.post
}).then(function(post) {
  // ...
})
```
> 采用链式的then可以指定一组按照次序调用的回调函数。
```js
getJSON("/post/1.json").then(
  post => getJSON(post.commentURL)
).then(
  comments => console.log("Resolved: ", comments),
  err => console.log("Rejected: ", err)
)
```
## 3. Promise.prototype.catch()
> Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
```js
var promise = new Promise(function(resolve, reject) {
  throw new Error("test")
})
promise.catch(function(error) {
  console.log(error)
})
// output: Error: test
```
> 如果Promise状态已经变成Resolved，再抛出错误是无效的。
```js
var Promise = new Promise(function(resolve, reject) {
  resolve('ok')
  throw new Error("test")
})
promise
  .then(value => console.log(value))
  .catch(error => console.log(error))
// ok
```
**因为Promise的状态一旦改变，就会永久保持该状态，不会再改变了。**
> 一般来说，不要在then方法中定义Rejected状态的回调函数（即then的第二个参数），而应总是使用catch方法。
```js
// bad
promise.then(function(data) {
  // success
}, function(error) {
  // error
})

// good
promise.then(function(data) {
  // success
}).catch(function(error) {
  // error
})
```
> catch方法还能再抛出错误，第二个catch方法用来捕获前一个catch方法抛出的错误。
```js
someAsyncThing().then(function() {
  return someAsyncThing();
}).catch(function(error) {
  console.log('oh no', error);
  // 下面一行会报错，因为y没有声明
  y + 2
}).catch(function(error) {
  console.log('carry on', error);
})
// oh no [ReferenceError: x is not defined]
// carry on [ReferenceError: y is not defined]
```