function Store() {
  this.store = {}

  if (Store.install) return Store.install

  Store.install = this
}

Store.install = null
var s1 = new Store()
var s2 = new Store()
s1.store.a = 1
console.log(s2)
