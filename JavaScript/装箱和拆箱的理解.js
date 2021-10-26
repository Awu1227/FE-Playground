
// 装箱： 把基本数据类型转化为对应的引用数据类型的操作；
var num = 123 // number
var objNum = new Number(123) // object
console.log(typeof objNum);

// 拆箱： 把引用类型对象转化为对应的值类型对象；
// valueOf()
var objNum2 = new Number(123)
console.log(typeof objNum2.valueOf()) // number
// js toPrimitive(input, type) input：传入的值 type：值类型
// 1. 判断是不是原始类型的值： 是 直接返回
// 2. 不是：调用valueOf() ：是 原始类型 直接返回
// 3. 还不是： 调用toString() ：string 是 原始类型 返回
// 4. 报错

// 面试题 
console.log([] + []); // ''
console.log([] + {}); // [object Object]
console.log({} + []); // [object Object] || 0({}会被当成代码块)