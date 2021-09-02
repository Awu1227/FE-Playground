// this
function fn1() {
  console.log(this)
}
fn1() // Window
fn1.call({ x: 100 }) // {x:100}
const fn2 = fn1.bind({ x: 200 })
fn2() // {x:200}

// 作为对象方法被调用
const chenzgi = {
  name: "橙子",
  sayHi() {
    console.log(this.name) // '橙子'
  },
  wait() {
    setTimeout(function () {
      console.log(this) // Window
    }, 1000)
  },
}

// 在class方法中被调用
class People {
  constructor(name) {
    this.name = name
    this.age = 18
  }
  sayHi() {
    console.log(this)
  }
}
const chengzi = new People()
chengzi.sayHi() // chengzi对象
