function muti(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num + num)
    }, 1000)
  })
}
const nums = [1, 2, 3]
!(async function () {
  for (let i of nums) {
    let res = await muti(i)
    console.log(res)
  }
})()
