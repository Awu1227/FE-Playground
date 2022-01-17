> ES6 中的类与其他语言中的还是不太一样，其语法的设计实际上借鉴了 JavaScript 的动态性。

# 1. ECMAScript5 中的近类结构

> 首先创建一个构造函数，然后定义另一个方法并赋值给构造函数的原型。

```js
function PersonType(name) {
  this.name = name;
}

PersonType.prototype.sayName = function () {
  console.log(this.name);
};

let person = new PersonType("Awu");
person.sayName(); // outputs "Awu"
console.log(person instanceof PersonType); // outputs true
console.log(person instanceof Object); // outputs true
```

由于存在原型继承的特性，因而`它也是 Object 的实例`，许多模拟类的 JavaScript 库都是基于这个模式开发。

# 2. 类的声明

## 基本的类声明语法

> 要声明一个类，首先编写 class 关键字，紧跟着的是类的名字，其他部分的语法类似于对象字面量方法的简写形式，但不需要在类的各元素之间使用逗号分隔。

```js
class PersonClass {
  // 等价于PersonType构造函数
  constructor(name) {
    this.name = name;
  }

  // 等价于PersonType.prototype.sayName
  sayName() {
    console.log(this.name);
  }
}

let person = new PersonClass("Awu");
person.sayName(); // outputs "Awu"

console.log(person instanceof PersonClass); // true
console.log(person instanceof Object); // true
```

私有属性是实例中的属性，不会出现在原型上，且只能在类的构造函数或方法中创建，此例中的 name 就是一个私有属性。建议在构造函数中创建所有私有属性，从而只能通过一处就可以控制类中的所有私有属性。

> 有趣的是，类的声明仅仅是基于已有自定义类型声明的语法糖。类声明实际上创建了一个具有构造函数方法的函数。
> 与函数不同的是，类属性不可被赋予新值，在之前的实例中，PersonClass.prototype 就是一个只读的类属性。

## 为何使用类语法？

- 函数声明可以被提升，而类声明与 let 声明类似，不能被提升；真正执行声明语句之前，它们会一直存在于临时死区中。
- 类声明中的所有代码将自动运行在严格模式下，而且无法强行让代码脱离严格模式执行。
- 在自定义类型中，需要通过 Object.defineProperty()方法手工指定某个方法不可枚举；而在类中，所有方法都是不可枚举的。
- 每个类都有一个名为[[Construct]]的内部方法，通过关键字 new 调用那些不含[[Construc]]的方法会导致程序抛出错误。
- 使用除关键字 new 以外的方式调用类的构造函数会导致程序抛出错误。
- 在类中修改类名会导致程序报错。

### 其他方法模拟类的实现

```js
let PersonType2 = (function () {
  "use strict";

  const PersonType2 = function (name) {
    // 确保通过关键字new调用该函数
    if (typeof new.target === "undefined") {
      throw new Error("必须通过关键字new调用构造函数");
    }
    this.name = name;
  };

  Object.defineProperty(PersonType2.prototype, "sayName", {
    value: function () {
      // 确保不会通过关键字new调用该方法
      if (typeof new.target !== "undefined") {
        throw new Error("不可通过关键字new调用该方法");
      }

      console.log(this.name);
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });

  return PersonType2;
})();
```

外部作用域 let 声明，内部 const 声明，在构造函数中，先检查 new.target 是否通过 new 调用，如果不是则抛出错误；紧接着，讲 sayName()方法定义为不可枚举，并再次检查 new.target 是否通过 new 调用，如果是则抛出错误，最后返回这个构造函数。

> `常量类名，类的名称只在类中为常量，所以尽管不能在类的方法中修改类名，但可以在外部修改。`

在类的构造函数里的 Foo 则是一个独立的绑定。内部的 Foo 就像是通过 const 声明的，修改它的值会导致程序抛出的错误。而外部的 Foo 就像是通过 let 声明的。

# 3. 类表达式

类和函数都有两种存在形式：声明形式和表达式形式。

## 基本的类表达式语法

```js
let PersonClass = class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
};
```

当你使用一个类声明时，PersonClass.name 将会是“PersonClass”字符串。

## 命名类表达式

声明时，在关键字 class 后添加一个标识符即可定义为命名类表达式：

```js
let PersonClass = class PersonClass2 {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
};
```

在此示例中，类表达式被命名为 PersonClass2，由于标识符 PersonClass2 只存在类定义中，因此它可被用在像 sayName()这样的方法中。而在类的外部，由于不存在一个名为 PersonClass2 这样的绑定，因而 typeof PersonClass2 的值为"undefined"

> 在 JavaScript 引擎中，类表达式的实现与类声明稍有不同，在命名类表达式通过 const 定义名称，从而 PersonClass2 只能在类的内部使用。

# 4. 作为一等公民的类

`在程序中，一等公民是指一个可以传入函数，可以从函数中返回，并且可以赋值给变量的值。`
JavaScript 函数是一等公民，这也是 JavaScript 中的一个独特之处。

