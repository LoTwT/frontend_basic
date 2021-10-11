// lru
function memory(f, maxSize = 10) {
  // [{hash, value}]
  let cache = []

  return (...args) => {
    const hash = args.join(",")

    // 缓存命中
    const item = cache.find((x) => x.hash === hash)
    if (item) {
      item.time = new Date().getTime()
      return item.value
    }

    // 更新缓存
    const ret = f(...args)
    cache.push({
      hash,
      value: ret,
      time: new Date().getTime(),
    })

    if (cache.length > maxSize) {
      let min = Infinity
      let minItem = null
      for (const item of cache) {
        if (item.time < min) {
          min = item.time
          minItem = item
        }
      }
      cache = cache.filter((x) => x !== minItem)
      cache.unshift()
    }

    return ret
  }
}

function fib(n) {
  if (n === 1 || n === 2) {
    return n
  }

  return memoryFib(n - 1) + memoryFib(n - 2)
}

const memoryFib = memory(fib, 10)

console.log(fib(50))
