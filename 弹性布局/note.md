# 弹性布局

使布局更方便更简单。

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

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

<!-- /code_chunk_output -->

---

## 弹性容器、弹性子元素

设置了`display: flex`的元素是**弹性容器**。
这个元素内的**直接子元素**按照弹性布局方式进行布局，为**弹性子元素**。

---

## 弹性主轴

### 主轴方向

在父元素中设置`flex-direction: ;`

- **默认**从左到右：`flex-direction: row;`
- 从右到左：`flex-direction: row-reverse;`
- 从上到下：`flex-direction: column;`
- 从下到上：`flex-direction: column-reverse;`

多弹性子元素超出弹性容器宽高范围，**默认**不换行，按比例压缩。

### 主轴内容分布

在父元素中设置`justify-content: ;`

- 向主轴的**开始位置**靠拢（**默认**）：`justify-content: flex-start;`
- 向主轴的**结束位置**靠拢：`justify-content: flex-end;`
- 向主轴的**中心位置**靠拢：`justify-content: center;`
- 平均分布（两边有间距，是中间间距的一半）：`justify-content: space-around`
- 平均分布（两边无间距）：`justify-content: space-between`
- 平均分布（两边有间距，和中间间距一样）：`justify-content: space-evenly`（新，不一定被所有浏览器支持）

---

## 弹性侧轴

### 侧轴方向

与主轴方向垂直

### 侧轴内容分布

在父元素中设置`align-items: ;`

- 拉伸（**默认**，如果设置高度，则无效）：`align-items: stretch`
- 向侧轴的**开始位置**靠拢：`align-items: flex-start;`
- 向侧轴的**结束位置**靠拢：`align-items: flex-end;`
- 向侧轴的**中心位置**靠拢：`align-items: flex-center;`

---

## 弹性换行

在父元素中设置`flex-wrap: ;`

- 不换行（**默认**）：`flex-wrap: nowrap;`
- 换行：`flex-wrap: wrap;`

### 多行分布

在父元素中设置`align-content: ;`

- 多行内容向侧轴的**开端**靠拢： `align-content: flex-start;`
- 多行内容向侧轴的**结束端**靠拢： `align-content: flex-end;`
- 多行内容**居中**： `align-content: center;`
- 平均分布（两边有间距，是中间间距的一半）： `align-content: space-around;`
- 平均分布（两边无间距）： `align-content: space-between;`
- 平均分布（两边有间距，和中间间距一样）： `align-content: space-evenly;`

如果换行，一定要设置换行的分布情况

## 剩余空间分布

设置父容器为弹性容器，在非固定宽度的弹性子容器内设置`flex: ;`，值为该子容器占据剩余空间的分数的份数。

如：弹性子容器1中的`flex: 1;`是弹性子容器2中的`flex: 2;`的50%。

## 子元素排序

在子元素上设置`order: ;`

## 单独设置子元素侧轴排布

在子元素上设置`align-self: ;`

- 居中：`align-self: center;`
- 靠近侧轴的开端：`align-self: flex-start;`
- 靠近侧轴的结束端：`align-self: flex-end;`
- 拉伸：`align-self: stretch;`
