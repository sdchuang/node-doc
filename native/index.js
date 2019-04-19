
const http = require('http')

// 
var dealPath = require('./utils/path')
var dealFile = require('./utils/file')
var methods = require('./utils/methods')
var mod = require('./utils/modules')

const port = 3000;


const server = http.createServer((request,response) => {
  methods(request,response);
  
  response.write('content:')
  response.end('hello nodejs')
  
});

server.listen(port,() => {
  // console.log(mod)
  dealPath()
  // dealFile()
  console.log(`running on ${port}...`)
})