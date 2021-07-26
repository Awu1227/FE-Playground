// 深拷贝
const obj1 = {
  name: "橙子",
  age: 18,
  address: {
    city: "上海",
  },
  arr: ["a", "b", "c"],
}
obj2 = deepClone(obj1)
obj2.name = "柚子"
console.log(obj1.name)
function deepClone(obj) {
  // obj是null或者不是对象和数组直接返回
  if (typeof obj !== 'object'|| obj == null) {
    return obj
  }
  // 初始化返回结果
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
    // 保证key不是原型上的属性
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result
}
