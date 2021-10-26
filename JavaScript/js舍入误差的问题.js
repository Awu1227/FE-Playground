console.log(0.1 + 0.2); // 0.30000000000000004

// 方案1
console.log(parseFloat(0.1 + 0.2).toFixed(2)); 
// 方案2
function add(num1, num2) {
  m = Math.pow(10, 2)
  return (num1 * m + num2 * m) / m
}

console.log(add(0.1, 0.2)); // 0.3