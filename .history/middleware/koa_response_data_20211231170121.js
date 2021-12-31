// TODO 处理业务逻辑的中间件，读取某个 json 文件的数据
/**
 * 1. 商家销量 /api/seller
 * 2. 预算开销 /api/budget
 * 3. 库存信息 /api/stock
 * 4. 销量趋势 /api/trend
 * 5. 销量排行 /api/rank
 * 6. 商家分布 /api/map
 * 7. 热销商品 /api/hotproduct
 */

const path = require('path')
const fileUtils = require('../utils/file_utils')
module.exports = async (ctx, next) => {
  // 根据 url
  const url = ctx.request.url // /api/seller   
  // 替换路径
  let filePath = url.replace('/api', '') // /seller
  filePath = '../data' + filePath + '.json' // ../data/seller.json
  filePath = path.join(__dirname, filePath)
  try {
    const ret = await fileUtils.getFileJsonData(filePath)
    ctx.response.body = ret
  } catch(error) {
    const errorMsg = {
      message: '读取文件内容失败，文件资源不存在',
      status: 404
    }
    ctx.response.body = JSON.stringify(errorMsg)
  }

  console.log(filePath);
  await next()
}