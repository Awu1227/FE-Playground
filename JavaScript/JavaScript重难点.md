# 一、JavaScript重点概念

## 1.1 基本数据类型

> 基本数据类型：Number、String、Boolean、Null、Undefined、Symbol。
>
> 引用数据类型：Object、Function、Array、Date等。

### 1. Undefined类型

> 4种常用场景：

1. 使用只声明而未初始化的变量时，会返回undefined。

```js
var a;
console.log(a);
```

2. 获取一个对象的某个不存在的属性时，会返回undefined。

```js
var obj = {
    name: "Orange"
};
console.log(obj.sex);
```

3. 函数没有明确的返回值，却在其他地方使用了返回值，会返回undefined。

```js
function foo(){}
console.log(foo());
```

4. 函数定义时使用了多个形式参数，而在调用时传递的参数的数量少于形参数量，那么未匹配上的参数就为“undefined”。

```js
function foo(p1,p2,p3) {
    console.log(p3);
}
foo(1,2);
```

