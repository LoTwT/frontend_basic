# JavaScript-DOM

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [节点](#节点)
- [DOM](#dom)
  - [DOM是什么](#dom是什么)
  - [DOM可以做什么](#dom可以做什么)
  - [元素节点的获取](#元素节点的获取)
  - [DOM访问关系的获取](#dom访问关系的获取)
  - [DOM节点的操作](#dom节点的操作)
  - [设置节点的属性](#设置节点的属性)
  - [DOM对象的属性](#dom对象的属性)

<!-- /code_chunk_output -->

---

## 节点

节点（Node）：构成 HTML 网页的最基本单元。网页中的每一个部分都可以称为是一个节点，比如：html标签、属性、文本、注释、整个文档等都是一个节点。

虽然都是节点，但是实际上他们的具体类型是不同的。常见节点分为四类：

- 文档节点（文档）：整个 HTML 文档。整个 HTML 文档就是一个文档节点。
- 元素节点（标签）：HTML标签。
- 属性节点（属性）：元素的属性。
- 文本节点（文本）：HTML标签中的文本内容（包括标签之间的空格、换行）。

节点的类型不同，属性和方法也都不尽相同。所有的节点都是Object。

---

## DOM

### DOM是什么

DOM：Document Object Model，文档对象模型。DOM 为文档提供了结构化表示，并定义了如何通过脚本来访问文档结构。目的其实就是为了能让js操作html元素而制定的一个规范。

DOM就是由节点组成的。

解析过程：

- HTML加载完毕，渲染引擎会在内存中把HTML文档，生成一个DOM树，getElementById是获取内中DOM上的元素节点。然后操作的时候修改的是该元素的属性。

DOM树：（一切都是节点）

---

### DOM可以做什么

- 找对象（元素节点）
- 设置元素的属性值
- 设置元素的样式
- 动态创建和删除元素
- 事件的触发响应：事件源、事件、事件的驱动程序

---

### 元素节点的获取

DOM节点的获取方式其实就是获取事件源的方式。

有三种方式可以获取DOM节点：

```js
var div1 = document.getElementById("box1"); //方式一：通过 id 获取 一个 元素节点（为什么是一个呢？因为 id 是唯一的）
​
var arr1 = document.getElementsByTagName("div"); //方式二：通过 标签名 获取 元素节点数组，所以有s
​
var arr2 = document.getElementsByClassName("nav"); //方式三：通过 类名 获取 元素节点数组，所以有s

var d1 = document.querySelector(".d1") // 方式四：获取匹配到的第一个元素对象

var navs = document.querySelectorAll(".nav") // 方式五：获取所有匹配到的元素对象
```

方式二、方式三获取的是标签数组，一般是先遍历之后再使用。

特殊情况：数组中的值只有1个。即便如此，这一个值也是包在数组里的。这个值的获取方式如下：

```js
document.getElementsByTagName("div1")[0];    //取数组中的第一个元素
​
document.getElementsByClassName("nav")[0];  //取数组中的第一个元素
```

---

### DOM访问关系的获取

- DOM的节点并不是孤立的，因此可以通过DOM节点之间的相对关系对它们进行访问。
- 节点的访问关系，是以属性的方式存在的。

![JS中的父子兄弟访问关系](JS中的父子兄弟访问关系.jpg)

- 获取父节点
  调用者就是节点。一个节点只有一个父节点，调用方式是：`节点.parentNode`
&nbsp;
- 获取兄弟节点
  - 下一个节点 | 下一个元素节点：
    - `nextSibling`：
      - 火狐、谷歌、IE9+版本：都指的是下一个节点（包括标签、空文档和换行节点）。
      - IE678版本：指下一个元素节点（标签）。
    - `nextElementSibling`：
      - 火狐、谷歌、IE9+版本：都指的是下一个元素节点（标签）。

    **总结：** 为了获取下一个元素节点，我们可以这样做：在IE678中用`nextSibling`，在火狐谷歌IE9+以后用`nextElementSibling`，于是，综合这两个属性，可以这样写：
    `下一个兄弟节点 = 节点.nextElementSibling || 节点.nextSibling`
    &nbsp;
  - 前一个节点 | 前一个元素节点：
    - `previousSibling`：
      - 火狐、谷歌、IE9+版本：都指的是前一个节点（包括标签、空文档和换行节点）。
      - IE678版本：指前一个元素节点（标签）。
    - `previousElementSibling`：
      - 火狐、谷歌、IE9+版本：都指的是前一个元素节点（标签）。

    **总结：** 为了获取前一个元素节点，我们可以这样做：在IE678中用`previousSibling`，在火狐谷歌IE9+以后用`previousElementSibling`，于是，综合这两个属性，可以这样写：
    `前一个兄弟节点 = 节点.previousElementSibling || 节点.previousSibling`
    &nbsp;
  - 获得任意一个兄弟节点：
    `节点自己.parentNode.children[index];  //随意得到兄弟节点`
&nbsp;
- 获取单个的子节点
  - 第一个子节点 | 第一个子元素节点：
    - `firstChild`：
      - 火狐、谷歌、IE9+版本：都指的是第一个子节点（包括标签、空文档和换行节点）。
      - IE678版本：指第一个子元素节点（标签）。
    - `firstElementChild`：
      - 火狐、谷歌、IE9+版本：都指的是第一个子元素节点（标签）。

    **总结：** 为了获取第一个子元素节点，我们可以这样做：在IE678中用`firstChild`，在火狐谷歌IE9+以后用`firstElementChild`，于是，综合这两个属性，可以这样写：
    `第一个子元素节点 = 节点.firstElementChild || 节点.firstChild`
    &nbsp;
  - 最后一个子节点 | 最后一个子元素节点：
    - `lastChild`：
      - 火狐、谷歌、IE9+版本：都指的是最后一个子节点（包括标签、空文档和换行节点）。
      - IE678版本：指最后一个子元素节点（标签）。
    - `lastElementChild`：
      - 火狐、谷歌、IE9+版本：都指的是最后一个子元素节点（标签）。

    **总结：** 为了获取最后一个子元素节点，我们可以这样做：在IE678中用lastChild，在火狐谷歌IE9+以后用lastElementChild，于是，综合这两个属性，可以这样写：
    `最后一个子元素节点 = 节点.lastElementChild || 节点.lastChild`
&nbsp;
- 获取所有的子节点
  - `childNodes`：
    标准属性。返回的是指定元素的子节点的集合（包括元素节点、所有属性、文本节点）。是W3C的亲儿子。
    - 火狐 谷歌等高本版会把换行也看做是子节点。

    `子节点数组 = 父节点.childNodes;   //获取所有节点。`
    &nbsp;
  - children：
    非标准属性。返回的是指定元素的子元素节点的集合。【重要】
    - 它只返回HTML节点，甚至不返回文本节点。
    - 在IE6/7/8中包含注释节点（在IE678中，注释节点不要写在里面）。
  
    虽然不是标准的DOM属性，但它和innerHTML方法一样，得到了几乎所有浏览器的支持。
    `子节点数组 = 父节点.children;   //获取所有节点。用的最多。`

---

### DOM节点的操作

节点的操作都是函数（方法）。

- 创建节点
  `新的标签(元素节点) = document.createElement("标签名");`
&nbsp;
- 插入节点
  插入节点有两种方式，它们的含义是不同的。
  - 方式1：`父节点.appendChild(新的子节点);`
    解释：父节点的最后插入一个新的子节点。
  - 方式2：`父节点.insertBefore(新的子节点,作为参考的子节点)`
    解释：
    - 在参考节点前插入一个新的节点。
    - 如果参考节点为null，那么他将在父节点里面的最后插入一个子节点。
&nbsp;
- 删除节点
  - 用父节点删除子节点。必须要指定是删除哪个子节点。
  `父节点.removeChild(子节点);`
  - 想删除自己这个节点
  `node1.parentNode.removeChild(node1);`
&nbsp;
- 复制节点（克隆节点）

  ```js
  要复制的节点.cloneNode(); // 括号里不带参数和带参数false，效果是一样的。
  要复制的节点.cloneNode(true);
  ```

  括号里带不带参数，效果是不同的。解释如下：
  - 不带参数/带参数false：只复制节点本身，不复制子节点。
  - 带参数true：既复制节点本身，也复制其所有的子节点。

---

### 设置节点的属性

可以获取节点的属性值、设置节点的属性值、删除节点的属性。

- 获取节点的属性值
  - 方式1：

    ```js
    元素节点.属性名;
    元素节点[属性名];
    ```

  - 方式2：
    `元素节点.getAttribute("属性名称");`
  &nbsp;
  方式1和方式2的区别在于：前者是直接操作标签，后者是把标签作为DOM节点。推荐方式2。
&nbsp;
- 设置节点的属性值
  - 方式1:
    `元素节点.属性名 = 新的属性值`

  - 方式2：
    `元素节点.setAttribute(属性名, 新的属性值);`
&nbsp;
- 删除节点的属性
  `元素节点.removeAttribute(属性名);`

总结：

获取节点的属性值和设置节点的属性值，都有两种方式，但这两种方式是有区别的。

- 方式一的`元素节点.属性`和`元素节点[属性]`:绑定的属性值不会出现在标签上。
- 方式二的`get/set/removeAttribut`: 绑定的属性值会出现在标签上。

方式一操作的是属性而已，方式二操作的是标签本身。

需要注意的是：这两种方式不能交换使用，get值和set值必须使用用一种方法。

---

### DOM对象的属性

DOM对象的属性和HTML的标签属性几乎是一致的。例如：`src`、`title`、`className`、`href`等。

- `innerHTML`和`innerText`的区别
  - `value`：标签的value属性。
  - `innerHTML`：双闭合标签里面的内容（识别标签）。
  - `innerText`：双闭合标签里面的内容（不识别标签）。（老版本的火狐用textContent）
&nbsp;
- `outerHTML`
  设置或获取对象及其内容的HTML形式
&nbsp;
- nodeType属性
  - `nodeType == 1`：表示的是元素节点（标签） 。记住：元素就是标签。
  - `nodeType == 2`：表示是属性节点。
  - `nodeType == 3`：是文本节点。
