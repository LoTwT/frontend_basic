class mySwiper {
    constructor(selector, imgList) {
        var swiperDiv = document.querySelector(selector)

        function createSwiperHtml(imgList) {
            var imgListDiv = document.createElement("div")
            var circleListDiv = document.createElement("div")

            imgListDiv.className = "imgList"
            circleListDiv.className = "circleList"

            imgList.forEach(function (item, i) {
                if (i == 0) {
                    imgListDiv.innerHTML += '<div class="imgItem active" style="background-image: url(' + item + ');"></div>'
                    circleListDiv.innerHTML += '<div id="c' + i + '" class="circleItem active"></div>'
                } else {
                    imgListDiv.innerHTML += '<div class="imgItem" style="background-image: url(' + item + ');"></div>'
                    circleListDiv.innerHTML += '<div id="c' + i + '" class="circleItem"></div>'
                }
            })
            swiperDiv.appendChild(imgListDiv)
            swiperDiv.appendChild(circleListDiv)
            swiperDiv.innerHTML += `
            <div class="btnList">
                <div class="btn prev"><</div>
                <div class="btn next">></div>
            </div>`
        }

        createSwiperHtml(imgList)

        // 原本全局需要用到的数据，需要放置到对象的属性上
        this.prevBtn = document.querySelector(selector + " .prev")
        this.nextBtn = document.querySelector(selector + " .next")
        this.imgListDivs = document.querySelectorAll(selector + " .imgItem")
        this.circleDivs = document.querySelectorAll(selector + " .circleItem")
        var that = this
        // 默认图片为第一张
        this.currentImg = 0

        this.nextBtn.onclick = function () {
            that.forward()
        }

        this.prevBtn.onclick = function () {
            that.back()
        }

        this.circleDivs.forEach(function (item, i) {
            item.onclick = function () {
                that.go(i)
            }
        })
    }

    renderSwiper() {
        // 初始化，将所有的img列表的active去掉
        this.imgListDivs.forEach(function (item, i) {
            item.classList.remove("active")
        })

        this.circleDivs.forEach(function (item, i) {
            item.classList.remove("active")
        })
        this.imgListDivs[this.currentImg].classList.add("active")
        this.circleDivs[this.currentImg].classList.add("active")

    }

    go(i) {
        this.currentImg = i;
        this.renderSwiper()
    }

    forward() {
        this.currentImg += 1
        if (this.currentImg >= this.imgListDivs.length) {
            this.currentImg = 0
        }
        this.renderSwiper()
    }

    back() {
        this.currentImg -= 1
        if (this.currentImg < 0) {
            this.currentImg = this.imgListDivs.length - 1
        }
        this.renderSwiper()
    }
}