
// const process = require('process')

function dealProcess(){
  // console.log(process.env)
  // process.stdin.on('data', (chunk) => {
  //   process.stdout.write('进程接收到数据' + chunk)
  // })
  // console.log(process.memoryUsage())
  // console.log(`当前目录: ${process.cwd()}`);
  // process.chdir('..');
  // console.log(`上层目录: ${process.cwd()}`);
  
  // const startUsage = process.cpuUsage();
  // console.log(startUsage);

  // console.log(`This platform is ${process.platform}`);

  // console.log(process.argv)
  // console.log(process.execPath);
  // console.log(process.execArgv)

  process.on('uncaughtException', function() {
    console.log('uncaught listener');
  });
  a.b()

}


module.exports = dealProcess;