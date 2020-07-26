# HTML和CSS复习

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [HTML标签语言](#html标签语言)
- [CSS层叠样式表](#css层叠样式表)
  - [标签的大小](#标签的大小)
  - [盒子模型大小](#盒子模型大小)
  - [背景](#背景)
  - [文字](#文字)
  - [布局](#布局)
  - [过渡动画](#过渡动画)
  - [动画](#动画)
  - [响应式](#响应式)

<!-- /code_chunk_output -->

---

## HTML标签语言

常用标签：

- h1-h6
- div
- ul>li
- ol>li
- a
- p
- form
- input
- 自定义标签

---

## CSS层叠样式表

### 标签的大小

- 外边距：margin
- 内边距：padding
- 边框：border
- 宽：width
- 高：height

### 盒子模型大小

`box-sizing: ;`

- content-box：默认，内容大小固定
- border-box：设定的width和height涵盖padding和border

### 背景

总体设定：`background: ;`

- background-color：背景颜色
- background-image：背景图片
- background-size：背景图尺寸
- background-position：背景图片位置
- background-repeat：背景是否重复

### 文字

- font-family：文字字体
- font-size：文字尺寸
- font-weight：文字粗细
- color：文字颜色
- text-align：文字排版
- line-height：文字行高
- text-shadow：文字阴影

### 布局

- 浮动布局：向左向右浮动，但容易致使父元素高度塌陷，用伪元素清除浮动
- 弹性布局：弹性容器、弹性子元素、主轴、测轴、主轴分布、测轴分布、剩余空间、子元素顺序、弹性换行

### 过渡动画

`transition: ;`

- 过渡属性
- 过渡动画的时间
- 过渡延迟时间
- 过渡变化的速度

### 动画

`animation: ;`

- 动画名称
- 动画的时间
- 动画的延迟时间
- 动画的速度
- 动画方向
- 动画次数

### 响应式

视窗设定`meta viewport`

- 设定移动端的设备的分辨率为它自身默认的系统分辨率（最佳分辨率）
- 设定移动端设备的分辨率为固定设计稿的分辨率（当物理分辨率小于设计稿的分辨率时会失真）
