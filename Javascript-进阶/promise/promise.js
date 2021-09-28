// 手写 promise
// 1. 了解 promise 规范
// 2. 根据规范实现 promise
// 3. 测试是否符合规范

const statusMap = {
  pending: "PENDING",
  fulfilled: "FULFILLED",
  rejected: "REJECTED",
}

const isFunction = (fn) =>
  Object.prototype.toString.call(fn).toLocaleLowerCase().slice(8, -1) ===
  "function"

const isObject = (obj) =>
  Object.prototype.toString.call(obj).toLocaleLowerCase().slice(8, -1) ===
  "object"

const isPromise = (p) => p instanceof MyPromise

/**
 * 将 promise 设置为 fulfilled 状态
 * @param { Promise } promise
 * @param {*} value
 */
const fulfilledPromise = (promise, value) => {
  // 只能从 pending 状态转换为其他状态
  if (promise.status !== statusMap.pending) return

  promise.status = statusMap.fulfilled
  promise.value = value

  runCallbacks(promise.fulfilledCbs, value)
}

/**
 * 将 promise 设置为 rejected 状态
 * @param { Promise } promise
 * @param {*} reason
 */
const rejectedPromise = (promise, reason) => {
  // 只能从 pending 状态转换为其他状态
  if (promise.status !== statusMap.pending) return

  promise.status = statusMap.rejected
  promise.reason = reason

  runCallbacks(promise.rejectedCbs, reason)
}

/**
 * promise 的解析
 * 1. 如果 promise 和 x 指向相同的值
 * 2. 如果 x 是一个 promise
 * 3. 如果 x 是一个对象或一个函数
 * 4. 如果 x 不是对象也不是函数
 * @param {*} promise
 * @param {*} x
 */
const resolvePromise = (promise, x) => {
  // 1
  if (promise === x) {
    rejectedPromise(promise, new TypeError("can not be the same"))
    return
  }

  // 2
  if (isPromise(x)) {
    if (x.status === statusMap.fulfilled) {
      fulfilledPromise(promise, x.value)
      return
    }

    if (x.status === statusMap.rejected) {
      rejectedPromise(promise, x.reason)
      return
    }

    if (x.status === statusMap.pending) {
      x.then(
        () => fulfilledPromise(promise, x.value),
        () => rejectedPromise(promise, x.reason),
      )
      return
    }
    return
  }

  // 3
  if (isObject(x) || isFunction(x)) {
    let then
    let called = false
    try {
      then = x.then
    } catch (error) {
      rejectedPromise(promise, error)
      return
    }

    if (isFunction(then)) {
      try {
        then.call(
          x,
          (y) => {
            if (called) return
            called = true
            resolvePromise(promise, y)
          },
          (r) => {
            if (called) return
            called = true
            rejectedPromise(promise, r)
          },
        )
      } catch (e) {
        if (called) return
        called = true
        rejectedPromise(promise, e)
      }
      return
    } else {
      fulfilledPromise(promise, x)
      return
    }
  } else {
    // 4
    fulfilledPromise(promise, x)
    return
  }
}

/**
 * 执行 callbacks
 * @param {*} callbacks
 * @param {*} value
 */
const runCallbacks = (callbacks, value) =>
  callbacks.forEach((callback) => callback(value))

class MyPromise {
  constructor(fn) {
    this.status = statusMap.pending
    this.value = undefined
    this.reason = undefined
    this.fulfilledCbs = [] // then fulfilled callbacks
    this.rejectedCbs = [] // then rejected callbacks
    fn(
      (value) => resolvePromise(this, value),
      (reason) => rejectedPromise(this, reason),
    )
  }

  then(onFulfilled, onRejected) {
    const p1 = this
    const p2 = new MyPromise(() => {})

    // onFulfilled
    if (p1.status === statusMap.fulfilled) {
      // 当 onFulfilled 不是函数时则忽略 (返回原来的 promise 即 p1)
      if (!isFunction(onFulfilled)) return p1

      setTimeout(() => {
        try {
          const x = onFulfilled(p1.value)
          resolvePromise(p2, x)
        } catch (e) {
          rejectedPromise(p2, e)
        }
      }, 0)
    }

    // onRejected
    if (p1.status === statusMap.rejected) {
      // 当 onFulfilled 不是函数时则忽略 (返回原来的 promise 即 p1)
      if (!isFunction(onRejected)) return p1

      setTimeout(() => {
        try {
          const x = onRejected(p1.reason)
          resolvePromise(p2, x)
        } catch (e) {
          rejectedPromise(p2, e)
        }
      }, 0)
    }

    // pending
    if (p1.status === statusMap.pending) {
      onFulfilled = isFunction(onFulfilled) ? onFulfilled : (value) => value
      onRejected = isFunction(onRejected)
        ? onRejected
        : (e) => {
            throw e
          }

      p1.fulfilledCbs.push(() =>
        setTimeout(() => {
          try {
            const x = onFulfilled(p1.value)
            resolvePromise(p2, x)
          } catch (e) {
            rejectedPromise(p2, e)
          }
        }, 0),
      )
      p1.rejectedCbs.push(() =>
        setTimeout(() => {
          try {
            const x = onRejected(p1.reason)
            resolvePromise(p2, x)
          } catch (e) {
            rejectedPromise(p2, e)
          }
        }, 0),
      )
    }

    return p2
  }
}

// 测试用到的钩子
MyPromise.deferred = function () {
  const deferred = {}
  deferred.promise = new MyPromise((resolve, reject) => {
    deferred.resolve = resolve
    deferred.reject = reject
  })
  return deferred
}

module.exports = MyPromise
