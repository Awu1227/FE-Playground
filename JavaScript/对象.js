"use strict";
// 一、数据属性
let fruits = {}
Object.defineProperty(fruits, 'name', {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "橙子"
})
console.log(fruits.name);

// 创建不可配置的属性
let person = {}
Object.defineProperty(person, 'name', {
  configurable: false,
  value: "Bob"
})
console.log(person.name);
// delete person.name;
console.log(person.name);

// 一个属性被定义为不可配置之后，就不能再变回可配置的了

// 二、访问器属性（getter和setter）
let book = {
  year_: 2021,
  edition: 1
}
Object.defineProperty(book, 'year', {
  get() {
    return this.year_
  },
  set(newValue) {
    if (newValue > 2021) {
      this.year_ = newValue
      this.edition += newValue - 2021
    }
  }
})
book.year = 2023
console.log(book.edition);

// 读取属性的特征Object.getOwnPropertyDescriptor()


