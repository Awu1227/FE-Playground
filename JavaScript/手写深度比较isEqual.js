function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}
// 全相等
function isEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    // 值类型（注意，参与equal的一般不会是函数）
    return obj1 === obj2
  }
  if (obj1 === obj2) {
    return true
  }
  // 两个都是对象或数组，而且不相等
  // 1. 先取出obj1和obj2的keys, 比较个数
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)
  if (obj1Keys.length !== obj2Keys.length) {
    return false
  }
  // 2. 以obj1为基准，和obj2一次递归比较
  for (let key in obj1) {
    // 比较当前key的val ——递归
    const res = isEqual(obj1[key], obj2[key])
    if (!res) {
      return false
    }
  }
  return true
}

// 测试
const obj1 = {
  a: 100,
  b: {
    x: 200,
    y: 300
  }
}
const obj2 = {
  a: 100,
  b: {
    x: 200,
    y: 300
  }
}
console.log(isEqual(obj1, obj2));