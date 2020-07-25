# HTML常用标签

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [标题标签](#标题标签)
- [段落标签](#段落标签)
- [图片标签](#图片标签)
- [列表标签](#列表标签)
- [链接标签](#链接标签)
- [容器标签](#容器标签)
- [自定义标签](#自定义标签)
- [表单标签/input标签](#表单标签input标签)

<!-- /code_chunk_output -->

---

## 标题标签

```html
<h1>这是h1标签</h1>
<h2>这是h2标签</h2>
<h3>这是h3标签</h3>
<h4>这是h4标签</h4>
<h5>这是h5标签</h5>
<h6>这是h6标签</h6>
```

<h1>这是h1标签</h1>
<h2>这是h2标签</h2>
<h3>这是h3标签</h3>
<h4>这是h4标签</h4>
<h5>这是h5标签</h5>
<h6>这是h6标签</h6>

---

## 段落标签

```html
<p>这是P标签</p>
```

<p>这是P标签</p>

注意：在网页上直接写空格或者分行是不起效果的，必须通过标签或者css样式进行决定。

---

## 图片标签

```html
<img src="./img/hanayo.png">
```

src属性：告知图片的地址

<img src="./img/hanayo.png">

---

## 列表标签

```html
无序列表：
<ul>
    <li>新闻标题1</li>
    <li>新闻标题2</li>
    <li>新闻标题3</li>
</ul>

有序列表：
<ol>
    <li>新闻标题1</li>
    <li>新闻标题2</li>
    <li>新闻标题3</li>
</ol>
```

无序列表：

<ul>
    <li>新闻标题1</li>
    <li>新闻标题2</li>
    <li>新闻标题3</li>
</ul>

有序列表：

<ol>
    <li>新闻标题1</li>
    <li>新闻标题2</li>
    <li>新闻标题3</li>
</ol>

快速写法：ul>li{新闻标题$}*3

---

## 链接标签

用于页面之间和页面内部跳转

```html
<a href="https://www.baidu.com">百度</a>
```

<a href="https://www.baidu.com">百度</a>

<a href="页面内部跳转.html">页面内部跳转</a>

---

## 容器标签

```html
<div></div>
```

包裹不同内容，便于划分不同的区域。

---

## 自定义标签

```html
<sayhi>helloworld</sayhi>
```

<sayhi>helloworld</sayhi>

自定义标签无默认CSS样式。

---

## 表单标签/input标签

```html
<form action="" method="">
    <input type="text" name="username" placeholder="请输入用户名">
    <input type="password" name="password" placeholder="请输入密码">
    <input type="submit" value="登录">
</form>
```

<form action="" method="">
    <input type="text" name="username" placeholder="请输入用户名">
    <input type="password" name="password" placeholder="请输入密码">
    <input type="submit" value="登录">
</form>

form表单标签属性：

- action：将表单的数据提交至对应地址
- method：提交方法（get/post）
  - get：将表单数据直接放置到链接地址上，可以直接看到，不安全，但效率高
  - post：将表单数据放置到请求的body内，不直接显示，安全，但相率相对低；可提交的数据大小更大

input标签属性：

- type：定义输入标签的类型，text/password/submit......
- name：提交数据的名称
- value：提交数据的输入框的值
- placeholder：预置文字
