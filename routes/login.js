const router = require('express').Router
const login = router()

//controller
const loginController = require('../controller/login.ctrl')

//rest API

login.put('/login', async function(req, res){
    try {
        var token = await loginController.login(req.body)
        res.send({token:token})
    } catch (error) {
        res.status(401).send({message:error.message})
    }
})

module.exports = login 