
const koa = require('koa')

const app = new koa();

app.use(async(ctx,next) => {
  ctx.response.body='hello';
  await next()
})
app.use(async(ctx) => {
  ctx.response.body='world'
})


app.listen(3000,()=>{
  console.log('3000...')
})













