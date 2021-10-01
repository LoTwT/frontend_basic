// 前进后退功能
// 需求：开发一个可以移动的 div，
//      拥有前进后退功能回滚到之前的位置
function moveDiv() {
  this.stateList = []
  this.nowState = 0
}

moveDiv.prototype.move = function (type, num) {
  changeDiv(type, num)
  this.stateList.push({
    type: type,
    num: num,
  })
  this.nowState = this.stateList.length - 1
}

moveDiv.prototype.go = function () {
  var _state
  if (this.nowState < this.stateList - 1) {
    this.nowState++
    _state = this.stateList[this.nowState]
    changeDiv(_state.type, _state.num)
  }
}
