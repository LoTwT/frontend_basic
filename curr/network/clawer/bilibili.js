import puppeteer from "puppeteer"

const queue = ["https://www.bilibili.com"]

const browser = await puppeteer.launch()
const page = await browser.newPage()

while (queue.length > 0) {
  const url = queue.pop()
  let data = await analyse(page, url)
  store(data)
}

// 外部执行在 node 端
function findCards() {
  // 这个方法执行在浏览器端
  // 以字符串形式传递，有 window 可用

  return new Promise((resolve, reject) => {
    // 滚动屏幕，每次滚动一个屏幕
    function scroll(n, callback) {
      if (n > 0) {
        window.scrollBy(0, window.innerHeight)
      } else {
        callback()
        return
      }

      setTimeout(() => {
        scroll(n - 1, callback)
      }, 1000)
    }

    function getText(node, cls) {
      if (node.querySelector(cls)) {
        return node.querySelector(cls).innerText
      } else {
        return null
      }
    }

    scroll(2, () => {
      const cards = document.querySelectorAll(".video-card-common")
      try {
        resolve(
          [...cards].map((card) => {
            if (!card) return
            let title = getText(card, ".ex-title") || getText(card, ".title")
            let up = getText(card, ".ex-up") || getText(card, ".up")
            let href = document.querySelector("a").href
            return {
              title,
              up,
              href,
            }
          }),
        )
      } catch (error) {
        reject(error)
      }
    })
  })
}

function store(data) {
  console.log(data)
}

async function analyse(page, url) {
  await page.goto(url)

  if (url === "https://www.bilibili.com") {
    const cardsInfo = await page.evaluate(findCards)
    cardsInfo.forEach((info) => info && queue.push(info.href))
    return cardsInfo
  } else {
    console.log("analyze page:" + url)
  }
}
