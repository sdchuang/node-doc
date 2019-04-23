
const fs = require('fs')

function dealStream(){
  console.log('11')
  var rs = fs.createReadStream('./file/test');
  // console.log(rs)

  rs.on('open', function() {
    console.log('文件打开了');
  });

  rs.on('data', function (chunk) {
      console.log(chunk)
      console.log(chunk.toString())
  });

  rs.on('end', function () {
      // cleanUp();
  });
}


module.exports = dealStream;


