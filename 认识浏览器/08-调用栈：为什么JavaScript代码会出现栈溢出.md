> 在上一小节，我们知道了，当一段代码被执行时，JavaScript引擎会对其进行编译，并创建执行上下文。但是并没有明确说明到底什么样的代码才算符合规范。

## 哪些情况下代码才算是“一段代码”，才会在执行之前就进行编译并创建执行上下文？

1. 当JavaScript执行全局代码的时候，会编译全局代码并创建全局执行上下文，而且在整个页面的生存周期中，全局1执行上下文只有一份。
2. 当调用一个函数的时候，函数体内的代码会被编译，并创建函数执行上下文，一般情况下，当函数执行结束之后，创建的函数执行上下文会被销毁。
3. 当使用eval函数的时候，eval的代码也会被编译，并创建执行上下文。

## 学习调用栈的好处
1. 可以帮助你了解JavaScript引擎背后的工作原理
2. 让你有调试JavaScript代码的能力
3. 帮助你搞定面试，因为面试过程中，调用栈也是出境率非常高的题目。

> 比如你在写JavaScript代码的时候，有时候可能会遇到栈溢出的错误，为什么会出现这种错误呢？这就涉及到了调用栈的内容

**调用栈就是用来管理函数调用关系的一种数据结构**。

```js
var a = 2
function add(){
var b = 10
return  a+b
}
add()
```
1. 在执行到函数add()之前，JavaScript引擎会为上面这段代码创建全局执行上下文，包含了声明的函数和变量。
2. 从全局执行上下文中，取出add函数代码
3. 其次，对add函数的这段代码进行编译，并创建该函数的执行上下文和可执行代码
4. 最后，执行代码，输出结果

![image](https://user-images.githubusercontent.com/72426886/132269395-04ef0fe7-d776-469c-bf79-3edd5147fcc1.png)

## 什么是JavaScript的调用栈？
> JavaScript引擎正是利用栈的这种结构来管理执行上下文的。在执行上下文创建好后，JavaScript引擎会将执行上下文压入栈中，这种用来管理执行上下文的栈称为执行上下文栈，又称调用栈。

看下面这段代码：
```js
var a = 2
function add(b,c){
  return b+c
}
function addAll(b,c){
var d = 10
result = add(b,c)
return  a+result+d
}
addAll(3,6)
```
1. **创建全局上下文，并将其压入栈底**。如下图所示：
![image](https://user-images.githubusercontent.com/72426886/132270187-e8f220ad-83b3-4cad-a902-1deeb65c0d60.png)


从图中你也可以看出，变量a、函数add和addAll都保存到了全局上下文的变量环境对象中。

全局执行上下文压入到调用栈后，JavaScript引擎便开始执行全局代码了。首先会执行a=2的赋值操作，执行该语句会将全局上下文变量环境中a的值设置为2。设置后的全局上下文的状态如下图所示：
![image](https://user-images.githubusercontent.com/72426886/132270209-a539b657-5b35-47bd-ab3a-62ee4e6ac865.png)


2. **调用addAll函数**。

当调用该函数时，JavaScript引擎会编译该函数，并为其创建一个执行上下文，最后还将该函数的执行上下文压入栈中，如下图所示：
![image](https://user-images.githubusercontent.com/72426886/132270221-482e3834-f09f-456e-a12d-ebf53b2b6768.png)


addAll函数的执行上下文创建好之后，便进入了函数代码的执行阶段了，先执行的是d=10的赋值操作，执行语句会将addAll函数执行上下文中的d由undefined变成10。

3. 当执行到add函数调用语句时，同样会为其创建执行上下文，并将其压入到调用栈中，如下图所示：

![image](https://user-images.githubusercontent.com/72426886/132270234-7714773f-2245-4528-8bd7-61de1df8111a.png)

当 add 函数返回时，该函数的执行上下文就会从栈顶弹出，并将 result 的值设置为 add 函数的返回值，也就是 9。如下图所示：

![image](https://user-images.githubusercontent.com/72426886/132270263-53b9a290-2c99-4611-9753-253e7347c35b.png)

紧接着 addAll 执行最后一个相加操作后并返回，addAll 的执行上下文也会从栈顶部弹出，此时调用栈中就只剩下全局上下文了。最终如下图所示：

![image](https://user-images.githubusercontent.com/72426886/132270289-28d244f4-ccc6-4fbe-9b72-0e2012733f08.png)
至此，整个JavaScript流程就执行结束了。现在你应该知道了**调用栈是JavaScript引擎追踪函数执行的一个机制**，当一次有多个函数被调用时，通过栈就能追踪到哪个函数正在被执行以及各函数之间的调用关系。

## 在开发中，如何利用好栈

### 利用浏览器查看调用栈的信息
你可以打开“开发者工具”，点击“Source标签”，选择JavaScript代码的页面，然后在第3行加上断点，并刷新页面，通过点击右边的“call stack ”来查看当前调用栈的情况，如下图所示：
![image](https://user-images.githubusercontent.com/72426886/132271407-c99a60d7-f056-432d-aa4c-64d168c67c17.png)


> 你还可以使用console.trace()来输出当前的函数调用关系
![image](https://user-images.githubusercontent.com/72426886/132271420-2606f996-53f9-4bfe-aa02-3859864f2677.png)

### 栈溢出

```js
function division(a,b){
    return division(a,b)
}
console.log(division(1,2))
```
执行这段代码的时候就会出现栈溢出的问题，这是因为当JavaScript引擎开始执行这段代码时，它首先调用dicision，并创建执行上下文，并压入栈中，然而，这个函数是递归的，没有终止条件，它就会一直创建新的执行上下文压入栈中，但栈是有容量限制的，故会出现栈溢出的错误。

> 如何解决？把递归调用的形式改造成其他形式，或者加入定时器的方法把当前任务拆分为其他很多小任务。

## 总结：
- 每调用一个函数，JavaScript 引擎会为其创建执行上下文，并把该执行上下文压入调用栈，然后 JavaScript 引擎开始执行函数代码。
- 如果在一个函数 A 中调用了另外一个函数 B，那么 JavaScript 引擎会为 B 函数创建执行上下文，并将 B 函数的执行上下文压入栈顶。
- 当前函数执行完毕后，JavaScript 引擎会将该函数的执行上下文弹出栈。当分配的调用栈空间被占满时，会引发“堆栈溢出”问题。
