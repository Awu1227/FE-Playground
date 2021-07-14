// class实现
// class Student {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   sayHi() {
//     console.log(`你好，我是${this.name}~`)
//   }
// }
// let chengzi = new Student("橙子", 18)
// console.log(chengzi.name)
// console.log(chengzi.age)
// chengzi.sayHi()

// 继承

// 父类
class People {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name}eat something~`)
  }
}

// 子类（学生）
class Student extends People {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  sayHi() {
    console.log(`你好，我是${this.name},我的学号是${this.number}`)
  }
}

// 子类（老师）
class Teacher extends People {
  constructor(name, major) {
    super(name)
    this.major = major
  }
  teach() {
    console.log(`我是${this.name},我教授的学科是${this.major}`)
  }
}
let chengzi = new Student("橙子", 18)
let dinglaoshi = new Teacher("王老师", "数学")
console.log(chengzi.name)
console.log(dinglaoshi.name)
chengzi.sayHi()
dinglaoshi.teach()
