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
  if (typeof obj === 'object' || typeof obj == null) {
    return obj
  }
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj.key)
    }
  }
  return result
}
