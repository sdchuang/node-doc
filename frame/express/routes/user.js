
const express = require('express')
const router = express.Router()

router.get('/regist',(req,res)=>{
  res.json({
    code:1
  })
})

module.exports = router;