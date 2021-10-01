// 文章页缓存
// 需求：项目有一个文章页需求，现在进行优化
//      如果上一篇已经读取过了，则不进行请求，否则请求文章数据
function pager() {
  var cache = {}

  return function (pageName) {
    if (cache[pageName]) {
      return cache[pageName]
    } else {
      axios.get().then((res) => (cache[pageName] = res))
      // todo
    }
  }
}
