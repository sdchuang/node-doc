

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
  setImmediate(() => {
    console.log('immediate');
  });
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  
}

module.exports = eventLoop;