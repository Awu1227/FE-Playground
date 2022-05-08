// ES5中的类
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// Point.prototype.toString = function () {
//   return "(" + this.x + ", " + this.y + ")";
// };
// var p = new Point(1, 2);
// console.log(p.toString());

// ES6中的类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return "(" + this.x + ", " + this.y + ")";
  }
}

console.log(typeof Point); // "function"
console.log(Point === Point.prototype.constructor); // true

// 类所有的方法都定义在prototype对象上面

// 类的内部所有定义的方法，都是不可枚举的, 这一点与ES5不同

// 如果没有显示定义constructor方法，一个类会自动生成一个默认的constructor方法
// constructor方法默认返回实例对象，完全可以指定返回其他对象

// 类的所有实例共享一个原型对象
var p1 = new Point(1, 2);
var p2 = new Point(3, 4);
p1.__proto__ === p2.__proto__; // true

// 取值函数与设值函数
class Myclass {
  constructor() {}
  get name() {
    return "Myclass";
  }
  set name(value) {
    console.log("set name: " + value);
  }
}
var myclass = new Myclass();
console.log(myclass.name); // "Myclass"
myclass.name = "Myclass2"; // "set name: Myclass2"
// 取值函数与设值函数是设置在descriptor对象上面的

// class表达式
const MyClass1 = class Me {
  constructor() {}
  getClassName() {
    return Me.name;
  }
};
// Me只有在class内部才能访问到
// Me还可以省略

// 立即执行的class表达式
let person = new (class {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
})("张三");
person.sayName(); // "张三"

// 静态方法
// 静态方法不会被实例继承，而是直接通过类来调用
class Foo {
  static classMethod() {
    return "hello";
  }
}
Foo.classMethod(); // "hello"

// 如果静态方法包含this关键字，那么这个this指的是类本身,而不是实例。
// 父类的静态方法，可以被子类继承

// 实例属性除了定义在constructor方法里面的this上，也可以定义在类的最顶层
class IncreasingCounter {
  _count = 0;
  get value() {
    return this._count;
  }
  increment() {
    this._count++;
  }
}

// 私有属性的提案
class Point {
  #x;

  constructor(x = 0) {
    this.#x = +x;
  }

  get x() {
    return this.#x;
  }

  set x(value) {
    this.#x = +value;
  }
}

// in运算符可以判断是否存在某个私有属性
class A {
  use(obj) {
    if (#x in obj) {
      console.log(obj.#x);
    } else {
      console.log("not found");
    }
  }
}
const a = new A();
a.use(a); // 1
