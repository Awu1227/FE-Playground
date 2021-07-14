function fn1(a, b, c) {
  console.log("this", this)
  console.log(a, b, c)
  return "this is fn1"
}
// const fn2 = fn1.bind({ x: 100 }, 10, 20, 30)
// fn2()

Function.prototype.bind1 = function () {
  // 获取参数数组
  const args = Array.prototype.slice.call(arguments)
  // 获取第一项
  const t = args.shift()
  //fn1.bind(...)中的bind
  const self = this
  // 返回一个函数
  return function () {
    return self.apply(t, args)
  }
}
const fn3 = fn1.bind1({ x: 100 }, 10, 20, 30)
fn3()
