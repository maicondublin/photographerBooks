const router = require('express').Router
const user = router()


//controller
const userController = require('../controller/user.ctrl')

//rest API

//post => used to insert data
user.post('/user', async function(req, res){
    try {
        var newUser = await userController.insert(req.body)
        res.send(newUser)
    } catch (error) {
        res.status(401).send({message:'Error to insert new user!'})
    }
})

module.exports = user