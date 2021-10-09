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
        this.rejectCallbacks.forEach(fn => fn(this.value))
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
  }
}
