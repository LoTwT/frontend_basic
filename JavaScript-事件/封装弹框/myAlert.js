/**
 * args:{
 *      title: "",
 *      content: "",
 *      confirmFn: function(){},
 *      cancelFn: function() {}
 * }
 * 
 */

function myAlert(args) {
    var body = document.querySelector("body")
    var zhezhao = document.createElement("div")

    zhezhao.className = "zhezhao"
    zhezhao.innerHTML = `
            <div class="alert">
                <div class="header">
                    <span class="title">${args.title}</span>
                    <span class="close">x</span>
                </div>
                <div class="main">
                    ${args.content}
                </div>
                <div class="btnList">
                    <div class="btn confirm">确定</div>
                    <div class="btn cancel">取消</div>
                </div>
            </div>
            `
    body.appendChild(zhezhao)

    // 获取close元素
    var closeDiv = document.querySelector(".close")
    closeDiv.onclick = function () {
        body.removeChild(zhezhao)
    }

    // 获取确定按钮
    var confirmDiv = document.querySelector(".btn.confirm")
    confirmDiv.onclick = function () {
        typeof args.confirmFn() == "function" ? args.confirmFn() : console.log("传入的参数，没有设置取消函数");
        body.removeChild(zhezhao)
    }

    // 获取取消按钮
    var cancelDiv = document.querySelector(".btn.cancel")
    cancelDiv.onclick = function () {
        typeof args.cancelFn() == "function" ? args.cancelFn() : null
        body.removeChild(zhezhao)
    }
}