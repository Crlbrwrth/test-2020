const handler = (request, h) => {
  console.log('Received ping request from ip address %s', request.info.remoteAddress);
  return h.response({senf: 3}).code(200);
};

module.exports = {
  config: {
    cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
    }
  },
  path: '/ping',
  method: 'GET',
  handler,
};
