/**
 * @description MyPromise
 */
class MyPromise {
  state = 'pending' // 状态，'pending' 'fulfilled' 'rejected'
  value = undefined // 成功后的值
  reason = undefined // 失败后的原因

  resolveCallbacks = [] // pending状态下，存储成功的回调
  rejectCallbacks = [] // pending状态下，存储失败的回调

  constructor(fn) {
    const resolveHandler = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.resolveCallbacks.forEach(fn => fn(this.value))
      }
    }
    const rejectHandler = reason => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        this.rejectCallbacks.forEach(fn => fn(this.reason))
      }
    }
    try {
      fn(resolveHandler, rejectHandler)
    } catch (error) {
      rejectHandler(error) 
    }
  }
  then(fn1, fn2) {
    // 当pending状态下，fn1，fn2会被存储到callbacks中 
    fn1 = typeof fn1 === 'function' ? fn1 : v => v
    fn2 = typeof fn2 === 'function' ? fn2 : e => e

    if (this.state === 'pending') {
      const p1 = new MyPromise((resolve, reject) => {
        this.resolveCallbacks.push(() => {
          try {
            const newValue = fn1(this.value)
            resolve(newValue)
          } catch (error) {
            reject(error)
          }
        })

        this.rejectCallbacks.push(() => {
          try {
            const newReason = fn2(this.reason)
            reject(newReason)
          } catch (error) {
            reject(error)
          }
        })
      })
      return p1
    }

    if (this.state === 'fulfilled') {
      const p1 = new MyPromise((resolve, reject) => {
        try {
          const newValue = fn1(this.value)
          resolve(newValue)
        } catch (error) {
          reject(error)
        }
      })
      return p1
    }
    if (this.state === 'rejected') {
      const p1 = new MyPromise((resolve, reject) => {
        try {
          const newReason = fn2(this.reason)
          reject(newReason)
        } catch (error) {
          reject(error)
        }
      })
      return p1
    }
  }

  // 就是then的一个语法糖，简单模式
  catch(fn) {
    return this.then(null, fn)
  }
}
const p1 = new MyPromise((resolve, reject) => {
  resolve(100)
  // setTimeout(()=>{
  //   resolve(100)
  // }, 500)
})
const p11 = p1.then(data => {
  console.log('data1=>',data);
return data + 1
}).then(data => {
  console.log('data2=>',data);
return data + 2
}).catch(err => {
console.error(err)
})
