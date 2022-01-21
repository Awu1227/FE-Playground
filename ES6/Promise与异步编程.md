> Promise 可以实现其他语言中类似 Future 和 Deferred 一样的功能，是另一种异步编程的选择，它既可以像事件和回调函数一样指定稍后执行的代码，也可以明确指示代码是否成功执行。基于这些成功或失败的状态，为了让代码更容易理解和调试，你可以链式地编写 Promise。

# 1. 异步编程的背景知识

JS 引擎是基于单线程事件循环的概念构建的，同一时刻指允许一个代码块在执行。

事件循环会执行队列中的下一个任务，它是 JS 引擎中的一段程序，负责监控代码执行并管理任务队列。

## 事件模型

```js
let button = document.getElementById("my-btn");
button.onclick = function (event) {
  console.log("Clicked");
};
```

在这段代码中，单击 button 后会执行 console.log("Clicked")，赋值给 onclick 的函数被添加到任务队列中，只有当前面的任务都完成后它才会被执行。

> 事件模型适用于处理简单的交互，然而将多个独立的异步调用连接在一起会使程序更加复杂，因为你必须跟踪每个事件的事件目标（如此例中的 button，事件模型对于更复杂的需求来说却不是很灵活。

## 回调模式

> 回调模式与事件模型类似，异步代码都会在未来的某个时间点执行，二者的区别是回调模式中被调用的函数是作为参数传入的。

```js
readFile("example.txt", function (err, contents) {
  if (err) {
    throw err;
  }
  console.log(contents);
});

console.log("Hi");
```

回调模式比事件模型更灵活，因为相比之下，通过回调模式链接多个调用更容易。

```js
readFile("example.txt", function (err, contents) {
  if (err) {
    throw err;
  }
  writeFile("example.txt", function (err) {
    if (err) {
      throw err;
    }
    console.log("File was written!");
  });
});
```

这个模式运行效果很不错，但嵌套了太多的回调函数，会使自己陷入回调地狱。

# 2. Promise 的基础知识

> Promise 相当于异步操作结果的占位符，它不会去订阅一个事件，也不会传递一个回调函数给目标函数，而是让函数返回一个 Promise。

```js
let promise = readFile("example.txt");
```

> 在这段代码中，readFile()不会立即开始读取文件，函数会先返回一个表示异步读取操作的 Promise 对象，未来对这个对象的操作完全取决于 Promise 的生命周期。

## Promise 的生命周期

1. pending（进行中的状态）
2. fulfilled（异步操作成功的状态）
3. rejected（异步操作未能成功或错误的状态）
   > 内部属性[[PromiseState]]被用来表示 Promise 的 3 种状态。这些属性不暴露在 Promise 对象上，所以不能以编程的方式检测 Promise 的状态。

只有当 Promise 的状态改变时，通过 then()方法来采取特定的行动。

`所有 Promise 都有 then()方法，它接受两个参数，第一个是当 Promise 的状态为 fulfilled 时调用的函数，第二个是当 Promise 的状态变为 rejected 时要调用的函数。`

如果一个对象实现了上述的 then()方法，那么这个对象我们称之为 thenable 对象，所有的 Promise 都是 thenable 对象，但并非所有 thanable 对象都是 Promise。

then()的两个参数都是可选的。

Promise 还有一个 catch()方法，相当于只给其传入拒绝处理程序的 then 方法。

> 每次调用 then()方法或 catch()方法都会创建一个新任务，当 Promise 被解决（resolved）时执行。这些任务最终会被加入到一个为 Promise 量身定制的独立队列中。

## 创建未完成的 Promise

> 使用 Promise 构造函数可以创建新的 Promise，构造函数只接受一个参数，包含初始化 Promise 代码的执行器（executor）函数。执行器函数接受两个参数，分别是 resolve()函数和 reject()函数

> Promise 的执行器会立即执行，然后才执行后续流程中的代码。

调用 resolve()后会触发一个异步操作，传入 then()和 catch()方法的函数会被添加任务队列中并异步执行。

完成处理程序和拒绝处理程序总是在执行器完成后被添加到任务队列的末尾。

## 创建已处理的 Promise

### 使用 Promise.resolve()

Promise.resolve()方法只接受一个参数并返回一个完成态的 Promise

```js
let promise = Promise.resolve(42);
promise.then(function (value) {
  console.log(value); // 42
});
```

### 使用 Promise.reject()

任何附加到这个 Promise 的拒绝处理程序都将被调用，但却不会调用完成处理程序。

> 如果向 Promise.resolve()方法或 Promise.reject()方法传入一个 Promise，那么这个 Promise 会将直接返回。

### 非 Promise 的 Thenale 对象

> 拥有 then()方法并且接受 resolve 和 reject 这两个参数的普通对象就是非 Promise 的 Thenable 对象。

```js
let thenable = {
  then: function (resolve, reject) {
    resolve(42);
  },
};

let p1 = Promise.resolve(thenable);
p1.then(function (value) {
  console.log(value); // 42
});
```

有了 Promise.resolve()方法和 Promise.reject()方法，我们可以轻松地处理非 Promise 的 Thenable 对象。

## 执行器错误

> 如果执行器内部抛出了一个错误，则 Promise 的拒绝处理程序就会被调用

