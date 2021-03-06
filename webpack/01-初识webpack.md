# 一、为什么需要构建工具？
 - 转换ES6语法
 - 转换JSX
 - CSS前缀补全/预处理器
 - 压缩混淆
 - 图片压缩

# 二、前端构建演变之路
 ant +YUI Tool => grunt => gulp/fis3 => webpack/rollup/parcel

# 三、为什么选择webpack?

- 社区生态丰富
- 配置灵活和插件化扩展
- 官方更新迭代速度快

# 四、初识webpack

## 4.1 配置文件名称
webpack默认配置文件名称：**webpack.config.js**
可以通过webpack --config来指定配置文件

## 4.2 webpack配置组成

![image](https://user-images.githubusercontent.com/72426886/132117200-6c899c9b-f2ed-4e5d-9d68-f990893a3abc.png)

1. entry：打包的入口文件
2. output：打包的输出
3. mode：环境
4. module：Loader配置
5. plugins：插件配置
## 4.3 零配置webpack包含哪些内容？
只包含entry和output

# 五、安装webpack和webpack-cli
- 创建空目录和package.json
  npm init -y
- 安装webpack和webpack-cli
  npm install webpack webpack-cli --save-dev
  - 检查是否安装成功
    ./ndoe_modules/.bin/webpack -v
![image](https://user-images.githubusercontent.com/72426886/132117647-a9434157-c6ca-44ca-b25f-e5a731d96b2f.png)
# 六、webpack初体验
![carbon (2)](https://user-images.githubusercontent.com/72426886/132118067-7e1a1e36-f9b4-415e-b812-e564cafa7b5f.png)
添加"script"节点：
```js
"build": "webpack"
```
运行`pnpm run build`
![image](https://user-images.githubusercontent.com/72426886/132118341-c6f9bc20-5972-41e2-b362-4b36ebb45ced.png)

