# 手写出的Promise要实现的功能:

- 初始化&异步调用
- then catch 链式调用
- API .resolve .reject .all .race

```js
const p1 = new MyPromise((resolve, reject) => {
    resolve(100)
    // setTimeout(()=>{
    //   resolve(100)
    // }, 500)
})
const p11 = p1.then(data => {
  return data + 1
}).then(data => {
  return data + 2
}).catch(err => {
  console.error(error)
})
const p2 = MyPromise.resolve(200)
const p3 = MyPromise.reject('错误信息是...')
const p4 = MyPromise.all(p1, p2)
const p5 = MyPromise.race(p1, p2)
```