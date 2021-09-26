Function.prototype.call = function (context, ...args) {
  let context = context || window
  let fn = Symbol('fn')
  context.fn = this
  let result = eval('contex.fn(...args)')
  delete context.fn
  return result
}