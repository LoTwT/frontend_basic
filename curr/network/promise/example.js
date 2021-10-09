const promise1 = new Promise((resolve, reject) => {
  resolve(1)
}).then((res) => console.log(res))

/** ================================================================ */

const promise2 = new Promise((resolve, reject) => {
  resolve(2)
})
  .then((res) => {
    console.log(res)
    return "abc2"
  })
  .then((res) => console.log(res))

/** ================================================================ */

function wait(data, ms = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, ms)
  })
}

const promise3 = new Promise((resolve, reject) => {
  resolve(3)
})
  .then((res) => {
    console.log(res)
    return wait("abc3", 1000)
  })
  .then((res) => console.log(res))

/** ================================================================ */

const promise4 = new Promise((resolve, reject) => {
  reject("some error")
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .then((res) => console.log("after catch error"))

/** ================================================================ */

async function foo() {
  console.log("start ===>")
  const one = await wait("async data1", 1000)
  console.log("tick ===>")
  const two = await wait("async data2", 1000)
  console.log("end ===>")

  const x = await Promise.resolve(100)
  console.log(x)
  try {
    const y = await Promise.reject("error...")
  } catch (error) {
    console.log(error)
  }
}

foo().then((res) => console.log("finish", res))

/** ================================================================ */

Promise.all([wait(1, 100), wait(2, 200)]).then((res) => console.log(res))

/** ================================================================ */

Promise.race([wait(1, 100), wait(2, 200)]).then((res) => console.log(res))
