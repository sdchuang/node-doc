
var WebSocket = require('ws');

function dealSoket(){
  var wss = new WebSocket.Server({
    port:'3000',
    host:'127.0.0.1'
  });//host port

  //connection error headers
  wss.on('error',(err)=>{
    console.log(err)
  })
  wss.on('connection', function connection(ws) {
    console.log('连接成功')
    // message/close/error
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });
  
    ws.send('something');
  });

}


module.exports = dealSoket;