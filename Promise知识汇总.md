# Promise面试相关
## 1、简单介绍一下Promise。
Promise是一种异步编程的解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
解决了callback hell的问题，Promise的精髓是“状态”，用维护状态、传递状态的方式来使得回调函数能够及时调用，它比传递callback函数要简单、灵活的多。

## 2、实现一个简单的，支持异步链式调用的Promsie类。
```js
let p = new Promsie((resolve,reject)=>{
  let num = Math.ceil(Math.random()*10)
  if (num <= 5) {
    resolve(num)
  }else {
    reject('数字太大了')
  }
})
p.then(data=>console.log(data)).catch(err=>console.error(err))
```
## 3、Promise.then在Event Loop中的执行顺序。
JS中分为两种任务类型：宏任务和微任务。微任务执行会优先于宏任务，因为微任务执行在DOM渲染之前，宏任务执行在DOM渲染之后。

## 4、阐述Promsie的一些静态方法。
Promise.all、Promise.race、Promise.resolve、Promsie.reject等。
### Promise.all的用法
> 谁跑的慢，以谁为准执行回调。all接收一个数组参数，里面的值最终都算返回Promise 对象。
```js
// Promise的all 方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调
let Promise1 = new Promise((resolve,reject)=>{})
let Promise2 = new Promise((resolve,reject)=>{})
let Promise3 = new Promise((resolve,reject)=>{})
let p = Promsie.all([Promise1,Promise2,Promise3])
p
.then(()=>console.log('三个都成功'))
.catch(()=>console.log('失败'))
```
### Promise.race的用法
> 谁跑的快，以谁为准执行回调。
```js
// race的使用场景：比如我们可以用race 给某个异步请求设置超时时间，并且在超时后执行相应的操作，代码如下：
// 请求某个图片资源
function requestImg(){
    let p = new Promise((resolve,reject)=>{
        let img = new Image();
        img.onload = function() {
            resolve(img);
        }
        img.src = '图片的路径'
    })；
    return p;
}
// 延时函数，用于给请求计时
function timeout(){
    let p = new Promise((resolve,reject)=>{
       setTimeout(()=>{
           reject('图片请求超时');
       },5000)
    })；
    return p;
}
Promise.race([requestImg(),timeout()])
.then(data=>console.log(data))
.catch(err=>console.log(err))
```
## 5、Promise存在哪些缺点？
- 1、无法取消Promise，一旦新建它就会立即执行，无法中途取消。
- 2、如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
- 3、吞掉错误或异常，错误只能顺序处理，即使在Promise链最后添加catch方法，依然可能存在无法捕捉的错误（catch内部可能会出现错误）
- 4、阅读代码不是一眼可以看懂，你只会看到一堆then，必须自己在then的回调函数里面理清逻辑。

## 6、使用Promise进行顺序处理
推荐使用async函数配合await方式或者Array.prototype.reduce实现
- 使用async函数
```js
function getResult(){
 async function queue(arr) {
  let res = []
  for (let fn of arr) {
    var data= await fn();
    res.push(data);
  }
  return await res
}

queue([getA,getB])
  .then(data => {
    return addAB(data[0],data[1])
  }).then(data=>console.log(data))

}
```
- 使用Array.prototype.reduce
```js
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  );
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
 return a * 3;
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10)
  .then(console.log);   // 1200

```
## 7、如何停止一个Promise链？
在要停止的promise链位置添加一个方法，返回一个永远不执行resolve或者reject的Promise，那么这个promsie永远处于pending状态，所以不会向下执行then或catch了。这样就停止了一个promise链。
```js
Promsie.stop = function() {
  return new Promsie(function(){})
}
```
## 8、Promise链上最后一个Promise出错了怎么办？
我们都知道catch方法在promise链式调用的末尾调用，用于捕获链中的错误信息，但是catch方法内部也可能出现错误，所以在可以在promise实现中增加一个done方法，done相当于提供了一个不会出错的catch方法，并且不再返回一个promise，可以用来结束一个promise链。
```js
  done() {
    this.catch(reason => {
      console.log('done', reason);
      throw reason;
    });
  }
```
## 9、Promise存在哪些使用技巧或者最佳实践？
- 1、链式promsie要返回一个promise.而不只是构造一个promise。
- 2、合理的使用Promise.all和Promise.race等方法。
- 3、在写promise链式调用的时候，then方法不传reject函数，需要捕获promsise发生的错误，只需要在末尾加一个catch即可，如果catch()代码也又出现错误的可能，需要在链式调用的末尾增加done()函数。