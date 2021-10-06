// 享元模式基本结构
// 需求：有一百种不同文字的弹窗，每种弹窗行为相同，但是文字和样式不同，没有必要新建一百个弹窗对象
function Pop() {}

// 保留同样的行为
Pop.prototype.action = function () {}
// 显示弹窗
Pop.prototype.show = function (config) {}

// 提取出每个弹窗不同的部分，写成配置
var popArr = [
  { text: "this is pop1", style: [400, 400] },
  { text: "this is pop2", style: [300, 300] },
]

var poper = new Pop()
for (var i = 0; i < 100; i++) {
  poper.show(popArr[i])
}
