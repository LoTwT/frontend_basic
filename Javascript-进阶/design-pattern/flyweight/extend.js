function extend() {
  var target = arguments[0]
  var source

  if (arguments.length === 1) {
    target = this
    source = arguments[0]
  } else {
    target = arguments[0]
    source = arguments[1]
  }

  for (var item in source) {
    target[item] = source[item]
  }
}
