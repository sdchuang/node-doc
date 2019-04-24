
const zlib = require('zlib')
const fs = require('fs');

function dealZlib(){
  const gzip = zlib.createGzip();
  const rs = fs.createReadStream('./file/test');
  
  rs.on('error',(err)=>{
    console.log(err)
  })
  rs.on('open', ()=>{
    console.log('文件打开了');
  });
  const ws = fs.createWriteStream('./input.txt.gz');
  rs.pipe(gzip).pipe(ws);
}


module.exports = dealZlib;