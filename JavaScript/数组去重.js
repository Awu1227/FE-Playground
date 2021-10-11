
//  传统方式
function unique1(arr) {
  const res = [];
  arr.forEach(item => {
    if (res.indexOf(item) < 0) {
      res.push(item)
     }
  })
  return res
}

// 使用Set
function unique2(arr) {
  const set = new Set(arr)
  return [...set]
}
const res = unique2([1, 1, 2, 3, 4, 4, 5])
console.log(res) // [1,2,3,4,5]