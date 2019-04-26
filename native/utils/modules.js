
//
var a = 1;

// 
var obj = {
  'a':1,
  'b':2,
}

// 
function func(a){
  console.log('略略略...',a)
}

// exports.ab = obj;
// module.exports = a;
module.exports = {
  a,
  obj,
  func
}