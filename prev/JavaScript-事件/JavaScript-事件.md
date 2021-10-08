# JavaScript-事件

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [事件](#事件)
  - [事件的三要素](#事件的三要素)
    - [获取事件源的方式](#获取事件源的方式)
    - [绑定事件的方式](#绑定事件的方式)
    - [事件驱动程序](#事件驱动程序)
  - [`onload`事件](#onload事件)

<!-- /code_chunk_output -->

---

## 事件

事件：就是文档或浏览器窗口中发生的一些特定的交互瞬间。对于 Web 应用来说，有下面这些代表性的事件：点击某个元素、将鼠标移动至某个元素上方、关闭弹窗等等。

JavaScript 是以事件驱动为核心的一门语言。JavaScript 与 HTML 之间的交互是通过事件实现的。

### 事件的三要素

事件的三要素：事件源、事件、事件驱动程序。

- 事件源：引发后续事件的html标签。
- 事件：js已经定义好了（见下图）。
- 事件驱动程序：对样式和html的操作。也就是DOM。

![常见的事件](常见的事件.png)

代码书写步骤如下：（重要）

- 获取事件源：`document.getElementById(“box”);   // 类似于Android里面的findViewById`
- 绑定事件： `事件源box.事件onclick = function(){ 事件驱动程序 };`
- 书写事件驱动程序：关于DOM的操作。

---

#### 获取事件源的方式

获取事件源的方式就是DOM节点的获取。

获取事件源的常见方式如下：

```js
var div1 = document.getElementById("box1");      //方式一：通过id获取单个标签
var arr1 = document.getElementsByTagName("div");     //方式二：通过 标签名 获得 标签数组
var arr2 = document.getElementsByClassName("nav");  //方式三：通过 类名 获得 标签数组
var d1 = document.querySelector(".d1") // 方式四：获取匹配到的第一个元素对象
var navs = document.querySelectorAll(".nav") // 方式五：获取所有匹配到的元素对象
```

---

#### 绑定事件的方式

浏览器在事件函数调用的时候，都会默认传入一个事件对象，该对象包含了此次事件的详细信息。

- 方式一：直接绑定匿名函数
  
  ```html
    <div id="box1" ></div>
    <script type="text/javascript">
        var div1 = document.getElementById("box1");
        //绑定事件的第一种方式
        div1.onclick = function () {
            alert("我是弹出的内容");
        }
    </script>
  ```

- 方式二：先单独定义函数，再绑定
  
  ```html
    <div id="box1" ></div>
    <script type="text/javascript">
        var div1 = document.getElementById("box1");
        //绑定事件的第二种方式
        div1.onclick = fn;   //注意，这里是fn，不是fn()。fn()指的是返回值。
        //单独定义函数
        function fn() {
            alert("我是弹出的内容");
        }
    </script>
  ```

  绑定的时候，是写`fn`，不是写`fn()`。fn代表的是整个函数，而`fn()`代表的是返回值。

- 行内绑定
  不建议使用

  ```js
    <!--行内绑定-->
    <div id="box1" onclick="fn()"></div>
    <script type="text/javascript">
        function fn() {
            alert("我是弹出的内容");
        }
    </script>
  ```

  注意第一行代码，绑定时，是写的`fn()`，不是写的`fn`。因为绑定的这段代码不是写在js代码里的，而是被识别成了字符串。

---

#### 事件驱动程序

在JS中操作标签的属性和样式。

- 在js里写属性值时，要用引号，**不要忘记单位**
- 在js里写属性名时，是`backgroundColor`，不是CSS里面的`background-color`。

---

### `onload`事件

当页面加载（文本和图片）完毕的时候，触发`onload`事件。

js的加载是和html同步加载的。因此，如果使用元素在定义元素之前，容易报错。这个时候，`onload`事件就能派上用场了，我们可以把使用元素的代码放在`onload`里，就能保证这段代码是最后执行。

建议是：整个页面上所有元素加载完毕再执行js内容。所以，`window.onload`可以预防使用标签在定义标签之前。

---

### `addEventListener`

`addEventListener`：事件监听器。原事件被执行时，后面被绑定的事件照样被执行。
`removeEventListener`: 移除

绑定方法不会出现层叠，适合团队开发。

```js
element.addEventListener("", function() {

}, false)
```

参数解释：

- 参数1：事件名（没有"on"）
- 参数2：事件名（执行函数）
- 参数3：默认`false`，表示冒泡阶段触发，`true`表示捕获阶段触发

冒泡：子元素到父元素，一层一层向上执行

捕获：父元素到子元素，一层一层向下执行
