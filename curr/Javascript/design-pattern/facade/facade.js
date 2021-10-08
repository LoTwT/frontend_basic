// 模块 1
function Model1() {}

// 模块 2
function Model2() {}

// 功能由 Model1 获取 Model2 的结果来完成
function use() {
  Model2(Model1())
}
