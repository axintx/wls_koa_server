// TODO 处理业务逻辑的中间件，读取某个 json 文件的数据
const path = require('path')
const fileUtils = require('../utils/file_utils')
module.exports = async (ctx, next) => {
  // 根据 url
  const url = ctx.request.url // /api/seller   
  let filePath = url.replace('/api', '') // /seller
  filePath = '../data' + filePath + '.json' // ../data/seller.json
  filePath = path.join(__dirname, filePath)
  const ret = await fileUtils.getFileJsonData(filePath)
  ctx.response.body = ret
  console.log(filePath);
  await next()
}