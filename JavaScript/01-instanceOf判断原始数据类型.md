## 如何使用 instanceof判断原始数据类型？
```js
class PrimitiveNumber{
  static [Symbol.hasInstance](x){
    return typeOf x === 'number'
  }
}
console.log(11 instanceof PrimitiveNumber) // true
```