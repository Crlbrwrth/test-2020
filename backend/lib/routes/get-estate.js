const { readEstateData } = require('./tools')

const handler = async (request, h) => {
    const result = await readEstateData()
    return h.response(result).code(200)
  }
  
  module.exports = {
    config: {
      cors: {
          origin: ['*'],
          additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
    path: '/estate',
    method: 'GET',
    handler
  }
  