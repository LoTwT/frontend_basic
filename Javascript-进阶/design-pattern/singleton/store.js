function Store() {
  if (Store.install) return Store.install

  this.store = {}
  Store.install = this
}

Store.install = null
var s1 = new Store()
var s2 = new Store()
s1.store.a = 1
console.log(s2)
