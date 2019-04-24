
const url = require('url')
const { URL, URLSearchParams } = require('url');

const myUrl = 'http://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash';

function dealUrl(){
  var newUrl = url.parse(myUrl);
  // console.log(newUrl)
  const myURL = new URL('https://example.org/?abc=123');
  console.log(myURL.searchParams.get('abc'));
}


module.exports = dealUrl;