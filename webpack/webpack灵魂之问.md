## 一、说一下模块打包运行原理？

> webpack的整个打包流程：

1. 读取`webpack`的配置参数；
2. 启动`webpack`，创建`Compiler`对象并开始解析项目；
3. 从入口文件（`entry`）开始解析，并且找到其导入的依赖模块，递归遍历分析，形成依赖关系树；
4. 对不同文件类型的依赖模块文件使用对应的`Loader`进行编译，最终转为`JavaScript`文件；
5. 整个过程中`webpack`会通过发布订阅模式，向外抛出一些`hooks`，而`webpack`的插件即可通过监听这些关键的事件节点，执行插件任务进而达到干预输出结果的目的。

> 文件的解析与构建是一个比较复杂的过程，在`webpack`源码中主要依赖于`compiler`和`compilation`两个核心对象实现。

## 二、你知道sourceMap是什么吗？

`sourceMap`是一项将编译、打包、压缩后的代码映射回源代码的技术，由于打包压缩后的代码并没有阅读性可言，一旦开发中报错或者遇到问题，直接混淆代码中`debug`问题会带来非常糟糕的体验，`sourceMap`可以帮助我们快速定位到源代码的位置，提高我们的开发效率。`sourceMap`并不是`webpack`特有的功能，像`jQuery`也支持`sourceMap`。

> 既然是一种源码的映射，那么必然就需要有一份映射的文件，来标记混淆代码里对应源码的位置，通常这份文件以`.map`结尾。

有了这份映射文件，我们只需要在我们的压缩代码的最末端加上这句注释，即可让sourceMap生效
```js
//# sourceURL=/path/to/file.js.map
```

## 三、是否写过loader？简单描述一下编写loader的思路？

`webpack`最后打包出来的成果是一份`JavaScript`代码，实际上在`webpack`内部默认也只能够处理JS模块代码，在打包过程中，会默认把所有遇到的文件都当作`JavaScript`代码进行解析，因此当项目存在非`JS`类型文件时，我们需要对其进行必要的转换，才能继续执行打包任务，这也是`loader`机制存在的意义。
```js
// webpack.config.js
module.exports = {
  // ...other config
  module: {
    rules: [
      {
        test: /^your-regExp$/,
        use: [
          {
             loader: 'loader-name-A',
          }, 
          {
             loader: 'loader-name-B',
          }
        ]
      },
    ]
  }
}
```
针对每个文件类型，`loader`是支持以数组的形式配置多个的，因此当`Webpack`在转换该文件类型的时候，会按顺序链式调用每一个`loader`，前一个`loader`返回的内容会作为下一个`loader`的入参。因此`loader`的开发需要遵循一些规范，比如返回值必须是标准的JS代码字符串，以保证下一个`loader`能够正常工作，同时在开发上需要严格遵循“单一职责”，只关心`loader`的输出以及对应的输出。

## 四、是否写过plugin？简单描述一下编写plugin的思路？

如果说`loader`负责文件转换，那么`plugin`便是负责功能扩展。`loader`和`plugin`作为`webpack`的两个重要组成部分，承担着两部分不同的职责。

 > webpack基于发布订阅模式，在运行的生命周期中会广播出许多事件，插件通过监听这些事件，就可以在特定的阶段执行自己的插件任务，从而实现自己想要的功能。

 `Plugin`的开发和开发Loader一样，需要遵循一些开发上的规范和原则：
 - 插件必须是一个函数或者是一个包含 apply 方法的对象，这样才能访问compiler实例；
- 传给每个插件的 compiler 和 compilation 对象都是同一个引用，若在一个插件中修改了它们身上的属性，会影响后面的插件;
- 异步的事件需要在插件处理完任务时调用回调函数通知 Webpack 进入下一个流程，不然会卡住;
