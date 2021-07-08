# 面试秘籍——CSS

## 1.介绍一下标准的盒子模型

> 答：有两种盒子模型，IE盒子模型和W3C标准盒子模型。在ie8+的浏览器中，它们用box-sizing属性控制；content-box对应W3C标准盒子模型，设置的width/height属性指的是content部分宽/高；border-box对应IE盒子模型，设置的width/height指的是content+margin+padding+boder部分的宽和高。
>
> 参考：[CSS盒模型](https://juejin.cn/post/6844903505983963143)

## 2. CSS选择符有哪些？

> 答：（1）id选择器（#myid）
> （2）类选择器（.myclassname）
> （3）标签选择器（div,h1,p）
> （4）后代选择器（h1 p）
> （5）相邻后代选择器（子）选择器（ul>li）
> （6）兄弟选择器（li~a）
> （7）相邻兄弟选择器（li+a）
> （8）属性选择器（a[rel="external"]）
> （9）伪类选择器（a:hover,li:nth-child）
> （10）伪元素选择器（::before、::after）
> （11）通配符选择器（*）

## 3. ::before和:after的双冒号有什么区别？

> 答：单冒号（:）表示伪类，双冒号（::）表示伪元素，为了兼容已有伪元素的写法，有一些浏览器也可以用单冒号表示伪元素。
>
> 伪类用于当已有的元素处于某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的元素时，我们可以通过:hover来描述这个元素的状态。
>
> 伪元素用于创建一些不在文档树中的元素，并为其添加样式。它们允许我们为元素的某些部分设置样式。比如说，我们可以通过::before来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。

## 4. CSS中哪些属性可以继承？

> 答：每一个属性在定义中都给出了这个属性是否具有继承性。一个具有继承性的属性会在没有指定值的时候，会使用父元素的同属性的值来作为自己的值。
>
> 一般具有继承性的属性有：字体相关的属性（font-size和font-weight等），文本相关的属性：(color和text-align)，表格的一些布局属性、列表属性（list-style等）还有光标属性cursor、元素可见性visibility。
>
> 总结：**字文表列光见**

## 5. CSS优先级如何计算？

> 答：判断优先级时，我们首先会判断一条属性声明是否有!important。如果有，那么它的优先级是最高的，前提是它之后不再出现相同的声明。如果权重相同，我们则需要去比较匹配规则的特殊性。第一个等级是行内样式，为1000，第二个等级是id选择器，为0100，第三个等级是类选择器、伪类选择器和属性选择器，为0010，第四个等级是元素选择器和伪元素选择器，为0001。

## 6. 关于伪类LVHA的解释？

> 答：a标签有四种状态：链接访问前、链接访问后、鼠标滑过、激活，分别对应四种伪类:link、:visited、:hover、:active；
>
> （1）当鼠标滑过a链接时，满足:link和:hover两种状态，要改变a标签的颜色，就必须将:hover伪类在:link伪类后面声明；
>
> （2）当鼠标点击激活a链接时，同时满足:link、:hover、:active三种状态，要显示a标签激活时的样式（:active），必须将:active声明放到:link和:hover之后。因此得出LVHA这个顺序。

## 7. CSS3新增的伪类有哪些？

> 答：（1）elem:nth-child(n)选中父元素下的第n个子元素，并且这个子元素的标签名为elem，n可以接受具体的数
> 值，也可以接受函数。
>
> （2）elem:nth-last-child(n)作用同上，不过是从后开始查找。
>
> （3）elem:last-child选中最后一个子元素。
>
> （4）elem:only-child如果elem是父元素下唯一的子元素，则选中之。
>
> （5）elem:nth-of-type(n)选中父元素下第n个elem类型元素，n可以接受具体的数值，也可以接受函数。
>
> （6）elem:first-of-type选中父元素下第一个elem类型元素。
>
> （7）elem:last-of-type选中父元素下最后一个elem类型元素。
>
> （8）elem:only-of-type如果父元素下的子元素只有一个elem类型元素，则选中该元素。
>
> （9）elem:empty选中不包含子元素和内容的elem类型元素。
>
> （10）elem:target选择当前活动的elem元素。
>
> （11）:not(elem)选择非elem元素的每个元素。
>
> （12）:enabled 控制表单控件的禁用状态。
>
> （13）:disabled	控制表单控件的禁用状态。
>
> (14):checked单选框或复选框被选中。

## 8. 如何居中div?

### 水平居中(普通盒子)

#### 给div设置一个宽度，然后添加margin:0 auto属性

```css
div {
  width: 200px;
  margin: 0 auto;
}
```

#### 利用text-align:center实现

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

#### 设置四个方向的值都为0，并将margin设置为auto。

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

#### 利用绝对定位，先将元素的左上角通过top:50%和left:50%定位到页面的中心，然后再通过margin负值来调整元素的中心点到页面的中心。

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

#### 利用绝对定位，先将元素的左上角通过top:50%和left:50%定位到页面的中心，然后再通过translate来调整元素的中心点到页面的中心。

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

#### 使用flex布局，通过align-items:center和justify-content:center设置容器的垂直和水平方向上为居中对齐，然后它的子元素也可以实现垂直和水平的居中。

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

## 9. dispaly有哪些值？说明他们的作用

> 答：
>
> block	块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
> none	元素不显示，并从文档流中移除。
> inline	行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。
> inline-block 默认宽度为内容宽度，可以设置宽高，同行显示。
> list-item	像块类型元素一样显示，并添加样式列表标记。
> table	此元素会作为块级表格来显示。
> inherit	规定应该从父元素继承display属性的值。

## 10.position的值relative和absolute定位原点是？

> 答：relative定位的元素，是相对于元素本身的正常位置来进行定位的。
>
> ablolute定位的元素，是相对于它的第一个position值不为static的祖先元素的padding box来进行定位的。

## 11. CSS3有哪些新特性？

> 答：
>
> 新增各种CSS选择器	（:not(.input)：所有class不是“input”的节点）
> 圆角		（border-radius:8px）
> 多列布局	（multi-column layout）
> 阴影和反射	（Shadow\Reflect）
> 文字特效		（text-shadow）
> 文字渲染		（Text-decoration）
> 线性渐变		（gradient）
> 旋转			（transform）
> 缩放，定位，倾斜，动画，多背景

## 12. 请解释CSS3的flex box

> 答：flex布局是CSS3新增的一种布局方式，我们可以通过将一个元素的display属性值设置为flex从而使它成为一个flex
> 容器，它的所有子元素都会成为它的项目。对于容器中的项目，我们可以使用order属性来指定项目的排列顺序，还可以使用flex-grow来指定当排列空间有剩余的时候，项目的放大比例。还可以使用flex-shrink来指定当排列空间不足时，项目的缩小比例。

## 13. 用纯CSS创建一个三角形

> 答：6种方法
>
> 1. 利用border
> 2. 利用linear-gradient
> 3. 利用conic-gradient
> 4. 利用rotate和overflow
> 5. 利用clip-path
> 6. 利用十进制Unicode表示码

## 14. 一个满屏品字布局如何设计？

> 答：简单的方式：
> 	上面的div宽100%，
> 	下面的两个div分别宽50%，
> 	然后用float或者inline使其不换行即可

## 15. CSS多列等高如何实现？

> 答：利用padding-bottom|margin-bottom正负值相抵，不会影响页面布局的特点。设置父容器设置超出隐（overflow:
> hidden）利用flex布局。

## 16. 经常遇到的浏览器的兼容性问题有哪些？

> （1）png24位的图片在iE6浏览器上出现背景
> 解决方案：做成PNG8，也可以引用一段脚本处理。
>
> （2）浏览器默认的margin和padding不同
> 解决方案：加一个全局的*{margin:0;padding:0;}来统一。
>
> （3）IE6双边距bug：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或
> margin-right，margin值会加倍。
>
> （4）渐进识别的方式，从总体中逐渐排除局部。
> 首先，巧妙的使用"\9"这一标记，将IE游览器从所有情况中分离出来。
> 接着，再次使用"+"将IE8和IE7、IE6分离开来，这样IE8已经独立识别。
> .bb{
> background-color:#f1ee18;/*所有识别*/
> .background-color:#00deff\9;/*IE6、7、8识别*/
> +background-color:#a200ff;/*IE6、7识别*/
> _background-color:#1e0bd1;/*IE6识别*/
> }
>
> （5）IE下，可以使用获取常规属性的方法来获取自定义属性，也可以使用getAttribute()获取自定义
> 属性；Firefox下，只能使用getAttribute()获取自定义属性
> 解决方法：统一通过getAttribute()获取自定义属性。
>
> （6）IE下，event对象有x、y属性，但是没有pageX、pageY属性;Firefox下，event对象有
> pageX、pageY属性，但是没有x、y属性。
> 解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。
>
> （7）Chrome中文界面下默认会将小于12px的文本强制按照12px显示
> 解决方法：
>
> 1.可通过加入CSS属性-webkit-text-size-adjust:none;解决。但是，在chrome
> 更新到27版本之后就不可以用了。
>
> 2.还可以使用-webkit-transform:scale(0.5);注意-webkit-transform:scale(0.75);
> 收缩的是整个span的大小，这时候，必须要将span转换成块元素，可以使用display：block/inline-block/...；
>
> （8）超链接访问过后hover样式就不出现了，被点击访问过的超链接样式不再具有hover和active了
> 解决方法：改变CSS属性的排列顺序L-V-H-A
>
> （9）怪异模式问题：漏写DTD声明，Firefox仍然会按照标准模式来解析网页，但在IE中会触发怪异模
> 式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写DTD声明的好习惯。

## 17. li与li之间有看不见的空白间隙是什么原因引起的？有什么解决办法？

> 答：浏览器会把inline元素间的空白字符（空格、换行、Tab等）渲染成一个空格。而为了美观。我们通常是一个<li>放在一行，
> 这导致<li>换行后产生换行字符，它变成一个空格，占用了一个字符的宽度。
>
> 解决办法：
>
> （1）为<li>设置float:left。不足：有些容器是不能设置浮动，如左右切换的焦点图等。
>
> （2）将所有<li>写在同一行。不足：代码不美观。
>
> （3）将<ul>内的字符尺寸直接设为0，即font-size:0。不足：<ul>中的其他字符尺寸也被设为0，需要额外重新设定其他
> 字符尺寸，且在Safari浏览器依然会出现空白间隔。
>
> （4）消除<ul>的字符间隔letter-spacing:-8px，不足：这也设置了<li>内的字符间隔，因此需要将<li>内的字符
> 间隔设为默认letter-spacing:normal。

## 18. 为什么要初始化CSS样式？

> 答：因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
>
> 最简单的初始化方法：
>
> *{padding:0;margin:0}

## 19. 什么是包含块，对于包含块的理解？

> 答：包含块是一个非常重要的概念，通常包含块是当前元素的最近祖先元素的内容区，包含块的形成依赖于CSS position属性。
>
> CSS中例如`width`、`height`、`padding`等属性在设置百分比值时，浏览器会动态计算实际的像素值，百分比的计算基数就是该元素的包含块对应的实际属性值。
>
> 例如计算当前元素的百分比值的height属性，则其值为：`包含块height值*当前元素height百分比值`。

absolute，绝对定位，包含块就是由它的最近的 `position` 的值不是`static`的祖先元素的内边距区的边缘组成。

fixed，固定定位，在[连续媒体](https://link.juejin.cn/?target=http%3A%2F%2Fwww.ayqy.net%2Fdoc%2Fcss2-1%2Fmedia.html%23continuous-media-group)下(`continuous media`)包含块是 `viewport`（视口）

realtive,相对定位，包含块是最近祖先块级元素或[格式化上下文](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FCSS%2FCSS_Flow_Layout%2FIntro_to_formatting_contexts)。

static,默认值，没有定位，元素出现在正常的流中（忽略 `top`, `bottom`, `left`, `right` 或者 `z-index` 声明），同`relative`规则

## 20. CSS里的visibility属性有个collapse属性值是干嘛用的？

> （1）对于一般的元素，它的表现跟visibility：hidden;是一样的。元素是不可见的，但此时仍占用页面空间。
>
> （2）但例外的是，如果这个元素是table相关的元素，例如table行，table group，table列，table column group，它的表现却跟display:none一样，也就是说，它们占用的空间也会释放。
>
> 在不同浏览器下的区别：
>
> 在谷歌浏览器里，使用collapse值和使用hidden值没有什么区别。
>
> 在火狐浏览器、Opera和IE11里，使用collapse值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位
> 置。

## 21. width:auto和width:100%的区别

> 答：一般而言
>
> width:100%会使元素box的宽度等于父元素的content box的宽度。
>
> width:auto会使元素撑满整个父元素，margin、border、padding、content区域会自动分配水平空间。

## 22. 绝对定位元素与非绝对定位元素的百分比计算的区别

> 答：
>
> 绝对定位元素的宽高百分比是相对于临近的position不为static的祖先元素的padding box来计算的。
>
> 非绝对定位元素的宽高百分比则是相对于父元素的content box来计算的。

## 23. 简单介绍使用图片base64编码的优点和缺点。

> 答：base64编码是一种图片处理格式，通过特定的算法将图片编码成一长串字符串，在页面上显示的时候可以用该字符串来代替图片的url属性。
>
> 使用base64的优点是：
>
> （1）：减少一个图片的HTTP请求
>
> 使用base64的缺点是：
>
> （1）：根据base64的编码原理，编码后的大小会比原文件大小大1/3，影响文件的加载速度，还会增加浏览器对html或css文件解析渲染的速度。
>
> （2）使用base64无法直接缓存，要缓存只能缓存包含base64的html或css文件。
>
> （3）存在兼容性问题，ie8以前的浏览器不支持。

## 24. display,position和float的相互关系？

> 答：（1）首先我们判断display属性是否为none，如果为none，则position和float属性的值不影响元素最后的表现。
>
> （2）然后判断position的值是否为absolute或者fixed，如果是，则float属性失效，并且display的值应该被
> 设置为table或者block，具体转换需要看初始转换值。
>
> （3）如果position的值不为absolute或者fixed，则判断float属性的值是否为none，如果不是，则display
> 的值则按上面的规则转换。注意，如果position的值为relative并且float属性的值存在，则relative相对
> 于浮动后的最终位置定位。
>
> （4）如果float的值为none，则判断元素是否为根元素，如果是根元素则display属性按照上面的规则转换，如果不是，
> 则保持指定的display属性值不变。
>
> 总的来说，可以把它看作是一个类似优先级的机制，"position:absolute"和"position:fixed"优先级最高，有它存在
> 的时候，浮动不起作用，'display'的值也需要调整；其次，元素的'float'特性的值不是"none"的时候或者它是根元素
> 的时候，调整'display'的值；最后，非根元素，并且非浮动元素，并且非绝对定位的元素，'display'特性值同设置值。

## 25. margin重叠问题的理解

> 答:
>
> margin重叠指的是在垂直方向上，两个相邻元素的margin发生重叠的情况。
>
> 一般来说可以分为四种情形：
>
> 第一种是相邻兄弟元素的marin-bottom和margin-top的值发生重叠。这种情况下我们可以通过设置其中一个元素为BFC
> 来解决。
>
> 第二种是父元素的margin-top和子元素的margin-top发生重叠。它们发生重叠是因为它们是相邻的，所以我们可以通过这
> 一点来解决这个问题。我们可以为父元素设置border-top、padding-top值来分隔它们，当然我们也可以将父元素设置为BFC来解决。
>
> 第三种是高度为auto的父元素的margin-bottom和子元素的margin-bottom发生重叠。它们发生重叠一个是因为它们相
> 邻，一个是因为父元素的高度不固定。因此我们可以为父元素设置border-bottom、padding-bottom来分隔它们，也可以为父元素设置一个高度，max-height和min-height也能解决这个问题。当然将父元素设置为BFC是最简单的方法。
>
> 第四种情况，是没有内容的元素，自身的margin-top和margin-bottom发生的重叠。我们可以通过为其设置border、pa
> dding或者高度来解决这个问题。

## 26. 对BFC规范的理解？

