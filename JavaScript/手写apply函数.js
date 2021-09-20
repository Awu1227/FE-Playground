Function.prototype.apply = function (context, args) {
  let context = context || window
  context.fn = this
  let result = eval('context.fn(...args)')

  delete context.fn
  return result
}