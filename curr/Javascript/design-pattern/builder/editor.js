function Editor() {
  this.initer = new InitHTML()
  this.fontControl = new FontControl()
  this.stateControl = new StateControl()
}

function InitHTML() {}
InitHTML.prototype.initStyle = function () {}
InitHTML.prototype.renderDom = function () {}

function FontControl() {}
FontControl.prototype.changeFontSize = function () {}
FontControl.prototype.changeColor = function () {}

function StateControl() {
  this.state = []
  this.curState = 0
}
StateControl.prototype.saveState = function () {}
StateControl.prototype.stateBack = function () {
  var state = this.state[this.curState - 1]
  this.fontControl.changeColor(state.color)
  this.fontControl.changeFontSize(state.fontSize)
}
StateControl.prototype.stateGo = function () {}

window.Editor = Editor
