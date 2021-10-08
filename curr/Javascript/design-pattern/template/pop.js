function BasePop(word, size) {
  this.word = word
  this.size = size
  this.dom = null
}

BasePop.prototype.init = function () {
  var div = document.createElement("div")
  div.innerHTML = this.word
  div.style.width = this.size.width + "px"
  div.style.height = this.size.height + "px"
  this.dom = div
}

BasePop.prototype.hidden = function () {
  this.dom.style.display = "none"
}

BasePop.prototype.confirm = function () {
  this.dom.style.display = "none"
}

function AjaxPop(word, size) {
  BasePop.call(this, word, size)
}
AjaxPop.prototype = new BasePop()

var hidden = AjaxPop.prototype.hidden
AjaxPop.prototype.hidden = function () {
  hidden.call(this)
  console.log("hidden")
}

var confirm = AjaxPop.prototype.confirm
AjaxPop.prototype.confirm = function () {
  confirm.call(this)
  $.ajax()
}
