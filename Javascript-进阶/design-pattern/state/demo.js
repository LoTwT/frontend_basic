// 状态/策略模式同
// 需求：项目有一个动态的内容
//      根据用户权限的不同显示不同的内容
function ShowControl() {
  this.status = ""
  this.auth = {
    boss: function () {
      showPart1()
      showPart2()
      showPart3()
    },
    manager: function () {
      showPart2()
      showPart3()
    },
    staff: function () {
      showPart3()
    },
  }
}

ShowControl.prototype.show = function () {
  var self = this
  axios.get("").then((res) => {
    self.status = res
    self.auth[self.status]()
  })
}

new ShowControl().show()

function showPart1() {
  console.log("part1")
}

function showPart2() {
  console.log("part2")
}

function showPart3() {
  console.log("part3")
}
