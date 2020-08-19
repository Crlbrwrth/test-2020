const fs = require('fs')

const readEstateData = async () => {
    return new Promise((resolve, reject) => {
        fs.readFile('lib/routes/estate-data.json', (err, data) => {
            if (err) reject(err)
            resolve(JSON.parse(data))
        })
    }) 
}

module.exports = {
    readEstateData
}