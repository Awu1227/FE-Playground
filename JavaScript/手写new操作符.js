function myNew(fn, ...args) {
  let obj = Object.create(fn.prototype)
  let res = fn.call(obj, ...args)
  if (res && (typeof res === "object" || typeof res === "function")) {
    return res
  }
  return obj
}