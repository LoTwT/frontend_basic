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