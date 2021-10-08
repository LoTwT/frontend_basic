function MenuItem(word, color) {
  this.word = word
  this.dom = document.createElement("div")
  this.dom.innerHTML = this.word
  this.color = color
}

MenuItem.prototype.bind = function () {
  var self = this

  this.dom.onmouseover = function () {
    this.style.color = self.color.colorOver
  }

  this.dom.onmouseout = function () {
    this.style.color = self.color.colorOut
  }
}

function MenuColor(colorOver, colorOut) {
  this.colorOver = colorOver
  this.colorOut = colorOut
}

var data = [
  { word: "menu1", color: ["red", "black"] },
  { word: "menu2", color: ["pink", "white"] },
]

for (var i = 0; i < data.length; i++) {
  new MenuItem(data[i].word, new MenuColor(data[i][0], data[i][1]).bind())
}
