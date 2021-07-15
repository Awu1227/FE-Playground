// 第一题
Promise.resolve()
  .then(() => {
    console.log(1)
  })
  .catch(() => {
    console.log(2)
  })
  .then(() => {
    console.log(3)
  })

// 第二题
Promise.resolve()
  .then(() => {
    console.log(1)
    throw new Error("error")
  })
  .catch(() => {
    console.log(2)
  })
  .then(() => {
    console.log(3)
  })

// 第三题
Promise.resolve()
  .then(() => {
    console.log(1)
    throw new Error("error")
  })
  .catch(() => {
    console.log(2)
  })
  .catch(() => {
    console.log(3)
  })
