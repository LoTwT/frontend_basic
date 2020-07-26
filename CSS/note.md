# CSS

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [CSS 使用方式](#css-使用方式)
- [优先级](#优先级)
  - [内联样式](#内联样式)
  - [内部样式](#内部样式)
  - [外部样式](#外部样式)
- [选择器](#选择器)
  - [属性选择器](#属性选择器)
  - [子元素选择器](#子元素选择器)
    - [直接子元素选择器](#直接子元素选择器)
    - [选择某个元素后面的元素](#选择某个元素后面的元素)
    - [选择某个元素后面的多个元素](#选择某个元素后面的多个元素)
- [伪元素](#伪元素)
- [浮动](#浮动)
- [字体属性](#字体属性)
  - [字体类型](#字体类型)
  - [字体大小](#字体大小)
  - [字体粗细](#字体粗细)
  - [字体颜色](#字体颜色)
  - [文字排布](#文字排布)
  - [文字行高](#文字行高)
  - [文字阴影](#文字阴影)
- [过渡动画](#过渡动画)
  - [过渡属性](#过渡属性)
  - [过渡时间](#过渡时间)
  - [过渡速度](#过渡速度)
  - [过渡延迟](#过渡延迟)
- [转换](#转换)
  - [2D转换](#2d转换)
  - [3D转换](#3d转换)
  - [缩放](#缩放)
- [选项框](#选项框)
  - [单选框](#单选框)
  - [复选框](#复选框)
- [定位](#定位)
  - [静态定位](#静态定位)
  - [固定定位](#固定定位)
  - [相对定位](#相对定位)
  - [绝对定位](#绝对定位)
  - [粘性定位](#粘性定位)
  - [z-index](#z-index)
- [动画](#动画)
  - [名称](#名称)
  - [时间周期](#时间周期)
  - [变化速度](#变化速度)
  - [延迟时间](#延迟时间)
  - [循环次数](#循环次数)
  - [运动方向](#运动方向)
  - [最后一帧](#最后一帧)
- [字体图标](#字体图标)
  - [Unicode引用](#unicode引用)
  - [font-class引用](#font-class引用)
  - [Symbol引用](#symbol引用)
- [弹性布局](#弹性布局)
  - [弹性容器、弹性子元素](#弹性容器-弹性子元素)
  - [弹性主轴](#弹性主轴)
    - [主轴方向](#主轴方向)
    - [主轴内容分布](#主轴内容分布)
  - [弹性侧轴](#弹性侧轴)
    - [侧轴方向](#侧轴方向)
    - [侧轴内容分布](#侧轴内容分布)
  - [弹性换行](#弹性换行)
    - [多行分布](#多行分布)
  - [剩余空间分布](#剩余空间分布)
  - [子元素排序](#子元素排序)
  - [单独设置子元素侧轴排布](#单独设置子元素侧轴排布)
- [移动端和响应式](#移动端和响应式)
  - [媒体查询](#媒体查询)
- [盒子模型](#盒子模型)

<!-- /code_chunk_output -->

---

## CSS 使用方式

## 优先级

1. 优先级：**内联样式最高**，同样的选择器，谁在后面谁的优先级比较高。
1. 选择器优先级关系：内联样式 > ID 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器
1. !important：提升优先级到最高
1. 越具体越复杂的选择器，优先级越高。

### 内联样式

在对应元素行内，通过 style 属性，以键值对形式，设置样式。

### 内部样式

在 HTML 文件内，通过 style 标签，设置样式。

### 外部样式

通过外部单独的 CSS 文件，设置样式。

---

## 选择器

### 属性选择器

```html
<style>
  /* 单独选择某个属性 */
  [属性名称] {}
  /* 选择这个属性具体的某个值的元素 */
  [属性名称="属性值"] {}
</style>
```

[属性选择器](html/选择器/属性选择器.html)

### 子元素选择器

```html
<style>
    /* 选择第几个子元素，填入参数 */
    nth-child() {}
    /* 选择最后一个子元素 */
    last-child {}
</style>
```

[子元素选择器](html/选择器/子元素选择器.html)

#### 直接子元素选择器

```html
<style>
    .parent>div {}
</style>
```

[直接子元素选择器](html/选择器/直接子元素选择器.html)

#### 选择某个元素后面的元素

```html
<style>
    .d3 + div {}
</style>
```

[选择某个元素后面的元素](html/选择器/选择某个元素后面的元素.html)

#### 选择某个元素后面的多个元素

```html
<style>
    .d3 ~ div {}
</style>
```

[选择某个元素后面的多个元素](html/选择器/选择某个元素后面的多个元素.html)

---

## 伪元素

通过CSS可以创建假的元素

```html
<style>
    /* 在元素内部创建1个最前面假的子元素 */
    .chat:before {}
    /* 在元素内部创建1个最后面假的子元素 */
    .chat:after {}
</style>
```

伪元素默认是行元素。

注意：创建伪元素时，content属性必须写，无默认值可设置`content: "";`

[伪元素](html/伪元素/伪元素.html)

---

## 浮动

可以设置元素，脱离正常的文档流，向左或者向右，靠近父元素的边缘或者是设置了浮动的其他的元素的边缘靠拢。

在style标签，img中设置`float: ;`

```html
<style>
  img {
    float: ;
  }
</style>
```

1. 浮动可以解决文字包围图片的问题。

    [文字包围图片问题](html/浮动/文字包围图片问题.html)

1. 浮动可以解决莫名其妙的间隔问题。

    [莫名其妙的间隔问题](html/浮动/莫名其妙的间隔问题.html)

1. 浮动的高度塌陷问题
  
    - 设定父元素高度
    - 伪元素清除浮动（最佳解决方案）

      ```html
        <style>
          .clear::after {
            content: "";
            display: block;
            clear: both;
          }
        </style>
      ```

    [高度塌陷](html/浮动/高度塌陷.html)
  
1. 浮动可以向左，向右进行排版对齐。

---

## 字体属性

[字体](html/字体/字体.html)

### 字体类型

设置`font-family: ;`
设置的字体必须在系统内存在，如果没有，则默认按照系统字体样式显示

### 字体大小

设置`font-size: ;`

### 字体粗细

设置`font-weight: ;`
默认正常的字体粗细，是一个相对的值，如果设置900，但系统没有这么粗的字体，则按照默认样式显示

### 字体颜色

设置`color: ;`

### 文字排布

设置`text-align: ;`
默认向左

### 文字行高

设置`line-height: ;`

### 文字阴影

设置`text-shadow: ;`
水平偏移距离 垂直偏移距离 模糊度 阴影的颜色
多个阴影可以叠加

[文字阴影](html/字体/文字阴影.html)

---

## 过渡动画

设置`transition: ;`简写属性，用于在一个属性中设置四个过渡属性，是综合性过渡效果设置。

### 过渡属性

设置`transition-property: ;`

### 过渡时间

设置`transition-duration: ;`
 可设置多个值，或直接设置为all。

### 过渡速度

设置`transition-timing-function: ;`

- 默认值ease，从慢到快到慢
- linear，设置线性速度
- ease-in，从慢到快
- ease-out，从快到慢
- cubic-bezier(0, 0.95, 1, 0.07)可以通过浏览器进行调节，获取贝塞尔曲线

### 过渡延迟

设置`transition-delay: ;`

[过渡动画](html/过渡动画/过渡动画.html)
[小米悬浮过渡效果](html/过渡动画/小米悬浮过渡效果.html)

---

## 转换

### 2D转换

设置`transform: ;`
效果更好，帧数更高。

- 移动
  设置`transform: translate(x, y);`
  x代表水平移动的距离，y代表竖直移动的距离
  等同于设置`transform: translateX(x) translateY(y);`
  [2D移动](html/转换/2D移动.html)

- 旋转
  设置`transform: rotate();`
  填入需要旋转的角度，带上单位`deg`
  [2D旋转](html/转换/2D旋转.html)
  
### 3D转换

  三维立体空间，有水平轴x轴，竖直轴y轴，垂直屏幕射向眼睛的z轴。

  父元素中设置透视点`perspective: ;`，定义 3D 转换元素的透视视图。

- 旋转
  子元素中设置:
  `transform: rotateX();`
  `transform: rotateY();`
  `transform: rotateZ();`
  [3D旋转](html/转换/3D旋转.html)

- 移动
  子元素中设置:
  `transform: translateX();`
  `transform: translateY();`
  `transform: translateZ();`
  [3D移动](html/转换/3D移动.html)

### 缩放

设置`transform: scale();`，填入放大的倍数。

---

## 选项框

### 单选框

设置`type="radio"`
name值相同为同一个选项，只有1个内容会被选中。

```html
<h3>请选择你的性别：</h3>
男<input type="radio" name="gender" value="男"/>
女<input type="radio" name="gender" value="女"/>
```

<h3>请选择你的性别：</h3>
男<input type="radio" name="gender" value="男"/>
女<input type="radio" name="gender" value="女"/>

[check状态应用](html/选项框/check状态应用.html)

[label绑定选项框](html/选项框/label绑定选项框.html)

---

### 复选框

设置`type="checkbox"`
同一个选项，name值要相同，但可以有多个内容被选中。

```html
<h3>请选择你喜欢的城市</h3>
北京<input type="checkbox" name="favcity" value="北京" />
上海<input type="checkbox" name="favcity" value="上海" />
广州<input type="checkbox" name="favcity" value="广州" />
深圳<input type="checkbox" name="favcity" value="深圳" />
```

<h3>请选择你喜欢的城市</h3>
北京<input type="checkbox" name="favcity" value="北京" />
上海<input type="checkbox" name="favcity" value="上海" />
广州<input type="checkbox" name="favcity" value="广州" />
深圳<input type="checkbox" name="favcity" value="深圳" />

---

## 定位

[定位应用](html/定位/定位应用.html)

### 静态定位

默认情况，不做定位。

### 固定定位

根据浏览器的位置定位。脱离正常的文档流。
设置`position: fixed;`，必须配合left、right、top、bottom。
[固定定位](html/定位/固定定位.html)

### 相对定位

相对于自己当前的位置进行定位。不会脱离文档流，只是样式移动了。
设置`position: relative;`
[相对定位](html/定位/相对定位.html)

### 绝对定位

相对于设置了定位的父元素或者祖先元素进行定位。会脱离正常的文档流。
设置`position: absolute;`
[绝对定位](html/定位/绝对定位.html)

### 粘性定位

新出模式，兼容不行。
[粘性定位](html/定位/粘性定位.html)

### z-index

设置`z-index: ;`，设置元素的堆叠顺序，拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。
默认值是0。

---

## 动画

设置`animation: ;`，综合性的动画设置属性。
[动画](html/动画/动画.html)
[loading](html/动画/loading.html)
[游戏动画](html/动画/游戏动画.html)
[立方体](html/动画/立方体.html)
[立方体与缩放](html/动画/立方体与缩放.html)

### 名称

设置`animation-name: ;`

### 时间周期

设置`animation-duration: ;`

### 变化速度

设置`animation-timing-function: ;`

- 默认ease
- linear
- ase-in
- ease-out
- 贝塞尔曲线

### 延迟时间

设置`animation-delay: ;`

### 循环次数

设置`animation-iteration-count: ;`
无限循环：infinite

### 运动方向

设置`animation-direction: ;`

- 默认值normal
- alternate奇数次正常运动，偶数次反方向运动
- reverse反方向运动
- alternate-reverse，奇数次反方向，偶数次正方向

### 最后一帧

设置`animation-fill-mode: ;`
保持最后一帧：forwards

---

## 字体图标

图片：比较占用带宽、放大可能产生失真、图片改变颜色不方便

字体图标：占用带宽小、不会失真、可以随意调节字体大小和颜色

[应用](html/字体图标/应用.html)

### Unicode引用

Unicode 是字体在网页端最原始的应用方式。

特点是：

- 兼容性最好，支持IE6+，及所有现代浏览器。
- 支持按字体的方式去动态调整图标大小，颜色等等。
- 因为是字体，不支持多色。只能使用平台里单色的图标，就算项目里有多色图标也会自动去色。

注意：新版 iconfont 支持多色图标，这些多色图标在 Unicode 模式下将不能使用，如果有需求建议使用symbol 的引用方式

[Unicode](html/字体图标/Unicode.html)

### font-class引用

font-class 是Unicode使用方式的一种变种，主要是解决 Unicode 书写不直观，语意不明确的问题。

特点：

- 兼容性良好，支持IE8+，及所有现代浏览器。
- 相比于Unicode语意明确，书写更直观。更容易分辨icon是什么。
- 使用class定义图标，所以当要替换图标时，只需要修改class里的Unicode引用。

缺点：不过因为本质上还是使用的字体，所以多色图标还是不支持的。

[fontclass](html/字体图标/fontclass.html)

### Symbol引用

这是一种全新的使用方式，是未来的主流，是平台目前推荐的用法。这种用法其实是做了一个SVG的集合，与另外两种相比具有如下特点：

- 支持多色图标，不再受单色限制。
- 通过一些技巧，支持像字体那样，通过 font-size、color来调整样式。
- 兼容性较差，支持IE9+，及现代浏览器。
- 浏览器渲染SVG的性能一般，还不如 png。

[Symbol](html/字体图标/symbol.html)

---

## 弹性布局

使布局更方便更简单。
[弹性布局](html/弹性布局/弹性布局.html)

### 弹性容器、弹性子元素

设置了`display: flex`的元素是**弹性容器**。
这个元素内的**直接子元素**按照弹性布局方式进行布局，为**弹性子元素**。

---

### 弹性主轴

#### 主轴方向

在父元素中设置`flex-direction: ;`

- **默认**从左到右：`flex-direction: row;`
- 从右到左：`flex-direction: row-reverse;`
- 从上到下：`flex-direction: column;`
- 从下到上：`flex-direction: column-reverse;`

多弹性子元素超出弹性容器宽高范围，**默认**不换行，按比例压缩。

#### 主轴内容分布

在父元素中设置`justify-content: ;`

- 向主轴的**开始位置**靠拢（**默认**）：`justify-content: flex-start;`
- 向主轴的**结束位置**靠拢：`justify-content: flex-end;`
- 向主轴的**中心位置**靠拢：`justify-content: center;`
- 平均分布（两边有间距，是中间间距的一半）：`justify-content: space-around`
- 平均分布（两边无间距）：`justify-content: space-between`
- 平均分布（两边有间距，和中间间距一样）：`justify-content: space-evenly`（新，不一定被所有浏览器支持）

---

### 弹性侧轴

#### 侧轴方向

与主轴方向垂直

#### 侧轴内容分布

在父元素中设置`align-items: ;`

- 拉伸（**默认**，如果设置高度，则无效）：`align-items: stretch`
- 向侧轴的**开始位置**靠拢：`align-items: flex-start;`
- 向侧轴的**结束位置**靠拢：`align-items: flex-end;`
- 向侧轴的**中心位置**靠拢：`align-items: flex-center;`

---

### 弹性换行

在父元素中设置`flex-wrap: ;`

- 不换行（**默认**）：`flex-wrap: nowrap;`
- 换行：`flex-wrap: wrap;`
[弹性换行](html/弹性布局/弹性换行.html)

#### 多行分布

在父元素中设置`align-content: ;`

- 多行内容向侧轴的**开端**靠拢： `align-content: flex-start;`
- 多行内容向侧轴的**结束端**靠拢： `align-content: flex-end;`
- 多行内容**居中**： `align-content: center;`
- 平均分布（两边有间距，是中间间距的一半）： `align-content: space-around;`
- 平均分布（两边无间距）： `align-content: space-between;`
- 平均分布（两边有间距，和中间间距一样）： `align-content: space-evenly;`

如果换行，一定要设置换行的分布情况

### 剩余空间分布

设置父容器为弹性容器，在非固定宽度的弹性子容器内设置`flex: ;`，值为该子容器占据剩余空间的分数的份数。

如：弹性子容器1中的`flex: 1;`是弹性子容器2中的`flex: 2;`的50%。

[剩余空间分布](html/弹性布局/剩余空间分布.html)

### 子元素排序

在子元素上设置`order: ;`
[子元素排序](html/弹性布局/子元素排序.html)

### 单独设置子元素侧轴排布

在子元素上设置`align-self: ;`

- 居中：`align-self: center;`
- 靠近侧轴的开端：`align-self: flex-start;`
- 靠近侧轴的结束端：`align-self: flex-end;`
- 拉伸：`align-self: stretch;`

[单独设置子元素测轴的排布](html/弹性布局/单独设置子元素测轴的排布.html)

---

## 移动端和响应式

一般情况下，一个项目，一般会划分为PC端的页面和移动端的页面。

但并不是所有页面都需要移动端和PC端响应，页面复杂时，代码会比较凌乱和繁多，不能针对性设置PC和移动端页面。

[移动端和响应式](html/响应式/移动端和响应式.html)

### 媒体查询

设置`@media sceen {}`
必须加上`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
[响应式](html/响应式/响应式.html)

---

## 盒子模型

设置`box-sizing: ;`，盒子模型的大小设定。

- content-box，默认值，希望内容大小固定时使用
- border-box，希望整个盒子大小是固定的，不会因为设置了内边距和border而撑开改变大小
[盒子模型](html/盒子模型/盒子模型.html)
