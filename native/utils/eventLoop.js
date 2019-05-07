

function eventLoop(){

  // setTimeout(()=>{
  //     console.log('timer1')

  //     Promise.resolve().then(function() {
  //         console.log('promise1')
  //     })
  // })
  // setTimeout(()=>{
  //     console.log('timer2')

  //     Promise.resolve().then(function() {
  //         console.log('promise2')
  //     })
  // })
  // 
  
  // setImmediate(() => {
  //   console.log('immediate');
  // });
  // setTimeout(() => {
  //   console.log('timeout');
  // }, 0);

  // setTimeout(function () {
  //     console.log(1);
  // });
  // console.log(2);
  // process.nextTick(() => {
  //     console.log(3);
  // });
  // new Promise(function (resolve, rejected) {
  //     console.log(4);
  //     resolve()
  // }).then(res=>{
  //     console.log(5);
  // })
  // setImmediate(function () {
  //     console.log(6)
  // })
  // console.log('end');
  
}

module.exports = eventLoop;