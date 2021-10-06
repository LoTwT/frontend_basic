// 桥接模式基本结构
// 需求：三种形状、三种颜色

function rect(color) {
  showColor(color)
}

function circle(color) {
  showColor(color)
}

function delta(color) {
  showColor(color)
}

function showColor(color) {}

// 当需要一个蓝色的矩形时
new rect("blue")
