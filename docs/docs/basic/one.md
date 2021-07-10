# Flex 布局

> 我们都知道网页布局是 CSS 应用的重点，布局的传统方案是基于盒状模型，依赖`dispaly`属性，`position`属性和`float`属性。传统的方案对于那些特殊布局非常不方便。例如垂直居中。然而 flex 布局的出现可以轻松应对这些问题，它可以简便、完整、响应式地实现各种页面布局，且得到了所有浏览器的支持，Flex 布局如今已成为布局的首选方案，本文就介绍 flex 的使用，带你感受它的魅力，快来学习吧~

# 1. 相遇——Flex 布局是什么？

> Flex 布局,又称”弹性布局“，它具有很大的灵活性。

任何一个容器都可以指定为 Flex 布局。

```css
.box {
  display: flex;
}
```

行内元素也可以使用 Flex 布局。

```css
.box {
  display: inline-flex;
}
```

[^注意，设为 Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。]:

# 2. 相识——Flex 布局中的基本概念

> 采用 Flex 布局的元素，叫做 Flex 容器，简称**容器**，它的所有子元素自动成为容器成员，称为 Flex 项目，简称**项目**。

# 3. 相知——Flex 容器的属性

> Flex 容器上共有 6 个属性:
>
> - flex-direction
> - flex-wrap
> - flex-flow
> - justify-content
> - align-items
> - align-content

## 3.1 flex-direction 属性

`flex-direction`属性决定主轴的方向（即项目的排列方向）

可能四个值:

- `row`（默认值）：主轴为水平方向，起点在左端(→)。
- `row-reverse`：主轴为水平方向，起点在右端(←)。
- `column`：主轴为垂直方向，起点在上沿。(↓)
- `column-reverse`：主轴为垂直方向，起点在下沿（↑）。

## 3.2 flex-wrap 属性

默认情况下，项目都排在一条线上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行。

可能取三个值：

`nowrap`：（默认值）：不换行。

![2](flex布局.assets/2.png)

`wrap`：换行，第一行在上方。

![3](flex布局.assets/3.jpg)

`wrap-reverse`：换行，第一行在下方。

![](flex布局.assets/4.jpg)

## 3.3 flex-flow 属性

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

```css
.box {
  flex-flow: row nowrap;
}
```

## 3.4 justify-content 属性

`justify-content`属性定义了项目在主轴上的对齐方式。

它可能取 5 个值：

- `flex-start`（默认值）：左对齐
- `flex-end`：右对齐
- `center`： 居中
- `space-between`：两端对齐，项目之间的间隔都相等。
- `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

![](flex布局.assets/5.png)

## 3.5 align-items 属性

`align-items`属性定义项目在交叉轴上如何对齐。

它可能取 5 个值：

- `flex-start`：交叉轴的起点对齐。
- `flex-end`：交叉轴的终点对齐。
- `center`：交叉轴的中点对齐。
- `baseline`: 项目的第一行文字的基线对齐。
- `stretch`（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。

![](flex布局.assets/6.png)

## 3.6 align-content 属性

`align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

该属性可能取 6 个值：

- `flex-start`：与交叉轴的起点对齐。
- `flex-end`：与交叉轴的终点对齐。
- `center`：与交叉轴的中点对齐。
- `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。
- `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- `stretch`（默认值）：轴线占满整个交叉轴。

# 4. 相爱——Flex 项目的属性

> Flex 项目上共有 6 个属性：
>
> - `order`
> - `flex-grow`
> - `flex-shrink`
> - `flex-basis`
> - `flex`
> - `align-self`

## 4.1 order 属性

`order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0

![](flex布局.assets/7.png)

## 4.2 flex-grow 属性

`flex-grow`属性定义项目的放大比例，默认为 0，即如果存在剩余空间也不放大。

> 如果所有的项目的 flex-grow 属性都为 1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。

![](flex布局.assets/8.png)

## 4.3 flex-shrink 属性

`flex-shrink`属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。

> 如果所有项目的`flex-shrink`属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为 0，其他项目都为 1，则空间不足时，前者不缩小。

![](flex布局.assets/10.jpg)

[^负值对该属性无效。]:

## 4.4 flex-basis 属性

`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。

> Item One{flex-basis:auto；}

![](flex布局.assets/9.png)

> Item One{flex-basis:0；}

![](flex布局.assets/11.png)

> Item One{flex-basis:200px；}

![](flex布局.assets/12.png)

## 4.5 flex 属性

`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

> 优先使用这个属性，而不是单独写三个分离的属性，浏览器会算出相关的值。

## 4.6 align-self 属性

`align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

该属性可能取 6 个值，除了 auto，其他都与 align-items 属性完全一致。

这个属性不太好理解，大家可以查看 MDN，上面有小 Demo,有助于理解。

[MDN-align-self 解析](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-self)

# 最后

本文总结了 Vue 中的高级特性，虽然你在工作中不一定能用到，但是正所谓技多不压身，掌握这些技巧也许就有发挥作用的时候呢，我们要清楚各种特性的应用场景，相信通过学习积累，读者一定能玩转 Vue 啦~<br>
如果这篇文章对你有帮助的话，麻烦点赞收藏哟~<br>
GitHub 博客地址: https://github.com/skyblue309 。<br>
笔者还有其他专栏，欢迎阅读~<br>
[Vue 从放弃到入门](https://juejin.cn/column/6962133748536049672)<br>
[深入浅出 JavaScript](https://juejin.cn/column/6975658288390078500)<br>
[玩转 CSS 之美](https://juejin.cn/column/6975655497030434852)
