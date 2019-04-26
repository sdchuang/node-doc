
var path = require('path');

function dealPath() {
  // 
  // var p = path.normalize('foo/bar//baz/asdf/quux/..');
  // var p2 = path.normalize('foo/bar//baz/asdf/quux/../abc') ;
  // console.log('p',p,p2);
  // 
  // var data = path.join('foo/', 'baz/', '../bar');
  // console.log(data)
  // 
  // console.log(path.extname('foo/bar.js'))
  // 
  console.log(__dirname)
  // console.log(path.dirname('/foo/bar/a'))
  // console.log(path.resolve('bar'))
  console.log(path.basename('/foo/bar/a'))
  console.log(path.parse('/foo/bar/a'))


}


module.exports = dealPath;