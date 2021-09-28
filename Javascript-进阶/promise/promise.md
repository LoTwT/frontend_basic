# promise/A+

## 术语

- promise: 一个有 then 方法的对象或函数，行为符合 A+ 规范
- thenable: 一个定义了 then 方法的对象或函数
- 值，value: 任何 javascript 的合法值
- 异常，exception: throw 语句抛出的的值
- 拒绝原因，reason: 一个标识 promise 被拒绝原因的值

## 状态

promise 状态只能改变一次

- pending: 等待
- fulfilled: 完成
- rejected: 拒绝
