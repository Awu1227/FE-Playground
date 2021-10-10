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

// 静态API实现
MyPromise.resolve = function (value) {
  return new MyPromise((resolve, reject) => resolve(value))
}

MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => reject(reason))
}

MyPromise.all = function (promiseList = []) {
  const p1 = new MyPromise((resolve, reject) => {
    const result = [] // 存储promiseList所有的结果
    const length = promiseList.length
    let resolveCount = 0

    promiseList.forEach(p => {
      p.then(data => {
        result.push(data)
        // resolveCount 必须在then里面做++
        resolveCount++
        if (resolveCount === length) {
          resolve(result)
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
  return p1
}

MyPromise.race = function (promiseList = []) {
  let resolved = false // 标记
  const p1 = new MyPromise((resolve, reject) => {
    promiseList.forEach(p => {
      p.then(data => {
        if (!resolved) {
          resolve(data)
          resolved = true
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
  return p1
}
// 测试
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
console.error(error)
})
const p2 = MyPromise.resolve(200)
const p3 = MyPromise.reject('错误信息是...')
const p4 = MyPromise.all([p1,p2]) // 传入promise数组，等待所有的都fulfilled之后，返回新的promise,包含前面所有的结果
p4.then(data => console.log(data))
const p5 = MyPromise.race([p1, p2]) // 传入promise数组，只要有一个fulfilled即可返回
console.log(p5);