> 类表达式还有一种使用方式，通过立即调用类构造函数可以创建单例。用 new 调用类表达式，紧接着通过一对小括号调用这个表达式。

```js
let PersonClass = new (class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
})("Awu");
```

# 5. 访问器属性

> 尽管应该在类构造函数中创建自己的属性，但是类也支持直接在原型上定义访问器属性。

创建 getter 时，需要在关键字 get 后紧跟一个空格和相应的标识符；创建 setter 时，只需把关键字 get 替换为 set 即可

```js
class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }
}

var descriptor = Object.getOwnPropertyDescriptor(
  CustomHTMLElement.prototype,
  "html"
);
console.log("get" in descriptor); // true
console.log("set" in descriptor); // true

console.log(descriptor.enumerable); // false
```

`与其他方法一样，创建时声明该属性不可枚举。`

# 7. 可计算成员名称

> 类方法和访问器属性也支持使用可计算名称。就像在对象字面量中一样，用方括号包裹一个表达式即可使用可计算名称。

```js
let methodName = "sayName";

class PersonClass {
  constructor(name) {
    this.name = name;
  }

  [methodName]() {
    console.log(this.name);
  }
}

let me = new PersonClass("Awu");
me.sayName();
```

这个版本的 PersonClass 通过变量来给类定义中的方法命名，字符串"sayName"被赋值给 methodName 变量，然后 methodName 又被用于声明随后可直接访问的 sayName()方法

通过相同的方式可以在访问器属性中应用可计算名称，就像这样：

```js
let propertyName = "html";
class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  get [propertyName]() {
    return this.element.innerHTML;
  }

  set [propertyName](value) {
    this.element.innerHTML = value;
  }
}
```

在类和对象字面量诸多的共同点中，除了方法、访问器属性及可计算名称上的共同点外，还需要了解另一个相似之处，也就是生成方法。

# 8. 生成器方法

在类中，可以将任何方法定义成生成器

```js
class MyClass {
  *createIterator() {
    yield 1;
    yield 2;
    yield 3;
  }
}
let instance = new MyClass();
let iterator = instance.createIterator();
```

> 尽管生成器方法很实用，但如果你的类是用来表示值得集合的，那么为它定义一个默认迭代器会更有用。通过 Symbol.iterator 定义生成器方法即可为类定义默认迭代器：

```js
class Collection {
  constructor() {
    this.items = [];
  }
  *[Symbol.iterator]() {
    yield* this.items.values();
  }
}
var collection = new Collection();
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);

for (let x of collection) {
  console.log(x);
}
// 输出
// 1
// 2
// 3
```

这个示例用可计算名称创建了一个代理 this.items 数组 values()迭代器的生成器方法

> 任何管理一系列值得类都应该引入默认迭代器，因为一些与特定集合有关的操作需要所操作的集合含有一个迭代器。

# 9.静态成员

在 ES5 及早期版本中，直接将方法添加到构造函数中来模拟静态成员是一种常见的模式，例如：

```js
function PersonType(name) {
  this.name = name;
}
// 静态方法
PersonType.create = function (name) {
  return new PersonType(name);
};
// 实例方法
PersonType.prototype.sayName = function () {
  console.log(this.name);
};

var person = PersonType.create("Awu");
```

```js
function PersonType(name) {
  this.name = name;
}

static create(name) {
  return new PersonType(name);
};

sayName() {
  console.log(this.name);
};

var person = PersonType.create("Awu");
```

> 类中的所有方法和访问器属性都可以用 static 关键字来定义，唯一的限制是不能将 static 用于定义构造函数方法。

`不可在实例中访问静态成员，必须要直接在类中访问静态成员`

# 10、继承与派生类

在 ES6 之前，实现继承与自定义类型是一个不小的工作。

正方形继承自矩形的例子

```js
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype.getArea = function () {
  return this.length * this.width;
};

function Square(length) {
  Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    value: Square,
    enumerable: true,
    writable: true,
    configurable: true,
  },
});

var square = new Square(3);
console.log(square.getArea());
```

`JavaScript 新手经常对这些步骤感到困惑，即使是经验丰富的开发者也常在这里出错。`

类的出现让我们可以更轻松地实现继承功能，使用熟悉的 extends 关键字可以指定类继承的函数。原型会自动调整，`通过调用 super()方法即可访问基类的构造函数。`

ES6 等价版本

```js
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
}
class Square = extends Rectangle {
  constructor(length) {
    super(length, length)
  }
}
var square = new Square(3);
console.log(square.getArea())
```

> 通过 extends 关键字继承 Rectangle 类，在 Square 构造函数中通过 super()调用 Rectangle 构造函数并传入相应参数

派生类：继承自其他类的类，`如果在派生类中指定了构造函数则必须要调用 super()`

`如果选择不使用构造函数，则当创建新的类实例时会自动调用 super()并传入所有参数。`

```js
class Square extends Rectangle {
  // 没有构造函数
}
// 等价于
class Square = extends Rectangle {
  constructor(...args) {
    super(...args);
  }
}
```

### 使用 super()的小贴士

