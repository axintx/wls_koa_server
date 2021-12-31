// TODO 服务器入口文件

// 1. 创建 KOA 的实例对象
const Koa = require('koa')
const app = new Koa()
// 2. 绑定中间件
// 绑定第一层中间件 总耗时中间件
const responseDurationMiddleware = require('./middleware/koa_response_duration')
app.use(responseDurationMiddleware)

// 绑定第二层中间件
app.use()
// 绑定第三层中间件

// 3. 绑定端口号 8888
app.listen(8888)