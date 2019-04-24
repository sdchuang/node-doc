import { Socket } from "dgram";

// Node概览
2009.05/Ryan Dahl
2011.07 window

/**
 * npm
 */

init/install/uninstall/list/update/version
$ npm install -g cnpm --registry='https://registry.npm.taobao.org'  (10min) 
npm install/npm install --save(-S)/npm install --save-dev(-D)

/**
 * file
 */
// 
open(p,(r, r+, w, w+, a, a+),cb)
// 读取文件
- readFile(path,cb),readFileSync()
// 写入文件
- writeFile(path,data,cb),writeFileSync()
// 判断文件夹是否存在
- exists(path, callback),existsSync()
// 创建文件夹
- mkdir()
// 删除文件夹
- rmdir()
// 删除文件
- unlink()
// 读取文件夹内所有文件
- readdir(),readdirSync()
// 判断文件状态（是文件还是文件夹）
- stat()
// 监听文件变化
- watchfile(),unwatchfile()
// 创建读取文件流
- createReadStream()
// 创建写入文件流
- createWriteStream()


// path
// 路径格式化
normalize(path)    
// 拼接
path.join()
// 解析
path.resolve()
// 文件扩展名
path.extname()
// 判断参数 path 是否是绝对路径。
path.isAbsolute(path)
// 用于将绝对路径转为相对路径，返回从 from 到 to 的相对路径（基于当前工作目录
path.relative(from, to)
// 返回路径中代表文件夹的部分
path.dirname(p)
// 返回路径中的最后一部分
path.basename(p)
// 返回路径字符串的对象。
path.parse(pathString)
// 从对象中返回路径字符串，和 path.parse 相反。
path.format({root,base,dir,name,ext})

// buffer
Buffer.from(obj)// obj支持的类型string, buffer, arrayBuffer, array, or array-like object
Buffer.alloc、Buffer.allocUnsafe、Buffer.allocUnsafeSlow(size)  //开辟空间
buf.toString('utf8')
buf.toJSON()
buf.slice([start[, end]])
buf1.copy(buf2, start);
buf1.equals(buf2)
// 写入方法：
// 位数固定且超过1个字节的： write{Double| Float | Int16 | Int32|  UInt16 | UInt32 }{BE|LE}(value, offset)
// 位数不固定的：            write{Int | UInt}{BE | LE}(value, offset, bytelength) //此方法提供了更灵活的位数表示数据（比如3位、5位）
// 位数固定是1个字节的：     write{Int8 | Unit8}(value, offset)
// 读取方法：
// 位数固定且超过1个字节的： read{Double| Float | Int16 | Int32 | UInt16 | UInt32 }{BE|LE}（offset)
// 位数不固定的：  read{Int | UInt}{BE | LE}(offset, byteLength)
// 位数固定是1个字节的： read{Int8 | Unit8}(offset)
Buffer.concat(list[, totalLength]) //totalLength不是必须的，如果不提供的话会为了计算totalLength会多一次遍历
buffer.fill(0)

//stream
// 可读流分为两种模式, 流动模式(flowing)和暂停模式(paused) 
let rs = fs.createReadStream('./test.js', {
  flags: 'r', // 读取方式
  encoding: null, // 编码 默认 buffer
  autoClose: true,
  mode: 0666, // 权限 默认 0666
  start: 0, // 开始读取位置
  end: 3,  // 结束位置 包后
  highWaterMark: 2,  // 最高水位线
})

rs.on('open/data/error/end/close/readable',cb)
rs.pause()
rs.resume()
let ws = fs.createWriteStream('2.txt');
ws.write(data)
ws.on('drain',cb)

/**
 * net
 */
// http
http.createServer((request, response)=>{}).listen(port,cb)

option={key:'',cert:''}
http.createServer(options,(request, response)=>{}).listen(port,cb)

// url
.parse(url)
// 为URL或 href 插入 或 替换原有的标签
resolve(from, to)
// 
format(url,options)
new URL(input[, base])
// 
URLSearchParams
domainToASCII(domain)
domainToUnicode(domain)
// querystring
querystring.parse('foo=bar&baz=qux&baz=quux&corge')
querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });

// websoket
// ws
// http://www.ruanyifeng.com/blog/2017/05/websocket.html
// server
var wss = new WebSocket.Server({//实例化
  port:'',
  host:''
});
wss.on('connection error headers',(ws)=>{
  ws.on('message/close/error',cb)
})
// client
var ws = new WebSocket('ws://localhost:3000');
// readyState 0正在连接 1成功 2正在关闭 3失败或关闭
ws.onopen/onmessage/onclose/onerror

// socket.io

/**
 * process
 * https://juejin.im/post/5b0e97bef265da0914072515
 */
// process
// process.memoryUsage()  查看内存使用信息
// process.platform()  系统平台
// process.chdir() chdir方法用于修改Node.js应用程序中使用的当前工作目录
// process.cwd() 进程当前工作目录
// process.kill(pid) 杀死进程
// process.exit(0);
// process.uptime()    返回当前程序的运行时间

process.on('eventName', () => {})//来监听事件。
// 进程状态 比如：beforeExit(asyn)、exit、uncaughtException、message
// 信号事件 比如：SIGTERM(优雅关闭)、SIGKILL、SIGUSR1

// child_process
// 创建子进程
// 异步方式：spawn、exec、execFile、fork
// 同步方式：spawnSync、execSync、execFileSync
// 监听
// close、exit、error、message



















