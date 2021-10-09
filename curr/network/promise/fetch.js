import fetch from "node-fetch"

// const promise = fetch("https://www.baidu.com", {
//   method: "PUT",
//   headers: {
//     "Content-type": "application/json",
//   },
//   credentials: "include", // cookies
// })

async function foo() {
  const res = await fetch("https://www.baidu.com")
  const text = await res.text()
  console.log(text)
}

foo()
