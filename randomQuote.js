const fs = require('fs')

module.exports = randomQuote =  (path) => new Promise((resolve,reject)=>{
  fs.readFile(path,(err,data)=>{
    if(err) return reject(err)
    const [quote,author] = String(data).split('\n')[Math.floor(Math.random()*rows.length)]
    resolve({quote,author})
  })
})
