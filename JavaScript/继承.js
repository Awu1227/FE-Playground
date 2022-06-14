function SuperType(name) {
  this.name = name;
  this.property = true;
  this.colors = ["red", "blue", "green"];
}
// 原型链继承
function SubType1() {
  this.subproperty = false;
}
SubType1.prototype = new SuperType();

// 盗用构造函数继承（可以向父类传参数）
// 缺点：必须在构造函数中定义方法，函数不能重用，而且，子类也不能访问父类原型上定义的方法
function SubType2() {
  SuperType.call(this, "John");
}

// 组合继承（综合原型链和盗用构造函数，使用最多的继承模式）
// 优点：既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性。
function SubType3(name, age) {
  SuperType.call(this, name);
  this.age = age;
}
SubType3.prototype = new SuperType();

// 原型式继承
// 适合不需要单独创建构造函数，但仍需要在对象间共享信息的场合。属性中包含的引用值始终会在相关对象之间共享。
let person = {
  name: "John",
  friends: ["Sara", "Tom"],
};
let anotherPerson = Object.create(person);
anotherPerson.name = "Sara";
anotherPerson.friends.push("Jen");
let yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Tom";
yetAnotherPerson.friends.push("Bob");
console.log(person.friends); // ["Sara", "Tom", "Jen", "Bob"]

// 寄生式继承
// 背后的思路类似于寄生构造函数和工厂模式：创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象。
// 给对象添加函数会导致函数难以重用，与盗用构造函数模式类似。
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
function createAnother(original) {
  let clone = Object.create(original);
  clone.sayHi = function () {
    console.log("Hi");
  };
  return clone;
}

// 寄生组合式继承(最佳模式)
// 通过盗用构造函数继承属性，但使用混合式原型链继承方法。
// 基本思路是不通过调用父类构造函数来给子类原型赋值，而是取得父类原型的一个副本。
function inheritPrototype(subType, superType) {
  let prototype = object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}
function SubType4(name, age) {
  SuperType.call(this, name);
  this.age = age;
}
inheritPrototype(SubType4, SuperType);
SubType4.prototype.sayAge = function () {
  console.log(this.age);
};
let subType4 = new SubType4("John", 20);
console.log(subType4.name); // John
console.log(subType4.property); // true
subType4.sayAge(); // 20
