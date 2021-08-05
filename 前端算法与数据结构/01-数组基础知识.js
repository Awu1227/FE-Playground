// 数组的创建
const arr1 = [1, 2, 3, 4]
const arr2 = new Array()
const arr3 = []
const arr4 = new Array(7).fill(1)// 当你给 fill 传递一个入参时，如果这个入参的类型是引用类型，那么 fill 在填充坑位时填充的其实就是入参的引用

// 数组的访问和遍历
// 1. for循环
// 获取数组的长度
const len = arr1.length
for(let i=0;i<len;i++) {
    // 输出数组的元素值，输出当前索引
    console.log(arr1[i], i)
}
// 2. forEach方法
arr1.forEach((item, index)=> {
  // 输出数组的元素值，输出当前索引
  console.log(item, index)
})
// 3. map方法；map 方法会根据你传入的函数逻辑对数组中每个元素进行处理、进而返回一个全新的数组。
const newArr = arr1.map((item, index)=> {
  // 输出数组的元素值，输出当前索引
  console.log(item, index)
  // 在当前元素值的基础上加1
  return item+1
})
// 从性能上看，for循环遍历起来是最快的

// 初始化二维数组
const arr5 = []
for (let i = 0; i < arr5.length; i++){
  // 将数组每一个坑位初始为数组
  arr5[i]=[]
}

// 二维数组的访问：两层循环
// 缓存外部数组的长度
const outerLen = arr5.length
for(let i=0;i<outerLen;i++) {
    // 缓存内部数组的长度
    const innerLen = arr5[i].length
    for(let j=0;j<innerLen;j++) {
        // 输出数组的值，输出数组的索引
        console.log(arr5[i][j],i,j)
    }
}// N维数组需要N层循环来完成遍历