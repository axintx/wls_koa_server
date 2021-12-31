// TODO 处理业务逻辑的中间件，读取某个 json 文件的数据
module.exports = async (ctx, next) => {
  // 根据 url
  const url = ctx.request.url
  console.log(url);
  await next()
}