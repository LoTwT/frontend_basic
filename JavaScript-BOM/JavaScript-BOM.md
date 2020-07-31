# JavaScript-BOM

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [BOM](#bom)
- [延迟函数和间隔函数](#延迟函数和间隔函数)
- [时间对象](#时间对象)
- [`location`对象](#location对象)
- [`navigator`对象](#navigator对象)
- [`history`对象](#history对象)
- [frame基本概念](#frame基本概念)
- [rem布局](#rem布局)
- [本地存储](#本地存储)
  - [`localStorage`](#localstorage)
  - [`sessionStorage`](#sessionstorage)

<!-- /code_chunk_output -->

---

## BOM

BOM：Browser Object Model，浏览器对象模型。

![BOM结构图](BOM结构图.jpg)

从上图也可以看出：

- `window`对象是BOM的顶层(核心)对象，所有对象都是通过它延伸出来的，也可以称为`window`的子对象。
- DOM是BOM的一部分。

`window`对象：

- `window`对象是JavaScript中的顶级对象。
- 全局变量、自定义函数也是window对象的属性和方法。
- `window`对象下的属性和方法调用时，可以省略`window`。

---

## 延迟函数和间隔函数

- 延迟函数`setTimeout()`
  - 参数说明：
    - 第一个参数：延迟做的函数
    - 第二个参数：延迟多少毫秒时间
    - 第三个参数：给延迟触发的函数传参
  - 返回值：延迟函数id
&nbsp;
- 取消延迟函数`clearTimeout(延迟函数id)`
&nbsp;
- 间隔函数`setInterval()`
  - 参数说明：
    - 第一个参数：要做的函数
    - 第二个参数：间隔多少毫秒时间
  - 返回值：间隔函数id
&nbsp;
- 取消间隔函数`clearInterval(间隔函数id)`

---

## 时间对象

- 创建当前的时间
  `var time = new Date()`
- 获取年份
  `var year = time.getFullYear()`
- 获取月份
  月份计算是从0开始计算，所以会比正常的月份小1
  `var month = time.getMonth() + 1`
- 获取月份里第多少天
  `var date = time.getDate()`
- 获取周几
  `var day = time.getDay()`
- 获取小时
  `var hour = time.getHours()`
- 获取分钟
  `var minute = time.getMinutes()`
- 获取秒
  `var sec = time.getSeconds()`
- 获取毫秒
  `var milsec = time.getMilliseconds()`
- 获取时间戳
  `console.log([time])`
- 设置年份
  `time.setFullYear()`
- 设置月份
  月份计算是从0开始计算
 `time.setMonth()`
- 设置第多少天
  `time.setDate()`
- 设置小时
  `time.setHours()`
- 设置分钟
  `time.setMinutes()`
- 设置秒
  `time.setSeconds()`
- 设置毫秒
  `time.setMilliseconds()`

## `location`对象

window.location可以简写成location。location相当于浏览器地址栏，可以将url解析成独立的片段。

location对象的属性:

属性名|用途
---|---
href|跳转
hash|返回url中#后面的内容，包含#
host|主机名，包括端口
hostname|主机名
pathname|url中的路径部分
protocol|协议 一般是http、https
search|查询字符串

location对象的方法:

- `location.assign()`：改变浏览器地址栏的地址，并记录到历史中
- 设置`location.href`  就会调用`assign()`。一般使用`location.href` 进行页面之间的跳转。
- `location.replace()`：替换浏览器地址栏的地址，不会记录到历史中
- `location.reload()`：重新加载

---

## `navigator`对象

`window.navigator` 的一些属性可以获取客户端的一些信息。

- `userAgent`：系统，浏览器)
- `platform`：浏览器支持的系统，win/mac/linux

---

## `history`对象

- 历史记录管理
- 后退：
  - `history.back()`
  - `history.go(-1)`：0是刷新
- 前进：
  - history.forward()
  - history.go(1)

用的不多。浏览器中已经自带了这些功能的按钮。

---

## frame基本概念

可以在页面中再嵌入页面。

iframe的一些基本属性：

- `src`：设置嵌入页面的网络地址，有同域跨域之分
- `height`：高度
- `width`：宽度
- `name`：命名，可通过`window.frames[xxx]`被调用
- `scrolling`：滚动模式，`auto`，`yes`，`no`
- `sandbox html5`：新特性，用于限制iframe的功能

使用：

可以通过`contentWindow`和`contentDocument`两个API获取iframe的window对象和document对象

```js
let iframe = document.getElementById('demo');
let iwindow = iframe.contentWindow; // 获取iframe的window对象
let idoc = iframe.contentDocument; // 获取iframe的document对象，但是要在同源（同协议同ip同域名同端口）的情况下才能获取
```

通过`window.frames[iframeName]`来调用iframe。

```js
let iframe = window.frames['demo']
```

## rem布局

REM --> r root, em 相对单位，相对于HTML的字体大小单位，可以用于任何设定长度的单位。

默认：1rem = 16px

---

## 本地存储

将WEB页面中的数据存放到本地。

### `localStorage`

`localStorage`： 可以永久存放到本地，但是只要清除掉浏览器的缓存，即可删除数据。

- 存放数据
  
  ```js
  localStorage.newsTitle = "跻身前40！中国营商环境全球排名再度提升"
  localStorage['author'] = "今日头条"
  localStorage.setItem("content","习近平指出，中国秉持创新、协调、绿色、开放、共享的发展理念，推动")
  ```

- 取数据
  
  ```js
  document.write("<h1>"+localStorage.newsTitle+"</h1>")
  document.write("<h2>"+localStorage['author']+"</h2>")
  document.write("<p>"+localStorage.getItem("content")+"</p>")
  ```

- 清除1条数据
  
  ```js
  localStorage.removeItem("author")
  ```

- 清除所有数据

  ```js
  localStorage.clear()
  ```

---

### `sessionStorage`

`sessionStorage`：本地存放的数据当次有效。主要关闭页面就会将数据清除掉。

- 存放数据
  
  ```js
  sessionStorage.newsTitle = "跻身前40！中国营商环境全球排名再度提升"
  sessionStorage['author'] = "今日头条"
  sessionStorage.setItem("content","习近平指出，中国秉持创新、协调、绿色、开放、共享的发展理念，推动")
  ```

- 取数据
  
  ```js
  document.write("<h1>"+sessionStorage.newsTitle+"</h1>")
  document.write("<h2>"+sessionStorage['author']+"</h2>")
  document.write("<p>"+sessionStorage.getItem("content")+"</p>")
  ```

- 清除1条数据
  
  ```js
  sessionStorage.removeItem("author")
  ```

- 清除所有数据

  ```js
  sessionStorage.clear()
  ```
