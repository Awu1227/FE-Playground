> ES5 之前，JavaScript 环境中的对象包含许多不可枚举的不可写的属性，但开发者不能定义自己的不可枚举或不可写属性，于是 ECMAScript5 引入了 Object.defineProperty()方法来支持开发者去做 JavaScript 引擎早就可以实现的事情。

ES6 添加了一些内建对象，赋予开发者更多访问 JavaScript 引擎的能力。`代理（Proxy）是一种可以拦截并改变底层 JavaScript 引擎操作的包装器，在新语言中通过它暴露内部运作的对象，从而让开发者可以创建内建的对象。`

本文档首先详细描述代理要解决的问题，然后讨论如何有效地创建并使用代理。

# 1. 数组问题

> 在 ES6 出现以前，开发者不能通过自己定义的对象模仿 JavaScript 数组对象的行为方式。当给数组的特定元素赋值时，影响到该数组的 length 属性，也可以 length 属性修改数组元素。

现在通过代理就可以实现了。在 ES6 中数组被认为是`奇异对象`。

# 2. 代理和反射

调用 new Proxy()可创建代替其他目标对象的代理，它虚拟化了目标，所以二者看起来功能一致。

> 代理可以拦截 JavaScript 引擎内部目标的底层对象操作，这些底层操作被拦截后会触发响应特定操作的陷阱函数。

> 反射 API 以 Reflect 对象的形式出现，对象中方法的默认特性与相同的底层操作一致，而代理可以覆写这些操作，每个代理陷阱对应一个命名和参数都相同的 Reflect 方法

JavaScript 中的代理陷阱：

创建代理会让代理和反射 API 的关系变得清楚，所以我们最好深入进去看一些示例。

# 3. 创建一个简单的代理

> 使用 Proxy 构造函数创建代理需要传入两个参数：目标（target）和处理程序（handler）

```js
let target = {};
let proxy = new Proxy(target, {});
proxy.name = "Awu";
console.log(target.name);
target.name = "Awu";
console.log(proxy.name);
```

没有陷阱的代理不是很有趣，如果定义一个陷阱会发生什么呢？

# 4. 使用 set 陷阱验证属性

创建一个属性值是数字的对象，对象中每新增一个属性都要加以验证，如果不是数字必须抛出错误。`为了实现这个任务，可以定义一个set陷阱来覆写设置值的默认特性`

set 陷阱接受 4 个参数：

- trapTarget 用于接受属性（代理目标）的对象。
- key 要写入的属性键（字符串或 Symbol 类型）
- value 被写入属性的值
- receiver 操作发生的对象（通常是代理）

```js
let target = {
  name: "target",
};

let proxy = new Proxy(target, {
  set(trapTarget, key, value, receiver) {
    // 忽略不希望受到影响的已有属性
    if (!trapTarget.hasOwnProperty(key)) {
      if (isNaN(value)) {
        throw new TypeError("属性值必须是数字");
      }
    }

    // 添加属性
    return Reflect.set(trapTarget, key, value, receiver);
  },
});

// 添加一个新属性
proxy.count = 1;
console.log(proxy.count);
console.log(target.count);

proxy.anotherName = "proxy";
```

`set代理陷阱可以拦截写入属性的操作，get代理陷阱可以拦截属性的操作。`

# 5. 用 get 陷阱验证对象结构

> 对象结构是指对象中所有可用属性和方法的集合，我们想做到当程序试图访问不存在的属性时会抛出错误，这对我们和有帮助。代理让对象结构检验变得简单。

```js
let proxy = new Proxy(
  {},
  {
    get(trapTarget, key, receiver) {
      if (!(key in receiver)) {
        throw new TypeError("属性" + key + "不存在！");
      }
      return Reflect.get(trapTarget, key, receiver);
    },
  }
);

proxy.name = "Awu";
console.log(proxy.name);
console.log(proxy.age);
```

这里之所以用 in 操作符检查 reciever 而不检查 trapTarget，为了防止 receiver 代理含有 has 陷阱。在这种情况下检查 trapTarget 可能会忽略 has 陷阱，从而得到错误结果。

# 6.使用 has 陷阱隐藏已有属性

> 可以用 in 操作符来检测给定对象中是否含有某个属性，在代理中使用 has 陷阱可以拦截这些 in 操作并返回一个不同的值。

每当使用 in 操作符时都会调用 has 陷阱，并传入两个参数：

- trapTarget 读取属性的对象
- key 要检查的属性键。

```js
let target = {
  name: "target",
  value: 42,
};

let proxy = new Proxy(target, {
  has(trapTarget, key) {
    if (key === "value") {
      return false;
    } else {
      return Reflect.has(trapTarget, key);
    }
  },
});

console.log("value" in proxy);
console.log("name" in proxy);
```

# 7. 用 deleteProperty 陷阱防止删除属性

> delete 操作符可以从对象中移除属性，如果成功返回 true，不成功则返回 false。在代理中，可以通过 deleteProperty 陷阱来改变这个行为。

每当通过 delete 操作符删除对象属性时，deleteProperty 陷阱都会被调用，它接受两个参数：

- trapTarget 要删除属性的对象（代理的目标）。
- key 要删除的属性键（字符串或 Symbol）。

```js
let target = {
  name: "target",
  value: 42,
};

let proxy = new Proxy(target, {
  deleteProperty(trapTarget, key) {
    if (key === "value") {
      return false;
    } else {
      return Reflect.deleteProperty(trapTarget, key);
    }
  },
});

let result1 = delete proxy.value;
let result2 = delete proxy.name;
console.log(result1);
console.log(result2);
```

这段代码与 has 陷阱的示例非常相似，deleteProperty 陷阱检查 key 是否为“value”，如果是的话返回 false，否则调用 Reflect.deleteProperty()方法来使用默认行为。`如果你希望保护属性不被删除，而且在严格模式不抛出错误，那么这个方法非常实用。`

# 8.原型代理陷阱

> 通过代理中的 setPrototypeOf 陷阱和 getPrototypeOf()陷阱可以拦截这两个方法的执行过程，在这两种情况下，Object 上的方法会调用代理的同名陷阱改变方法的行为。

## 原型代理陷阱的运行机制

原型代理陷阱有一些限制。首先，getPrototypeOf 陷阱必须返回对象或 null，只要返回值必将导致运行时错误，返回值检查可以确保 Object.getPrototypeOf()返回的总是预期的值。

```js
let target = {};
let proxy = new Proxy(target, {
  getPrototypeOf(trapTarget) {
    return Reflect.getPrototypeOf(trapTarget);
  },
  setPrototypeOf(trapTarget, proto) {
    return Reflect.setPrototypeOf(trapTarget, proto);
  },
});

let targetProto = Object.getPrototypeOf(target);
let proxyProto = Object.getPrototypeOf(proxy);

console.log(targetProto === Object.prototype); // true
console.log(proxyProto === Object.prototype); // true
```

## 为什么有两组方法？

Object.getPrototypeOf()和 Object.setPrototypeOf()是高级操作，创建伊始便是给开发者使用的。而 Reflect.getPrototypeOf()方法和 Reflect.setPrototypeOf()方法则是底层操作，其赋予开发者可以访问之前只在内部操作的[[GetPrototypeOf]]和[[SetPrototypeOf]]的权限。