- 只可在派生类的构造函数中使用 super()，如果尝试在非派生类或函数中使用则会导致程序抛出错误。
- 在构造函数中访问 this 之前一定要调用 super()，它负责初始化 this，如果在调用 super()之前尝试访问 this 会导致程序出错。
- 如果不想调用 super()，则唯一的方法是让类的构造函数返回一个对象。

## 类方法遮蔽

派生类中的方法总会覆盖类中的同名方法。举个例子，给 Square 添加 getArea()方法来重新定义这个方法的功能：

```js
class Square = extends Rectangle {
  constructor(length) {
    super(length, length)
  }
  // 覆盖并遮蔽Rectangle.prototype.getArea()方法
  getArea() {
    return this.length * this.length
  }
}
```

如果你想调用基类中的该方法，可以调用 super.getArea()方法：

```js
class Square = extends Rectangle {
  constructor(length) {
    super(length, length)
  }
  // 覆盖遮蔽后调用Rectangle.prototype.getArea()方法
  getArea() {
    return super.getArea()
  }
}
```

## 静态成员继承

> 如果基类有静态成员，那么这些静态成员在派生类中也可用。

```js
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
  static create(length, width) {
    return new Rectangle(length, width);
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

var rect = Square.create(3, 4);
console.log(rect instanceof Rectangle); // true
console.log(rect.getArea()); // 12
console.log(rect instanceof Square); // false
```

## 派生自表达式的类

> ES6 最强大的一面或许是从表达式中导出类的功能了。只要表达式可以被解析为一个函数并且具有[[Construct]]属性和原型，那么就可以用 extends 进行派生。

```js
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype.getArea = function () {
  return this.length * this.width
}
class Square = extends Rectangle {
  constructor(length) {
    super(length, length)
  }
}
var x = new Square(3)
console.log(x.getArea()) // 9
console.log(x instanceof Rectangle) // true
```

extends 强大的功能使得类可以继承自任意类型的表达式，从而创造更多可能性。

```js
let SerializableMixin = {
  serialize() {
    return JSON.stringify(this);
  },
};

let AreaMixin = {
  getArea() {
    return this.length * this.width;
  },
};

function mixin(...mixins) {
  var base = function () {};
  Object.assign(base.prototype, ...mixins);
  return base;
}

class Square extends mixin(AreaMixin, SerializableMixin) {
  constructor(length) {
    super();
    this.length = length;
    this.width = length;
  }
}
var x = new Square(3);
console.log(x.getArea());
console.log(x.serialize());
```

Square 的实例拥有来自 AreaMixin 对象的 getArea()方法和来自 SerializableMixin 对象的 serialize 方法，这都是通过原型继承实现的，mixin()函数会用所有 mixin 对象的自有属性动态填充新函数的原型。

## 内建对象的继承

> 在 ES5 的传统继承方式中，先由派生类型（例如，MyArray）创建 this 的值，然后调用基类型的构造函数（例如 Array.apply()方法）。这也就意味着，this 的值开始指向的是 MyArray 的实例，但是随后会被来自 Array 的其他属性所修饰。

> ES6 中的类继承则与之相反，先由基类（Array）创建 this 的值，然后派生类的构造函数（MyArray）再修改这个值。所以一开始可以通过 this 访问基类的所有内建功能，然后再正确地接受所有与之相关地功能。

```js
class MyArray extends Array {
  // 空
}

var colors = new MyArray();
colors[0] = "red";

console.log(colors.length);
colors.length = 0;
console.log(colors[0]);
```

## Symbol.species 属性

> 内建对象继承的一个实用之处是，原本在内建对象中返回实例自身的方法将自动返回派生类的实例。`在浏览器引擎背后是通过Symbol.species属性实现这一行为`

```js
class MyArray extends Array {
  // 空
}

let items = new MyArray(1, 2, 3, 4),
  subitems = items.slice(1, 3);

console.log(items instanceof MyArray); // true
console.log(subitems instanceof MyArray); // true
```

Symbol.species 是诸多内部 Symbol 中的一个，它被用于定义返回函数的静态访问器属性。以下这些内建类型均已定义 Symbol.species 属性：

- Array
- ArrayBuffer
- map
- Promise
- RegExp
- Set
- Typed arrays

# 在类的构造函数中使用 new.target

> 在类的构造函数中也可以通过 new.target 来确定类是如何被调用的。在简单情况下，new.target 等于类的构造函数。

```js
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    this.length = length;
    this.width = width;
  }
}
var obj = new Rectangle(3, 4); // 输出true
```

> 因为每个构造函数都可以根据自身被调用的方式改变自己的行为。例如，`可以用new.target创建一个抽象基类`（不能被直接实例化的类），就像这样：

```js
// 抽象基类
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("这个类不能直接实例化");
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
}

var x = new Shape(); // 抛出错误
var y = new Rectangle(3, 4); // 没有错误
console.log(y instanceof Shape); // true
```

> 因为类必须通过 new 关键字才能调用，所以在类的构造函数中，new.target 属性用于不会是 undefined
