
const http = require('http')
const fs = require('fs')

// 
var dealPath = require('./utils/path')
var methods = require('./utils/methods')

var mod = require('./utils/modules')

const port = 3000;


const server = http.createServer((request,response) => {
  methods(request,response);
  
  // response.write('content:')
  // //file 
  // var path = './file/test';
  // var writeData = 'Hello Node.js...';
  // // write
  // fs.writeFile(path, writeData, err => {
  //   if (err) throw err
  //   console.log("It's saved!")
  // })
  // // read
  // fs.readFile(path,(error,data) => {
  //   if (error) {
  //     console.log('文件读取失败', error)
  //   } else {
  //     // console.log('文件读取成功', data.toString())
  //     var result = data.toString();
  //     response.write(result)
  //   }
  //   response.end()
  // })

});

server.listen(port,() => {
  // console.log(mod)
  dealPath()
  console.log(`running on ${port}...`)
})