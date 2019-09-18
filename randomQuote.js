const fs = require('fs')

module.exports = randomQuote =  (path) => new Promise((resolve,reject)=>{
  fs.readFile(path,(err,data)=>{
    if(err) return reject(err)
    const rows = String(data).split('\n')
    const [quote,author] = rows[Math.floor(Math.random()*rows.length)]
    resolve({quote,author})
  })
})
