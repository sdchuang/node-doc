
const koa = require('koa')
const app = new koa();

const fs = require('fs')

const http = require('http').createServer(app.callback());
const io = require('socket.io')(http);

const port = 3001;

app.use(async(ctx)=>{
  ctx.type = 'html';
  ctx.body = fs.createReadStream('./index.html');
})
// 
var userArr = [];
io.on('connection', socket => {
  console.log('a user connected');
  socket.on('disconnect', ()=>{
    console.log('user disconnected');
  });
  // console.log(socket)
  socket.on('join', (name)=>{
    console.log(name);
    userArr[name] = name;
    io.emit('join',name);//广播
  });
  socket.on('message', ({uname,msg})=>{
    console.log(msg);
    io.emit('message',{uname,msg});//广播
  });
  socket.on('logout', (name)=>{
    console.log('>>>>>>>>',name)
    io.emit('logout',name);//广播
  });
});
// 



http.listen(port,()=>{
  console.log('listening on *:3001');
})