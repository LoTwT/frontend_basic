# JavaScript-Ajax

Ajax是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

通过在后台与服务器进行少量数据交换，Ajax可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [同步](#同步)
- [异步](#异步)
- [Ajax流程](#ajax流程)
- [封装Ajax](#封装ajax)

<!-- /code_chunk_output -->

---

## 同步

Ajax同步请求操作：

- js发送一个请求去请求数据
- js等待后台返回数据
- js处理完返回数据后再执行后续操作

## 异步

Ajax异步请求操作：

- js发送一个请求去请求数据
- js不等待后台返回数据
- js执行后续操作
- 后台返回数据后，js再处理数据

## Ajax流程

- 创建Ajax对象
  `var xhr = new XMLHttpRequest()`
- 设置请求
  `xhr.open()`
  - 发送请求方式（常用）
    - GET：表单提交的数据会拼接到请求的路径里，效率高
    - POST：将表单的数据放置到请求的body里，数据大，安全
  - 请求地址
    文件地址或数据库地址
- 发送数据
  `xhr.send()`
- 设置监听事件、处理数据
  监听后台是否返回数据

  ```js
  xhr.onreadystatechange = function () {
      // xhr.status
      // xhr.readyState
      if (xhr.status == 200 && xhr.readyState == 4) {
          // console.log(xhr.response);
          // 处理数据
          var res = xhr.response
          var h1 = document.createElement("div")
          h1.innerHTML = res
          document.body.appendChild(h1)
    }
  }
  ```

  - `xhr.status`：200
  - `xhr.readyState`：4

## 封装Ajax

简易封装get请求的Ajax

```js
function getAjax(httpUrl, callbackFn) {
    // 创建xhr对象
    var xhr = new XMLHttpRequest()
    // 设置请求的方法和路径
    xhr.open("GET", httpUrl)
    // 监听后台是否返回数据
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            // 处理数据
            callbackFn(xhr)
        }
    }
    // 发送数据
    xhr.send()
}
```
