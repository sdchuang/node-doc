
const url = require('url')

const myUrl = 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash';

function dealUrl(){
  var newUrl = url.parse(myUrl, false);
  console.log(newUrl)
  console.log(newUrl.host)
}

module.exports = dealUrl;