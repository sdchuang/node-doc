
const fs = require('fs')

//file 
var path = './file/test';
var writeData = 'Hello Node.js..///.';
function dealFile(){
  // write
  fs.writeFile(path, writeData, err => {
    if (err) throw err
    console.log("It's saved!")
  })
  // read
  fs.readFile(path,(error,data) => {
    if (error) {
      console.log('文件读取失败', error)
    } else {
      console.log('文件读取成功', data.toString())
    }
  })

}

module.exports = dealFile;