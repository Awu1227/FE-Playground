// 异步（callback 回调函数）
// 异步的特点是不会阻塞后面代码的执行
console.log(100)
setTimeout(() => {
  console.log(200)
}, 1000)
console.log(300)

// 同步
console.log(400)
alert(500)
console.log(600)
