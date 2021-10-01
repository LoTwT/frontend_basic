function Strategy(type, a, b) {
  var Strategyer = {
    add: function (a, b) {
      return a + b
    },
    minus: function (a, b) {
      return a - b
    },
    division: function (a, b) {
      return a / b
    },
  }

  return Strategyer[type](a, b)
}
