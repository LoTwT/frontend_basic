const PENDING = 1
const FULFILLED = 2
const REJECTED = 3

// single promise
// .then(a)
//   .then(b)
//     .then(c)

class Promise {
  constructor(executor) {
    this.state = PENDING
    this.fulfills = []

    const resolver = (value) => {
      if (this.state === PENDING) {
        this.value = value
        this.state = FULFILLED

        for (const [onFulfill, resolve] of this.fulfills) {
          const x = onFulfill(this.value)
          resolve(x)
        }
      }
    }
    const rejector = (value) => {}

    executor(resolver, rejector)
  }

  then(onFulfill) {
    return new Promise((resolve, reject) => {
      switch (this.state) {
        case PENDING:
          this.fulfills.push([onFulfill, resolve])
          break
        case FULFILLED:
          const x = onFulfill(this.value)
          resolve(x)
          break
      }
    })
  }
}

const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve(100)
  }, 100)
})
  .then((res) => {
    console.log(res)
    return 200
  })
  .then((res) => console.log(res))
