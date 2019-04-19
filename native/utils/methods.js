
const url = require('url')

function methods(req,res){
  const method = req.method
  // console.log(method)
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
    
  }
}

module.exports = methods;