Array.prototype.myForEach = function (callback) {
  if (!callback || typeof callback !== "function") {
    throw new Error("callback must be function")
  }

  for (let i = 0; i < this.length; i++) {
    callback.call(this, this[i], i)
  }
}
