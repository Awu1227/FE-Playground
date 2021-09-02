# 面试秘籍——CSS

## 1.介绍一下标准的盒子模型

> 答：有两种盒子模型，IE 盒子模型和 W3C 标准盒子模型。在 ie8+的浏览器中，它们用 box-sizing 属性控制；content-box 对应 W3C 标准盒子模型，设置的 width/height 属性指的是 content 部分宽/高；border-box 对应 IE 盒子模型，设置的 width/height 指的是 content+margin+padding+boder 部分的宽和高。
>
> 参考：[CSS 盒模型](https://juejin.cn/post/6844903505983963143)

## 2. CSS 选择符有哪些？

> 答：（1）id 选择器（#myid）
> 答：有两种盒子模型，IE 盒子模型和 W3C 标准盒子模型。在 ie8+的浏览器中，它们用 box-sizing 属性控制；content-box 对应 W3C 标准盒子模型，设置的 width/height 属性指的是 content 部分宽/高；border-box 对应 IE 盒子模型，设置的 width/height 指的是 content+margin+padding+boder 部分的宽和高。
>
> 参考：[CSS 盒模型](https://juejin.cn/post/6844903505983963143)

## 2. CSS 选择符有哪些？

> 答：（1）id 选择器（#myid）
> （2）类选择器（.myclassname）
> （3）标签选择器（div,h1,p）
> （4）后代选择器（h1 p）
> （5）相邻后代选择器（子）选择器（ul>li）
> （6）兄弟选择器（li~a）
> （7）相邻兄弟选择器（li+a）
> （8）属性选择器（a[rel="external"]）
> （9）伪类选择器（a:hover,li:nth-child）
> （10）伪元素选择器（::before、::after）
> <<<<<<< HEAD
> （11）通配符选择器（\*）

## 3. ::before 和:after 的双冒号有什么区别？

> 答：单冒号（:）表示伪类，双冒号（::）表示伪元素，为了兼容已有伪元素的写法，有一些浏览器也可以用单冒号表示伪元素。
>
> 伪类用于当已有的元素处于某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的元素时，我们可以通过:hover 来描述这个元素的状态。
>
> 伪元素用于创建一些不在文档树中的元素，并为其添加样式。它们允许我们为元素的某些部分设置样式。比如说，我们可以通过::before 来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。

## 4. CSS 中哪些属性可以继承？

> 答：每一个属性在定义中都给出了这个属性是否具有继承性。一个具有继承性的属性会在没有指定值的时候，会使用父元素的同属性的值来作为自己的值。
>
> 一般具有继承性的属性有：字体相关的属性（font-size 和 font-weight 等），文本相关的属性：(color 和 text-align)，表格的一些布局属性、列表属性（list-style 等）还有光标属性 cursor、元素可见性 visibility。
>
> 总结：**字文表列光见**

## 5. CSS 优先级如何计算？

> 答：判断优先级时，我们首先会判断一条属性声明是否有!important。如果有，那么它的优先级是最高的，前提是它之后不再出现相同的声明。如果权重相同，我们则需要去比较匹配规则的特殊性。第一个等级是行内样式，为 1000，第二个等级是 id 选择器，为 0100，第三个等级是类选择器、伪类选择器和属性选择器，为 0010，第四个等级是元素选择器和伪元素选择器，为 0001。

## 6. 关于伪类 LVHA 的解释？

> 答：a 标签有四种状态：链接访问前、链接访问后、鼠标滑过、激活，分别对应四种伪类:link、:visited、:hover、:active；
>
> （1）当鼠标滑过 a 链接时，满足:link 和:hover 两种状态，要改变 a 标签的颜色，就必须将:hover 伪类在:link 伪类后面声明；
>
> （2）当鼠标点击激活 a 链接时，同时满足:link、:hover、:active 三种状态，要显示 a 标签激活时的样式（:active），必须将:active 声明放到:link 和:hover 之后。因此得出 LVHA 这个顺序。

## 7. CSS3 新增的伪类有哪些？

> # 答：（1）elem:nth-child(n)选中父元素下的第 n 个子元素，并且这个子元素的标签名为 elem，n 可以接受具体的数
>
> （11）通配符选择器（\*）

## 3. ::before 和:after 的双冒号有什么区别？

> 答：单冒号（:）表示伪类，双冒号（::）表示伪元素，为了兼容已有伪元素的写法，有一些浏览器也可以用单冒号表示伪元素。
>
> 伪类用于当已有的元素处于某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的元素时，我们可以通过:hover 来描述这个元素的状态。
>
> 伪元素用于创建一些不在文档树中的元素，并为其添加样式。它们允许我们为元素的某些部分设置样式。比如说，我们可以通过::before 来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。

## 4. CSS 中哪些属性可以继承？

> 答：每一个属性在定义中都给出了这个属性是否具有继承性。一个具有继承性的属性会在没有指定值的时候，会使用父元素的同属性的值来作为自己的值。
>
> 一般具有继承性的属性有：字体相关的属性（font-size 和 font-weight 等），文本相关的属性：(color 和 text-align)，表格的一些布局属性、列表属性（list-style 等）还有光标属性 cursor、元素可见性 visibility。
>
> 总结：**字文表列光见**

## 5. CSS 优先级如何计算？

> 答：判断优先级时，我们首先会判断一条属性声明是否有!important。如果有，那么它的优先级是最高的，前提是它之后不再出现相同的声明。如果权重相同，我们则需要去比较匹配规则的特殊性。第一个等级是行内样式，为 1000，第二个等级是 id 选择器，为 0100，第三个等级是类选择器、伪类选择器和属性选择器，为 0010，第四个等级是元素选择器和伪元素选择器，为 0001。

## 6. 关于伪类 LVHA 的解释？

> 答：a 标签有四种状态：链接访问前、链接访问后、鼠标滑过、激活，分别对应四种伪类:link、:visited、:hover、:active；
>
> （1）当鼠标滑过 a 链接时，满足:link 和:hover 两种状态，要改变 a 标签的颜色，就必须将:hover 伪类在:link 伪类后面声明；
>
> （2）当鼠标点击激活 a 链接时，同时满足:link、:hover、:active 三种状态，要显示 a 标签激活时的样式（:active），必须将:active 声明放到:link 和:hover 之后。因此得出 LVHA 这个顺序。

## 7. CSS3 新增的伪类有哪些？

> 答：（1）elem:nth-child(n)选中父元素下的第 n 个子元素，并且这个子元素的标签名为 elem，n 可以接受具体的数
>
> > > > > > > d1296df33992bc9e8f7fe40d6482e4fb9d732843
> > > > > > > 值，也可以接受函数。
>
> （2）elem:nth-last-child(n)作用同上，不过是从后开始查找。
>
> <<<<<<< HEAD
> （3）elem:last-child 选中最后一个子元素。
>
> （4）elem:only-child 如果 elem 是父元素下唯一的子元素，则选中之。
>
> （5）elem:nth-of-type(n)选中父元素下第 n 个 elem 类型元素，n 可以接受具体的数值，也可以接受函数。
>
> （6）elem:first-of-type 选中父元素下第一个 elem 类型元素。
>
> （7）elem:last-of-type 选中父元素下最后一个 elem 类型元素。
>
> （8）elem:only-of-type 如果父元素下的子元素只有一个 elem 类型元素，则选中该元素。
>
> （9）elem:empty 选中不包含子元素和内容的 elem 类型元素。
>
> （10）elem:target 选择当前活动的 elem 元素。
>
> （11）:not(elem)选择非 elem 元素的每个元素。
>
> （12）:enabled 控制表单控件的禁用状态。
>
> （13）:disabled 控制表单控件的禁用状态。
>
> (14):checked 单选框或复选框被选中。

## 8. 如何居中 div?

### 水平居中(普通盒子)

#### 给 div 设置一个宽度，然后添加 margin:0 auto 属性

=======

> （3）elem:last-child 选中最后一个子元素。
>
> （4）elem:only-child 如果 elem 是父元素下唯一的子元素，则选中之。
>
> （5）elem:nth-of-type(n)选中父元素下第 n 个 elem 类型元素，n 可以接受具体的数值，也可以接受函数。
>
> （6）elem:first-of-type 选中父元素下第一个 elem 类型元素。
>
> （7）elem:last-of-type 选中父元素下最后一个 elem 类型元素。
>
> （8）elem:only-of-type 如果父元素下的子元素只有一个 elem 类型元素，则选中该元素。
>
> （9）elem:empty 选中不包含子元素和内容的 elem 类型元素。
>
> （10）elem:target 选择当前活动的 elem 元素。
>
> （11）:not(elem)选择非 elem 元素的每个元素。
>
> （12）:enabled 控制表单控件的禁用状态。
>
> （13）:disabled 控制表单控件的禁用状态。
>
> (14):checked 单选框或复选框被选中。

## 8. 如何居中 div?

### 水平居中(普通盒子)

#### 给 div 设置一个宽度，然后添加 margin:0 auto 属性

> > > > > > > d1296df33992bc9e8f7fe40d6482e4fb9d732843

```css
div {
  width: 200px;
  margin: 0 auto;
}
```

<<<<<<< HEAD

#### 利用 text-align:center 实现

=======

#### 利用 text-align:center 实现

> > > > > > > d1296df33992bc9e8f7fe40d6482e4fb9d732843

```css
.container {
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 0;
}

.box {
  display: inline-block;
  width: 500px;
  height: 400px;
  background-color: pink;
}
```

### 水平垂直居中(绝对定位盒子)

<<<<<<< HEAD

#### 设置四个方向的值都为 0，并将 margin 设置为 auto。

=======

#### 设置四个方向的值都为 0，并将 margin 设置为 auto。

> > > > > > > d1296df33992bc9e8f7fe40d6482e4fb9d732843

```css
div {
  position: absolute;
  width: 300px;
  height: 300px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: pink; /*方便看效果*/
}
```

<<<<<<< HEAD

#### 利用绝对定位，先将元素的左上角通过 top:50%和 left:50%定位到页面的中心，然后再通过 margin 负值来调整元素的中心点到页面的中心。

=======

#### 利用绝对定位，先将元素的左上角通过 top:50%和 left:50%定位到页面的中心，然后再通过 margin 负值来调整元素的中心点到页面的中心。

> > > > > > > d1296df33992bc9e8f7fe40d6482e4fb9d732843

```css
/*确定容器的宽高宽500高300的层设置层的外边距div{*/
position: absolute;/*绝对定位*/
width: 500px;
height: 300px;
top: 50%;
left: 50%;
margin: -150px -250px;/*外边距为自身宽高的一半*/
background-color: pink;/*方便看效果*/
}
```

<<<<<<< HEAD

#### 利用绝对定位，先将元素的左上角通过 top:50%和 left:50%定位到页面的中心，然后再通过 translate 来调整元素的中心点到页面的中心。

=======

#### 利用绝对定位，先将元素的左上角通过 top:50%和 left:50%定位到页面的中心，然后再通过 translate 来调整元素的中心点到页面的中心。

> > > > > > > d1296df33992bc9e8f7fe40d6482e4fb9d732843

```css
/*未知容器的宽高，利用`transform`属性*/
div {
  position: absolute; /*相对定位或绝对定位均可*/
  width: 500px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: pink; /*方便看效果*/
}
```

<<<<<<< HEAD

#### 使用 flex 布局，通过 align-items:center 和 justify-content:center 设置容器的垂直和水平方向上为居中对齐，然后它的子元素也可以实现垂直和水平的居中。

=======

#### 使用 flex 布局，通过 align-items:center 和 justify-content:center 设置容器的垂直和水平方向上为居中对齐，然后它的子元素也可以实现垂直和水平的居中。

> > > > > > > d1296df33992bc9e8f7fe40d6482e4fb9d732843

```css
/*利用flex布局实际使用时应考虑兼容性*/
.container {
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
}
.containerdiv {
  width: 100px;
  height: 100px;
  background-color: pink; /*方便看效果*/
}
```

<<<<<<< HEAD

## 9. dispaly 有哪些值？说明他们的作用

> 答：
>
> block 块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
> none 元素不显示，并从文档流中移除。
> inline 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。
> inline-block 默认宽度为内容宽度，可以设置宽高，同行显示。
> list-item 像块类型元素一样显示，并添加样式列表标记。
> table 此元素会作为块级表格来显示。
> inherit 规定应该从父元素继承 display 属性的值。

## 10.position 的值 relative 和 absolute 定位原点是？

> 答：relative 定位的元素，是相对于元素本身的正常位置来进行定位的。
>
> ablolute 定位的元素，是相对于它的第一个 position 值不为 static 的祖先元素的 padding box 来进行定位的。

## 11. CSS3 有哪些新特性？

> 答：
>
> 新增各种 CSS 选择器 （:not(.input)：所有 class 不是“input”的节点）
> 圆角 （border-radius:8px）
> 多列布局 （multi-column layout）
> 阴影和反射 （Shadow\Reflect）
> 文字特效 （text-shadow）
> 文字渲染 （Text-decoration）
> 线性渐变 （gradient）
> 旋转 （transform）
> 缩放，定位，倾斜，动画，多背景

## 12. 请解释 CSS3 的 flex box

> 答：flex 布局是 CSS3 新增的一种布局方式，我们可以通过将一个元素的 display 属性值设置为 flex 从而使它成为一个 flex
> 容器，它的所有子元素都会成为它的项目。对于容器中的项目，我们可以使用 order 属性来指定项目的排列顺序，还可以使用 flex-grow 来指定当排列空间有剩余的时候，项目的放大比例。还可以使用 flex-shrink 来指定当排列空间不足时，项目的缩小比例。

## 13. 用纯 CSS 创建一个三角形

> 答：6 种方法
>
> 1. 利用 border
> 2. 利用 linear-gradient
> 3. 利用 conic-gradient
> 4. 利用 rotate 和 overflow
> 5. 利用 clip-path
> 6. # 利用十进制 Unicode 表示码

## 9. dispaly 有哪些值？说明他们的作用

> 答：
>
> block 块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
> none 元素不显示，并从文档流中移除。
> inline 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。
> inline-block 默认宽度为内容宽度，可以设置宽高，同行显示。
> list-item 像块类型元素一样显示，并添加样式列表标记。
> table 此元素会作为块级表格来显示。
> inherit 规定应该从父元素继承 display 属性的值。

## 10.position 的值 relative 和 absolute 定位原点是？

> 答：relative 定位的元素，是相对于元素本身的正常位置来进行定位的。
>
> ablolute 定位的元素，是相对于它的第一个 position 值不为 static 的祖先元素的 padding box 来进行定位的。

## 11. CSS3 有哪些新特性？

> 答：
>
> 新增各种 CSS 选择器 （:not(.input)：所有 class 不是“input”的节点）
> 圆角 （border-radius:8px）
> 多列布局 （multi-column layout）
> 阴影和反射 （Shadow\Reflect）
> 文字特效 （text-shadow）
> 文字渲染 （Text-decoration）
> 线性渐变 （gradient）
> 旋转 （transform）
> 缩放，定位，倾斜，动画，多背景

## 12. 请解释 CSS3 的 flex box

> 答：flex 布局是 CSS3 新增的一种布局方式，我们可以通过将一个元素的 display 属性值设置为 flex 从而使它成为一个 flex
> 容器，它的所有子元素都会成为它的项目。对于容器中的项目，我们可以使用 order 属性来指定项目的排列顺序，还可以使用 flex-grow 来指定当排列空间有剩余的时候，项目的放大比例。还可以使用 flex-shrink 来指定当排列空间不足时，项目的缩小比例。

## 13. 用纯 CSS 创建一个三角形

> 答：6 种方法
>
> 1. 利用 border
> 2. 利用 linear-gradient
> 3. 利用 conic-gradient
> 4. 利用 rotate 和 overflow
> 5. 利用 clip-path
> 6. 利用十进制 Unicode 表示码
>    > > > > > > d1296df33992bc9e8f7fe40d6482e4fb9d732843

## 14. 一个满屏品字布局如何设计？

> 答：简单的方式：
> <<<<<<< HEAD
> 上面的 div 宽 100%，
> 下面的两个 div 分别宽 50%，
> 然后用 float 或者 inline 使其不换行即可

## 15. CSS 多列等高如何实现？

> 答：利用 padding-bottom|margin-bottom 正负值相抵，不会影响页面布局的特点。设置父容器设置超出隐（overflow:
> hidden）利用 flex 布局。

## 16. 经常遇到的浏览器的兼容性问题有哪些？

> （1）png24 位的图片在 iE6 浏览器上出现背景
> 解决方案：做成 PNG8，也可以引用一段脚本处理。
>
> （2）浏览器默认的 margin 和 padding 不同
> 解决方案：加一个全局的\*{margin:0;padding:0;}来统一。
>
> （3）IE6 双边距 bug：在 IE6 下，如果对元素设置了浮动，同时又设置了 margin-left 或
> margin-right，margin 值会加倍。
>
> （4）渐进识别的方式，从总体中逐渐排除局部。
> 首先，巧妙的使用"\9"这一标记，将 IE 游览器从所有情况中分离出来。
> 接着，再次使用"+"将 IE8 和 IE7、IE6 分离开来，这样 IE8 已经独立识别。
> .bb{
> background-color:#f1ee18;/_所有识别_/
> .background-color:#00deff\9;/_IE6、7、8 识别_/
> +background-color:#a200ff;/_IE6、7 识别_/
> \_background-color:#1e0bd1;/_IE6 识别_/
> }
>
> （5）IE 下，可以使用获取常规属性的方法来获取自定义属性，也可以使用 getAttribute()获取自定义
> 属性；Firefox 下，只能使用 getAttribute()获取自定义属性
> 解决方法：统一通过 getAttribute()获取自定义属性。
>
> （6）IE 下，event 对象有 x、y 属性，但是没有 pageX、pageY 属性;Firefox 下，event 对象有
> pageX、pageY 属性，但是没有 x、y 属性。
> 解决方法：（条件注释）缺点是在 IE 浏览器下可能会增加额外的 HTTP 请求数。
>
> （7）Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示
> 解决方法：
>
> 1.可通过加入 CSS 属性-webkit-text-size-adjust:none;解决。但是，在 chrome
> 更新到 27 版本之后就不可以用了。
>
> 2.还可以使用-webkit-transform:scale(0.5);注意-webkit-transform:scale(0.75);
> 收缩的是整个 span 的大小，这时候，必须要将 span 转换成块元素，可以使用 display：block/inline-block/...；
>
> （8）超链接访问过后 hover 样式就不出现了，被点击访问过的超链接样式不再具有 hover 和 active 了
> 解决方法：改变 CSS 属性的排列顺序 L-V-H-A
>
> （9）怪异模式问题：漏写 DTD 声明，Firefox 仍然会按照标准模式来解析网页，但在 IE 中会触发怪异模
> 式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写 DTD 声明的好习惯。

## 17. li 与 li 之间有看不见的空白间隙是什么原因引起的？有什么解决办法？

> # 答：浏览器会把 inline 元素间的空白字符（空格、换行、Tab 等）渲染成一个空格。而为了美观。我们通常是一个<li>放在一行，
>
> 上面的 div 宽 100%，
> 下面的两个 div 分别宽 50%，
> 然后用 float 或者 inline 使其不换行即可

## 15. CSS 多列等高如何实现？

> 答：利用 padding-bottom|margin-bottom 正负值相抵，不会影响页面布局的特点。设置父容器设置超出隐（overflow:
> hidden）利用 flex 布局。

## 16. 经常遇到的浏览器的兼容性问题有哪些？

> （1）png24 位的图片在 iE6 浏览器上出现背景
> 解决方案：做成 PNG8，也可以引用一段脚本处理。
>
> （2）浏览器默认的 margin 和 padding 不同
> 解决方案：加一个全局的\*{margin:0;padding:0;}来统一。
>
> （3）IE6 双边距 bug：在 IE6 下，如果对元素设置了浮动，同时又设置了 margin-left 或
> margin-right，margin 值会加倍。
>
> （4）渐进识别的方式，从总体中逐渐排除局部。
> 首先，巧妙的使用"\9"这一标记，将 IE 游览器从所有情况中分离出来。
> 接着，再次使用"+"将 IE8 和 IE7、IE6 分离开来，这样 IE8 已经独立识别。
> .bb{
> background-color:#f1ee18;/_所有识别_/
> .background-color:#00deff\9;/_IE6、7、8 识别_/
> +background-color:#a200ff;/_IE6、7 识别_/
> \_background-color:#1e0bd1;/_IE6 识别_/
> }
>
> （5）IE 下，可以使用获取常规属性的方法来获取自定义属性，也可以使用 getAttribute()获取自定义
> 属性；Firefox 下，只能使用 getAttribute()获取自定义属性
> 解决方法：统一通过 getAttribute()获取自定义属性。
>
> （6）IE 下，event 对象有 x、y 属性，但是没有 pageX、pageY 属性;Firefox 下，event 对象有
> pageX、pageY 属性，但是没有 x、y 属性。
> 解决方法：（条件注释）缺点是在 IE 浏览器下可能会增加额外的 HTTP 请求数。
>
> （7）Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示
> 解决方法：
>
> 1.可通过加入 CSS 属性-webkit-text-size-adjust:none;解决。但是，在 chrome
> 更新到 27 版本之后就不可以用了。
>
> 2.还可以使用-webkit-transform:scale(0.5);注意-webkit-transform:scale(0.75);
> 收缩的是整个 span 的大小，这时候，必须要将 span 转换成块元素，可以使用 display：block/inline-block/...；
>
> （8）超链接访问过后 hover 样式就不出现了，被点击访问过的超链接样式不再具有 hover 和 active 了
> 解决方法：改变 CSS 属性的排列顺序 L-V-H-A
>
> （9）怪异模式问题：漏写 DTD 声明，Firefox 仍然会按照标准模式来解析网页，但在 IE 中会触发怪异模
> 式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写 DTD 声明的好习惯。

## 17. li 与 li 之间有看不见的空白间隙是什么原因引起的？有什么解决办法？

> 答：浏览器会把 inline 元素间的空白字符（空格、换行、Tab 等）渲染成一个空格。而为了美观。我们通常是一个<li>放在一行，
>
> > > > > > > d1296df33992bc9e8f7fe40d6482e4fb9d732843
> > > > > > > 这导致<li>换行后产生换行字符，它变成一个空格，占用了一个字符的宽度。
>
> 解决办法：
>
> <<<<<<< HEAD
> （1）为<li>设置 float:left。不足：有些容器是不能设置浮动，如左右切换的焦点图等。
>
> （2）将所有<li>写在同一行。不足：代码不美观。
>
> （3）将<ul>内的字符尺寸直接设为 0，即 font-size:0。不足：<ul>中的其他字符尺寸也被设为 0，需要额外重新设定其他
> 字符尺寸，且在 Safari 浏览器依然会出现空白间隔。
>
> （4）消除<ul>的字符间隔 letter-spacing:-8px，不足：这也设置了<li>内的字符间隔，因此需要将<li>内的字符
> 间隔设为默认 letter-spacing:normal。

## 18. 为什么要初始化 CSS 样式？

> 答：因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对 CSS 初始化往往会出现浏览器之间的页面显示差异。
>
> 最简单的初始化方法：
>
> \*{padding:0;margin:0}

## 19. 什么是包含块，对于包含块的理解？

> 答：包含块是一个非常重要的概念，通常包含块是当前元素的最近祖先元素的内容区，包含块的形成依赖于 CSS position 属性。
>
> CSS 中例如`width`、`height`、`padding`等属性在设置百分比值时，浏览器会动态计算实际的像素值，百分比的计算基数就是该元素的包含块对应的实际属性值。
>
> # 例如计算当前元素的百分比值的 height 属性，则其值为：`包含块height值*当前元素height百分比值`。
>
> （1）为<li>设置 float:left。不足：有些容器是不能设置浮动，如左右切换的焦点图等。
>
> （2）将所有<li>写在同一行。不足：代码不美观。
>
> （3）将<ul>内的字符尺寸直接设为 0，即 font-size:0。不足：<ul>中的其他字符尺寸也被设为 0，需要额外重新设定其他
> 字符尺寸，且在 Safari 浏览器依然会出现空白间隔。
>
> （4）消除<ul>的字符间隔 letter-spacing:-8px，不足：这也设置了<li>内的字符间隔，因此需要将<li>内的字符
> 间隔设为默认 letter-spacing:normal。

## 18. 为什么要初始化 CSS 样式？

> 答：因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对 CSS 初始化往往会出现浏览器之间的页面显示差异。
>
> 最简单的初始化方法：
>
> \*{padding:0;margin:0}

## 19. 什么是包含块，对于包含块的理解？

> 答：包含块是一个非常重要的概念，通常包含块是当前元素的最近祖先元素的内容区，包含块的形成依赖于 CSS position 属性。
>
> CSS 中例如`width`、`height`、`padding`等属性在设置百分比值时，浏览器会动态计算实际的像素值，百分比的计算基数就是该元素的包含块对应的实际属性值。
>
> 例如计算当前元素的百分比值的 height 属性，则其值为：`包含块height值*当前元素height百分比值`。
>
> > > > > > > d1296df33992bc9e8f7fe40d6482e4fb9d732843

absolute，绝对定位，包含块就是由它的最近的 `position` 的值不是`static`的祖先元素的内边距区的边缘组成。

fixed，固定定位，在[连续媒体](https://link.juejin.cn/?target=http%3A%2F%2Fwww.ayqy.net%2Fdoc%2Fcss2-1%2Fmedia.html%23continuous-media-group)下(`continuous media`)包含块是 `viewport`（视口）

realtive,相对定位，包含块是最近祖先块级元素或[格式化上下文](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FCSS%2FCSS_Flow_Layout%2FIntro_to_formatting_contexts)。

static,默认值，没有定位，元素出现在正常的流中（忽略 `top`, `bottom`, `left`, `right` 或者 `z-index` 声明），同`relative`规则

<<<<<<< HEAD

## 20. CSS 里的 visibility 属性有个 collapse 属性值是干嘛用的？

> （1）对于一般的元素，它的表现跟 visibility：hidden;是一样的。元素是不可见的，但此时仍占用页面空间。
>
> （2）但例外的是，如果这个元素是 table 相关的元素，例如 table 行，table group，table 列，table column group，它的表现却跟 display:none 一样，也就是说，它们占用的空间也会释放。
>
> 在不同浏览器下的区别：
>
> 在谷歌浏览器里，使用 collapse 值和使用 hidden 值没有什么区别。
>
> 在火狐浏览器、Opera 和 IE11 里，使用 collapse 值的效果就如它的字面意思：table 的行会消失，它的下面一行会补充它的位
> 置。

## 21. width:auto 和 width:100%的区别

> 答：一般而言
>
> width:100%会使元素 box 的宽度等于父元素的 content box 的宽度。
>
> # width:auto 会使元素撑满整个父元素，margin、border、padding、content 区域会自动分配水平空间。

## 20. CSS 里的 visibility 属性有个 collapse 属性值是干嘛用的？

> （1）对于一般的元素，它的表现跟 visibility：hidden;是一样的。元素是不可见的，但此时仍占用页面空间。
>
> （2）但例外的是，如果这个元素是 table 相关的元素，例如 table 行，table group，table 列，table column group，它的表现却跟 display:none 一样，也就是说，它们占用的空间也会释放。
>
> 在不同浏览器下的区别：
>
> 在谷歌浏览器里，使用 collapse 值和使用 hidden 值没有什么区别。
>
> 在火狐浏览器、Opera 和 IE11 里，使用 collapse 值的效果就如它的字面意思：table 的行会消失，它的下面一行会补充它的位
> 置。

## 21. width:auto 和 width:100%的区别

> 答：一般而言
>
> width:100%会使元素 box 的宽度等于父元素的 content box 的宽度。
>
> width:auto 会使元素撑满整个父元素，margin、border、padding、content 区域会自动分配水平空间。
>
> > > > > > > d1296df33992bc9e8f7fe40d6482e4fb9d732843

## 22. 绝对定位元素与非绝对定位元素的百分比计算的区别

> 答：
>
> <<<<<<< HEAD
> 绝对定位元素的宽高百分比是相对于临近的 position 不为 static 的祖先元素的 padding box 来计算的。
>
> 非绝对定位元素的宽高百分比则是相对于父元素的 content box 来计算的。

## 23. 简单介绍使用图片 base64 编码的优点和缺点。

> 答：base64 编码是一种图片处理格式，通过特定的算法将图片编码成一长串字符串，在页面上显示的时候可以用该字符串来代替图片的 url 属性。
>
> 使用 base64 的优点是：
>
> （1）：减少一个图片的 HTTP 请求
>
> 使用 base64 的缺点是：
>
> （1）：根据 base64 的编码原理，编码后的大小会比原文件大小大 1/3，影响文件的加载速度，还会增加浏览器对 html 或 css 文件解析渲染的速度。
>
> （2）使用 base64 无法直接缓存，要缓存只能缓存包含 base64 的 html 或 css 文件。
>
> （3）存在兼容性问题，ie8 以前的浏览器不支持。

## 24. display,position 和 float 的相互关系？

> 答：（1）首先我们判断 display 属性是否为 none，如果为 none，则 position 和 float 属性的值不影响元素最后的表现。
>
> （2）然后判断 position 的值是否为 absolute 或者 fixed，如果是，则 float 属性失效，并且 display 的值应该被
> 设置为 table 或者 block，具体转换需要看初始转换值。
>
> （3）如果 position 的值不为 absolute 或者 fixed，则判断 float 属性的值是否为 none，如果不是，则 display
> 的值则按上面的规则转换。注意，如果 position 的值为 relative 并且 float 属性的值存在，则 relative 相对
> 于浮动后的最终位置定位。
>
> （4）如果 float 的值为 none，则判断元素是否为根元素，如果是根元素则 display 属性按照上面的规则转换，如果不是，
> 则保持指定的 display 属性值不变。
> =======
> 绝对定位元素的宽高百分比是相对于临近的 position 不为 static 的祖先元素的 padding box 来计算的。
>
> 非绝对定位元素的宽高百分比则是相对于父元素的 content box 来计算的。

## 23. 简单介绍使用图片 base64 编码的优点和缺点。

> 答：base64 编码是一种图片处理格式，通过特定的算法将图片编码成一长串字符串，在页面上显示的时候可以用该字符串来代替图片的 url 属性。
>
> 使用 base64 的优点是：
>
> （1）：减少一个图片的 HTTP 请求
>
> 使用 base64 的缺点是：
>
> （1）：根据 base64 的编码原理，编码后的大小会比原文件大小大 1/3，影响文件的加载速度，还会增加浏览器对 html 或 css 文件解析渲染的速度。
>
> （2）使用 base64 无法直接缓存，要缓存只能缓存包含 base64 的 html 或 css 文件。
>
> （3）存在兼容性问题，ie8 以前的浏览器不支持。

## 24. display,position 和 float 的相互关系？

> 答：（1）首先我们判断 display 属性是否为 none，如果为 none，则 position 和 float 属性的值不影响元素最后的表现。
>
> （2）然后判断 position 的值是否为 absolute 或者 fixed，如果是，则 float 属性失效，并且 display 的值应该被
> 设置为 table 或者 block，具体转换需要看初始转换值。
>
> （3）如果 position 的值不为 absolute 或者 fixed，则判断 float 属性的值是否为 none，如果不是，则 display
> 的值则按上面的规则转换。注意，如果 position 的值为 relative 并且 float 属性的值存在，则 relative 相对
> 于浮动后的最终位置定位。
>
> （4）如果 float 的值为 none，则判断元素是否为根元素，如果是根元素则 display 属性按照上面的规则转换，如果不是，
> 则保持指定的 display 属性值不变。
>
> > > > > > > d1296df33992bc9e8f7fe40d6482e4fb9d732843
>
> 总的来说，可以把它看作是一个类似优先级的机制，"position:absolute"和"position:fixed"优先级最高，有它存在
> 的时候，浮动不起作用，'display'的值也需要调整；其次，元素的'float'特性的值不是"none"的时候或者它是根元素
> 的时候，调整'display'的值；最后，非根元素，并且非浮动元素，并且非绝对定位的元素，'display'特性值同设置值。

<<<<<<< HEAD

## 25. margin 重叠问题的理解

> 答:
>
> margin 重叠指的是在垂直方向上，两个相邻元素的 margin 发生重叠的情况。
>
> 一般来说可以分为四种情形：
>
> 第一种是相邻兄弟元素的 marin-bottom 和 margin-top 的值发生重叠。这种情况下我们可以通过设置其中一个元素为 BFC
> 来解决。
>
> 第二种是父元素的 margin-top 和子元素的 margin-top 发生重叠。它们发生重叠是因为它们是相邻的，所以我们可以通过这
> 一点来解决这个问题。我们可以为父元素设置 border-top、padding-top 值来分隔它们，当然我们也可以将父元素设置为 BFC 来解决。
>
> 第三种是高度为 auto 的父元素的 margin-bottom 和子元素的 margin-bottom 发生重叠。它们发生重叠一个是因为它们相
> 邻，一个是因为父元素的高度不固定。因此我们可以为父元素设置 border-bottom、padding-bottom 来分隔它们，也可以为父元素设置一个高度，max-height 和 min-height 也能解决这个问题。当然将父元素设置为 BFC 是最简单的方法。
>
> 第四种情况，是没有内容的元素，自身的 margin-top 和 margin-bottom 发生的重叠。我们可以通过为其设置 border、pa
> dding 或者高度来解决这个问题。

## 26. 对 BFC 规范的理解？

=======

## 25. margin 重叠问题的理解

> 答:
>
> margin 重叠指的是在垂直方向上，两个相邻元素的 margin 发生重叠的情况。
>
> 一般来说可以分为四种情形：
>
> 第一种是相邻兄弟元素的 marin-bottom 和 margin-top 的值发生重叠。这种情况下我们可以通过设置其中一个元素为 BFC
> 来解决。
>
> 第二种是父元素的 margin-top 和子元素的 margin-top 发生重叠。它们发生重叠是因为它们是相邻的，所以我们可以通过这
> 一点来解决这个问题。我们可以为父元素设置 border-top、padding-top 值来分隔它们，当然我们也可以将父元素设置为 BFC 来解决。
>
> 第三种是高度为 auto 的父元素的 margin-bottom 和子元素的 margin-bottom 发生重叠。它们发生重叠一个是因为它们相
> 邻，一个是因为父元素的高度不固定。因此我们可以为父元素设置 border-bottom、padding-bottom 来分隔它们，也可以为父元素设置一个高度，max-height 和 min-height 也能解决这个问题。当然将父元素设置为 BFC 是最简单的方法。
>
> 第四种情况，是没有内容的元素，自身的 margin-top 和 margin-bottom 发生的重叠。我们可以通过为其设置 border、pa
> dding 或者高度来解决这个问题。

## 26. 对 BFC 规范的理解？

> 答：通俗来讲，BFC 是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其他环境中的物品。
>
> 创建 BFC 的几种方式：
>
> 1. 根元素或包含根元素的元素是一个 BFC 区域。
> 2. 浮动元素或定位元素也会形成 BFC
> 3. display 属性的值为 inline-block|flex|inline-flex|table-cell 或 table-caption 会形成 BFC。
> 4. 元素 overflow 的值不为 visibile 时会创建 BFC。

参考：[前端面试题 BFC](https://segmentfault.com/a/1190000013647777)

## 27. IFC 是什么？

> 答：
>
> IFC 指的是行级格式化上下文，它有这样的一些布局规则：
>
> （1）行级上下文内部的盒子会在水平方向，一个接一个地放置。
> （2）当一行不够的时候会自动切换到下一行。
> （3）行级上下文的高度由内部最高的内联盒子的高度决定。

## 28.请解释一下为什么要清除浮动？清除浮动的方式

> 答：浮动元素可以左右移动，直到遇到另一个浮动元素或者遇到它外边缘的包含框。文档流中的普通流的高度小于浮动框的时候，此时就会出现”高度塌陷“。
>
> 清除浮动的方式：
>
> （1）使用 clear 属性清除浮动。
>
> （2）使用 BFC 块级格式化上下文来清除浮动。

## 29. 使用 clear 属性清除浮动的原理？

> 答：
>
> 使用 clear 属性清除浮动，其语法如下：
>
> clear:none|left|right|both
>
> 如果单看字面意思，clear:left 应该是“清除左浮动”，clear:right 应该是“清除右浮动”的意思，实际上，这种解释是有问
> 题的，因为浮动一直还在，并没有清除。
>
> 官方对 clear 属性的解释是：“元素盒子的边不能和前面的浮动元素相邻。”，我们对元素设置 clear 属性是为了避免浮动元素
> 对该元素的影响，而不是清除掉浮动。
>
> 还需要注意的一点是 clear 属性指的是元素盒子的边不能和前面的浮动元素相邻，注意这里“前面的”3 个字，也就是 clear 属
> 性对“后面的”浮动元素是不闻不问的。考虑到 float 属性要么是 left，要么是 right，不可能同时存在，同时由于 clear
> 属性对“后面的”浮动元素不闻不问，因此，当 clear:left 有效的时候，clear:right 必定无效，也就是此时 clear:left
> 等同于设置 clear:both；同样地，clear:right 如果有效也是等同于设置 clear:both。由此可见，clear:left 和 cle
> ar:right 这两个声明就没有任何使用的价值，至少在 CSS 世界中是如此，直接使用 clear:both 吧。
>
> 一般使用伪元素的方式清除浮动
>
> .clear::after{
> content:'';
> display:table;//也可以是'block'，或者是'list-item'
> clear:both;
> }
>
> clear 属性只有块级元素才有效的，而::after 等伪元素默认都是内联水平，这就是借助伪元素清除浮动影响时需要设置 disp
> lay 属性值的原因。

## 30. zoom:1 的清除浮动原理？

> 答：清除浮动，触发 hasLayout；zoom 属性是 IE 浏览器的专有属性，它可以 IE 下比较奇葩的 bug,譬如外边距的重叠，清除浮动。

## 31. 移动端的布局用过媒体查询吗？

> 答：CSS 为文档提供在不同媒介上展示的适配方法

## 32. 使用 CSS 预处理器吗？喜欢哪个？

> 答：SASS（SASS、LESS 没有本质区别，因为大部分团队都用 SASS）。

## 33. CSS 优化、提高性能的方法有哪些？

> 答：
>
> 加载性能：
>
> （1）css 压缩：将写好的 css 进行打包压缩，可以减少很多的体积。
> （2）css 单一样式：当需要下边距和左边距的时候，很多时候选择:margin:top 0 bottom 0;但 margin-bottom:bot
> tom;margin-left:left;执行的效率更高。
> （3）减少使用@import,而建议使用 link，因为后者在页面加载时一起加载，前者是等待页面加载完成之后再进行加载。
>
> 选择器性能：
>
> （1）关键选择器（key selector）。选择器的最后面的部分为关键选择器（即用来匹配目标元素的部分）。CSS 选择符是从右到左进行匹配的。当使用后代选择器的时候，浏览器会遍历所有子元素来确定是否是指定的元素等等；
>
> （2）如果规则拥有 ID 选择器作为其关键选择器，则不要为规则增加标签。过滤掉无关的规则（这样样式系统就不会浪费时间去匹
> 配它们了）。
>
> （3）避免使用通配规则，如\*{}计算次数惊人！只对需要用到的元素进行选择。
>
> （4）尽量少的去对标签进行选择，而是用 class。
>
> （5）尽量少的去使用后代选择器，降低选择器的权重值。后代选择器的开销是最高的，尽量将选择器的深度降到最低，最高不要超过
> 三层，更多的使用类来关联每一个标签元素。
>
> （6）了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则。
>
> 渲染性能：
>
> （1）慎重使用高性能属性：浮动、定位。
>
> （2）尽量减少页面重排、重绘。
>
> （3）去除空规则：｛｝。空规则的产生原因一般来说是为了预留样式。去除这些空规则无疑能减少 css 文档体积。
>
> （4）属性值为 0 时，不加单位。
>
> （5）属性值为浮动小数 0.\*\*，可以省略小数点之前的 0。
>
> （6）标准化各种浏览器前缀：带浏览器前缀的在前。标准属性在后。
>
> （7）不使用@import 前缀，它会影响 css 的加载速度。
>
> （8）选择器优化嵌套，尽量避免层级过深。
>
> （9）css 雪碧图，同一页面相近部分的小图标，方便使用，减少页面的请求次数，但是同时图片本身会变大，使用时，优劣考虑清
> 楚，再使用。
>
> （10）正确使用 display 的属性，由于 display 的作用，某些样式组合会无效，徒增样式体积的同时也影响解析性能。
>
> （11）不滥用 web 字体。对于中文网站来说 WebFonts 可能很陌生，国外却很流行。web fonts 通常体积庞大，而且一些浏
> 览器在下载 web fonts 时会阻塞页面渲染损伤性能。
>
> 可维护性、健壮性：
>
> （1）将具有相同属性的样式抽离出来，整合并通过 class 在页面中进行使用，提高 css 的可维护性。
> （2）样式与内容分离：将 css 代码定义到外部 css 中。

## 34. 浏览器是怎么解析 CSS 选择器的？

> 答：采取从右向左的方式，那么只要发现最右边选择器不匹配，就可以直接舍弃了。

## 35. 在网页中应该使用奇数还是偶数的字体？为什么？

> 答：
>
> （1）偶数字号相对更容易和 web 设计的其他部分构成比例关系。比如：当我用了 14px 的正文字号，我可能会在一些地方用 14
> ×0.5=7px 的 margin，在另一些地方用 14×1.5=21px 的标题字号。
> （2）浏览器缘故，低版本的浏览器 ie6 会把奇数字体强制转化为偶数，即 13px 渲染为 14px。
> （3）系统差别，早期的 Windows 里，中易宋体点阵只有 12 和 14、15、16px，唯独缺少 13px。

## 36. margin 和 padding 分别适合什么场景使用？

> 答：margin 是用来隔开元素与元素的间隔；padding 是用来隔开元素与内容的间隔。
>
> margin 用于布局分开元素使元素与元素互不相干。
>
> padding 用于元素与内容之间的间隔，让文字与元素之间有一段距离。

## 37. 抽离样式模块怎么写，说出思路，有无实践经验？

> 答：通常，一个项目我们只引用一个 CSS，但是对于较大的项目，我们需要把 CSS 文件进行分类。
>
> 我们按照 CSS 的性质和用途，将 CSS 文件分成“公共型样式”、“特殊型样式”、“皮肤型样式”，并以此顺序引用。

## 38. 简单说一下 CSS3 的 all 属性

> 答：all 属性实际上是所有 CSS 属性的缩写，表示，所有的 CSS 属性都怎样怎样。

## 39. 为什么不建议使用通配符初始化 CSS 样式？

> 答：写法好处是写起来很简单，但是通配符需要把所有的标签都遍历一遍。当网站较大时，样式较多，这样写就大大地加强了网站运行的负载。

## 40. absolute 的 containingblock（包含块）计算方式跟正常流有什么不同？

> 答：（1）内联元素也可以作为“包含块”所在的元素；
>
> （2）“包含块”所在的元素不是父块级元素，而是最近的 position 不为 static 的祖先元素或根元素；
>
> （3）边界是 padding box 而不是 content box。

## 41. 对于 hasLayout 的理解？

> 答：hasLayout 是 IE 特有的一个属性。很多的 IE 下的 css bug 都与其息息相关。在 IE 中，一个元素要么自己对自身的内容进
> 行计算大小和组织，要么依赖于父元素来计算尺寸和组织内容。当一个元素的 hasLayout 属性值为 true 时，它负责对自己和可
> 能的子孙元素进行尺寸计算和定位。虽然这意味着这个元素需要花更多的代价来维护自身和里面的内容，而不是依赖于祖先元素来完成这些工作。

## 42.元素竖向的百分比设定是相对于容器的高度吗？

> 答：如果是 height 的话，是相对于包含块的高度。如果是 padding 或者 margin 竖直方向的属性则是相对于包含块的高度。

## 43. 全屏滚动的原理是什么？用到了 CSS 的哪些属性？

> 答：原理：有点类似于轮播，整体的元素一直排列下去，假设有 5 个需要展示的全屏页面，那么高度是 500%，只是展示 100%，容器及容器内的页面取当前可视区高度，同时容器的父级元素 overflow 属性值设为 hidden，通过更改容器可视区的位置来实现全
> 屏滚动效果。主要是响应鼠标事件，页面通过 CSS 的动画效果，进行移动。
>
> overflow：hidden；transition：all 1000 ms ease；

## 44. 什么是响应式设计？基本原理是什么？怎么兼容？

> 答：基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理。页面头部必须有 meta 声明的 viewport。

## 45. 滚动视差怎么实现？

> 答：视差滚动是指多层背景以不同的速度移动，形成立体的运动效果，带来非常出色的视觉体验。

## 46. 如何修改 chrome 记住密码后自动填充表单的黄色背景？

> 答：chrome 表单自动填充后，input 文本框的背景会变成黄色的，通过审查元素可以看到这是由于 chrome 会默认给自动填充的 input 表单加上 input:-webkit-autofill 私有属性；使用足够大的纯色内阴影来覆盖 input 输入框的黄色背景即可解决。
>
> ```css
> input:-webkit-autofill,
> textarea:-webkit-autofill,
> select:-webkit-autofill {
>   -webkit-box-shadow: 000px 1000px white inset;
>   border: 1px solid #ccc !important;
> }
> ```

## 47. 怎么让 Chrome 支持小于 12px 的文字？

> 答：在谷歌下 css 设置字体大小为 12px 及以下时，显示都是一样大小，都是默认 12px。
>
> 解决办法：
>
> 1. 加了-webkit-text-size-adjust:none，字体大小就不受限制了。但是高版本的谷歌浏览器不支持。
> 2. 使用 CSS3 中 transform 中的缩放属性。
> 3. 使用图片，将文字内容切出做图片。

## 48. 让页面里的字体变清晰，变细用 CSS 怎么做？

> 答：webkit 内核的私有属性：-webkit-font-smoothing，用于字体抗锯齿，使用后字体看起来会更清晰舒服。只有 MacOS 环境下才有用。

## 49. font-style 属性中 italic 和 oblique 的区别？

> 答：italic 时使用当前字体的斜体字体，而 oblique 是单纯让文字倾斜，如果当前字体没有斜体字体，则可以退而求次选择 oblique。

## 50. 设备像素、css 像素、设备独立像素、dpr、ppi 之间的区别？

> 答：设备像素指的是物理像素，一般手机的分辨率指的就是设备像素，一个设备的设备像素是不可变的。
>
> css 像素和设备独立像素是等价的，不管在何种分辨率的设备上，css 像素的大小应该是一致的，css 像素是一个相对单位，它是相对于设备像素的，一个 css 像素的大小取决于页面缩放程度和 dpr 的大小。
>
> dpr 指的是设备像素和设备独立像素的比值，一般的 pc 屏幕，dpr=1。在 iphone4 时，苹果推出了 retina 屏幕，它的 dpr 为 2。屏幕的缩放会改变 dpr 的值。
>
> ppi 指的是每英寸的物理像素的密度，ppi 越大，屏幕的分辨率越大。



