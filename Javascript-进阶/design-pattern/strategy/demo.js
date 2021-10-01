// 状态/策略模式同
// 需求：有一个小球，可以控制它向各个方向移动

function Mover() {
  this.status = []
  this.actionHandlers = {
    left: moveLeft,
    right: moveRight,
    top: moveTop,
    bottom: moveBottom,
  }
}

Mover.prototype.run = function () {
  this.status = Array.prototype.slice.call(arguments)
  this.status.forEach((action) => this.actionHandlers[action]())
}

new Mover().run("left", "top")

function moveLeft() {
  console.log("left")
}

function moveTop() {
  console.log("top")
}

function moveBottom() {
  console.log("bottom")
}

function moveRight() {
  console.log("right")
}
