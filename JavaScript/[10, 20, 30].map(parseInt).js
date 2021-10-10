const res = [10, 20, 30].map(parseInt)
console.log(res); // [10, NaN, NaN]

// 拆解
[10, 20, 30].map((num, index) => {
  return parseInt(num, index)
})