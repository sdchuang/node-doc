
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

var route = require('./routes/user')

const app = express();

app.use(
	bodyParser.json()
);
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
// out
// app.use((req,res)=>{
  // res.end('hello')

  // res.send({
  //   code:0,
  //   msg:'666'
  // })

  // res.json({
  //   code:0,
  //   msg:'6668'
  // })
  // res.sendFile(path.resolve(__dirname,'../page/index.html'))
// })

// router
// app.get('/login/:dmg',(req,res)=>{
//   console.log(req.params)
//   console.log(req.query)
//   res.send({
//     code:0,
//     msg:'666'
//   })
// })
// app.post('/login',(req,res)=>{
//   console.log(req.body)
//   res.send({
//     code:0,
//     msg:'666'
//   })
// })

app.use(route)

// template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', content: 'Hello there!' })
})

app.listen(3000,()=>{
  console.log('3000')
})