# 3. 全局的 Promise 拒绝处理

> 如果在没有拒绝处理程序的情况下拒绝下一个 Promise，那么不会提示失败信息，这是 JavaScript 语言中唯一一处没有强制报错的地方，一些人认为这是标准中最大的缺陷。

```js
let rejected = Promise.reject(42);
// 此时，rejected还没有被处理

// 过了一会儿。。。
rejected.catch(function (value) {
  // 现在rejected已经被处理了
  console.log(value);
});
```

## Node.js 环境的拒绝处理

> 在 Node.js 中，处理 Promise 拒绝时会触发 process 对象上的两个事件：

- unhandleRejection 在一个事件循环中，当 Promise 被拒绝，并且没有提供拒绝处理程序时，被调用。
- rejectionHandled 在一个事件循环后，当 Promise 被拒绝，并且没有提供拒绝处理程序时，被调用。

unhandledRejection 事件处理程序分别接受错误对象和 Promise 作为它的两个参数。

rejectionHandled 事件处理程序只有一个参数，也就是被拒绝的 Promise

```js
let rejected;
process.on("rejectionHandled", function (promise) {
  console.log(rejected === promise); // true
});
rejected = Promise.reject(new Error("Explosion!"));

// 等待添加拒绝处理程序
setTimeout(function () {
  rejected.catch(function (value) {
    console.log(value.message); // "Explosion!"
  });
});
```

## 浏览器化境的拒绝处理

浏览器也是通过触发两个事件来识别未处理的拒绝的，虽然这些事件是在 window 对象上触发的，但实际上与 Node.js 中完全等效。

# 4. 串联 Promise

> 每次调用 then()方法或 catch()方法时实际上创建并返回了另一个 Promise，只有当第一个 Promise 完成或被拒绝后，第二个才会被解决。

```js
let p1 = new Promise(function (resolve, reject) {
  resolve(42);
});
p1.then(function (value) {
  console.log(value);
}).then(function () {
  console.log("Finished");
});
```

## 捕获错误

完成处理程序或拒绝处理程序中可能发生错误，而 Promise 链可以用来捕获这些错误

```js
let p1 = new Promise(function (resolve, reject) {
  resolve(42);
});
p1.then(function (value) {
  throw new Error("Boom!");
}).catch(function (error) {
  console.log(error.message);
});
```

> 务必在 Promise 链末尾留一个拒绝处理程序以确保能够正确处理所有可能发生错误。

## Promise 链的返回值

> Promise 链的另一个重要特性就是可以给下游 Promise 传递数据。

```js
let p1 = new Promise(function (resolve, reject) {
  resolve(42);
});

p1.then(function (value) {
  console.log(value);
  return value + 1;
}).then(function (value) {
  console.log(value);
});
```

在拒绝处理程序中也可以做相同的事情：

```js
let p1 = new Promise(function (resolve, reject) {
  reject(42);
});

p1.catch(function (value) {
  console.log(value);
  return value + 1;
}).then(function (value) {
  console.log(value);
});
```

## 在 Promise 链中返回 Promise

```js
let p1 = new Promise(function (resolve, reject) {
  resolve(42);
});
let p2 = new Promise(function (resolve, reject) {
  resolve(43);
});
p1.then(function (value) {
  // 第一次完成处理程序
  console.log(value);
  return p2;
}).then(function (value) {
  // 第二个完成处理程序
  console.log(value);
});
```

# 5. 响应多个 Promise

> 使用 ES6 提供的 Promise.all()和 Promise.race()两个方法来监听多个 Promise。

## Promise.all()方法

`Promise.all()方法只接受一个参数并返回一个Promise，该参数是一个含有多个受监听Promise的可迭代对象。`

> 所有传入 Promise.all()方法的 Promise 只要有一个被拒绝，那么返回的 Promise 没等所有 Promise 都完成就立即被拒绝。

## Promise.race()方法

> 它也接受多个受监视 Promise 的可迭代对象作为唯一参数并返回一个 Promise，但只要有一个 Promise 被解决返回的 Promise 就被解决，无需等到所有的 Promise 都完成。

# 6. 自 Promise 继承

```js
class MyPromise extends Promise {
  // 使用默认的构造函数
  success(resolve, reject) {
    return this.then(resolve, reject);
  }

  failure(reject) {
    return this.catch(reject);
  }
}

let promise = new MyPromise(function (resolve, reject) {
  resolve(32);
});
promise
  .success(function (value) {
    console.log(value);
  })
  .failure(function (value) {
    console.log(value);
  });
```

> 由于 MyPromise.resolve()方法和 MyPromise.reject()方法通过 Symbol.species 属性来决定返回 Promise 的类型，故调用这两个方法时无论传入什么值都会返回一个 MyPromise 的实例。

# 7.基于 Promise 的异步任务执行

`未来的异步任务执行`

> JavaScript 正在引入一种用于执行异步任务的更简单的语法，例如，await 语法致力于替代之前章节中基于 Promise 的示例。其基本思想是用 async 标记的函数代替生成器，用来 await 代替 yield 来调用函数。

```js
(async function () {
  let contents = await readFile("config.json");
  doSomethingWith(contents);
  console.log("Done");
});
```

`你可以按照同步方式编写异步代码，唯一的开销是一个基于迭代器的状态机。`
