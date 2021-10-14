## 水平居中
- 对于行内元素：text-align: center;
- 对于确定宽度的块级元素
  
  1. width和margin实现。margin: 0 auto;
  2. 绝对定位和margin-left: -width/2，前提是父元素position: relative;

- 对于宽度未知的块级元素

  1. display:inline-block + text-align: center;实现水平居中
  2. 绝对定位+transform：translateX: -50%;
  3. flex布局使用justify-content: center;

## 垂直居中
- 利用line-height实现居中，这种方法适合纯文字类
- 通过设置父容器相对定位，子级设置绝对定位，标签通过margin实现自适应居中
- 弹性布局flex:父级设置display: flex; 子级设置margin为auto实现自适应居中
- 父级设置相对定位，子级设置绝对定位，并且通过位移transform实现