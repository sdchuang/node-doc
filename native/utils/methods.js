
const url = require('url')
const querystring = require('querystring')

function methods(req,res){
  const method = req.method
  console.log(method)
  if(method === 'GET'){
    // console.log(req.url);
    const { pathname, query } = url.parse(req.url, true);
    console.log(pathname, query);

    res.write(JSON.stringify({
      code:0,
      msg:'666'
    }))
    res.end();
  }
  if(method === 'POST'){
    let bufferArray = [];
    req.on('data',(buffer) => {
      console.log('1...');
      bufferArray.push(buffer)
    })
    req.on('end', () => {
      // Buffer 类是一个全局变量，使用时无需 require('buffer').Buffer。
      // Buffer.concat方法用于合并Buffer数组。
      const buffer = Buffer.concat(bufferArray)
      // 已知Buffer数据只是字符串，则可以直接用toString将其转换成字符串。
      const post = querystring.parse(buffer.toString())
      console.log(post)
    })
  }
}

module.exports = methods;