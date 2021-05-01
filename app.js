const express = require('express')
const  bodyParcer = require('body-parser')
 const app = express()


app.use(bodyParcer)
app.use(bodyParcer.urlencoded({extended:false}))
app.use()


app.listen(3001, function(){
    console.log('Listining to the port 3001!')
})

 module.exports = app