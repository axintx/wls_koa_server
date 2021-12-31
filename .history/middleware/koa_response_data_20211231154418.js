// TODO 处理业务逻辑的中间件，读取某个 json 文件的数据
module.exports = async (ctx, next) => {
  // 根据 url
  const url = ctx.request.url // /api/seller   
  let filePath = url.replace('/api', '') // /seller
  filePath = '../data' + filePath + '.json' // ../data/seller.json
  
  console.log(url);
  await next()
}