const fs = require('fs')
const { readEstateData } = require('./tools')

const writeEstateToJSON = async (rawEntry) => {
    const newEntry = JSON.parse(rawEntry)
    const estateData = await readEstateData()
    newEntry.timeStamp = Date.now()
    const saveData = JSON.stringify([...estateData, newEntry])
    return new Promise((resolve, reject) => {
        fs.writeFile('lib/routes/estate-data.json', saveData, (err) => {
            if (err) reject(err)
            resolve('super, alle')
        })
    })
}

const handler = async (req, h) => {
    await writeEstateToJSON(req.payload)
    return h.response(req.payload).code(200)
}

  module.exports = {
    config: {
      cors: {
          origin: ['*'],
          additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
    path: '/estate',
    method: 'POST',
    handler
  }
  