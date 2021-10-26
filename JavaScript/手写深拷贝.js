// 假设B复制了A，当修改A时，当B是否会发生变化，如果B也跟着发生了变化，说明这是浅拷贝；
// 如果B没变，那就是深拷贝
const obj1 = {
  name: "橙子",
  age: 18,
  address: {
    city: "上海",
  },
  arr: ["a", "b", "c"],
}
// 浅拷贝
function simpleClone (newObj) {
  var obj = {}
  for (var key in newObj) {
    obj[key] = newObj[key]
  }
  return obj
}
// 深拷贝
function deepClone(obj) {
  if (typeof obj !== 'object' || obj == null) {
    // obj是null，或者不是对象和数组，直接返回
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
    // 保证key不是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key])
    }
  }
  return result
}
obj2 = deepClone(obj1)
obj2.name = "柚子"
console.log(obj1.name)