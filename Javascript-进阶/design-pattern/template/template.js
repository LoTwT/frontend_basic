// 模板方法模式的基本结构
// 需求：编写导航组件，有的带消息提示，有的竖着，有的横着
function baseNav() {
  // 基础类，此处设计基本骨架
}

baseNav.prototype.action = function (fn) {
  // 特异性的处理，留出一个回调等待具体实现
}
