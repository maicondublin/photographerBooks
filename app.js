const express = require('express')
const  bodyParcer = require('body-parser')
const events = require('./routes/events')
const user = require('./routes/user')
const login = require('')
 const app = express()


app.use(bodyParcer)
app.use(bodyParcer.urlencoded({extended:false}))
app.use(events)
app.use(user)
app.use(login)


app.listen(3001, function(){
    console.log('Listining to the port 3001!')
})

 module.exports = app