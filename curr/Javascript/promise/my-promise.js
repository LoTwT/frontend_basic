const statusMap = {
  pending: "PENDING",
  fulfilled: "FULFILLED",
  rejected: "REJECTED",
}

class MyPromise {
  constructor(fn) {
    this.status = statusMap.pending
    this.value = undefined
    this.reason = undefined
    this.fulfilledCallbacks = [] // 当前 promise 调用 then 方法，then 的 onFulfilled
    this.rejectedCallbacks = [] // 当前 promise 调用 then 方法，then 的 onRejected
    fn(
      (value) => resolvePromise(this, value),
      (reason) => rejectPromise(this, reason),
    )
  }

  then(onFulfilled, onRejected) {
    // 调用 then 的自身 promise
    const p1 = this
    // then 执行完后的新 promise，用以链式调用
    const p2 = new MyPromise(() => {})

    // fulfilled
    if (p1.status === statusMap.fulfilled) {
      if (!isFunction(onFulfilled)) return p1

      // 模拟异步
      setTimeout(() => {
        try {
          const x = onFulfilled(p1.value)
          resolvePromise(p2, x)
        } catch (error) {
          rejectPromise(p2, error)
        }
      }, 0)
    }

    // rejected
    if (p1.status === statusMap.rejected) {
      if (!isFunction(onRejected)) return p1

      // 模拟异步
      setTimeout(() => {
        try {
          const x = onRejected(p1.reason)
          resolvePromise(p2, x)
        } catch (error) {
          rejectPromise(p2, error)
        }
      }, 0)
    }

    // pending
    if (p1.status === statusMap.pending) {
      // 设置 onFulfilled onRejected 默认值
      onFulfilled = isFunction(onFulfilled) ? onFulfilled : (value) => value
      onRejected = isFunction(onRejected)
        ? onRejected
        : (error) => {
            throw error
          }

      // 等待 pending 发生变化
      // 不执行 onFulfilled onRejected
      // 只分别收集依赖

      // onFulfilled，p1 状态变为 fulfilled 时执行
      p1.fulfilledCallbacks.push(() =>
        setTimeout(() => {
          try {
            const x = onFulfilled(p1.value)
            resolvePromise(p2, x)
          } catch (error) {
            rejectPromise(p2, error)
          }
        }, 0),
      )

      // onRejected
      p1.rejectedCallbacks.push(() =>
        setTimeout(() => {
          try {
            const x = onRejected(p1.reason)
            resolvePromise(p2, x)
          } catch (error) {
            rejectPromise(p2, error)
          }
        }, 0),
      )
    }

    return p2
  }
}

// 通过 x 值对 promise 做决议
function resolvePromise(promise, x) {
  if (promise === x) {
    rejectPromise(promise, new TypeError("promise and x can't be the same"))
    return
  }

  if (isPromise(x)) {
    if (x.status === statusMap.fulfilled) {
      fulfillPromise(promise, x.value)
      return
    }

    if (x.status === statusMap.rejected) {
      rejectPromise(promise, x.reason)
      return
    }

    if (x.status === statusMap.pending) {
      x.then(
        () => fulfillPromise(promise, x.value),
        () => rejectPromise(promise, x.reason),
      )
      return
    }
  }

  // x 是 thenable
  // thenable 是有 then 方法的对象或者函数
  if (isObject(x) || isFunction(x)) {
    // 取出 then
    let then
    try {
      then = x.then
    } catch (error) {
      rejectPromise(promise, error)
      return
    }

    // 一个确保只执行一次的标志位
    let called = false
    if (isFunction(then)) {
      try {
        // 此处调用不受控，需要 try-catch
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
            rejectPromise(promise, r)
          },
        )
      } catch (error) {
        if (called) return
        called = true
        rejectPromise(promise, error)
      }
    } else {
      fulfillPromise(promise, x)
      return
    }
  } else {
    fulfillPromise(promise, x)
    return
  }
}

function rejectPromise(promise, reason) {
  if (promise.status !== statusMap.pending) return

  promise.status = statusMap.rejected
  promise.reason = reason

  runCallbacks(promise.rejectedCallbacks, reason)
}

// 设置 promise fulfilled
function fulfillPromise(promise, value) {
  if (promise.status !== statusMap.pending) return

  promise.status = statusMap.fulfilled
  promise.value = value

  runCallbacks(promise.fulfilledCallbacks, value)
}

function runCallbacks(callbacks, value) {
  callbacks.forEach((callback) => callback(value))
}

function isFunction(fn) {
  return (
    Object.prototype.toString.call(fn).toLocaleLowerCase().slice(8, -1) ===
    "function"
  )
}

function isObject(obj) {
  return (
    Object.prototype.toString.call(obj).toLocaleLowerCase().slice(8, -1) ===
    "object"
  )
}

function isPromise(p) {
  return p instanceof MyPromise
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
