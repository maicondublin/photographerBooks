//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
//https://javascript.info/async-await
const router = require('express').Router
const events = router()


//middleware
const authenticate = require('../middleware/authenticate')

//controller
const eventController = require('../controller/events.ctrl')

//rest_API

//get => used to select data 
events.get('/events', authenticate, async function(req, res){
    try {
        var events = await eventController.loadAll()
        res.send(events)
    } catch (error) {
        res.status(401).send({message:'Error to insert new event!'})
    }
})
//post => used to insert data.
events.post('/events',  authenticate, async function(req, res){
    try {
        var newEvent = await eventController.insert(req.body)
        res.send(newEvent)
    } catch (error) {
        res.status(401).send({message:'Error to insert a new event!'})
    }
})
//put => used to update data.
events.put('/events', authenticate, async function(req, res){
    try {
        var newEvent = await eventController.update(req.body)
        res.send(newEvent)
    } catch (error) {
        res.status(401).send({message:'Error to update  event!'})
    }
})
//delete => used to remove data.
events.delete('/events', authenticate, async function(req, res){
    try {
        var newEvent = await eventController.remove(req.body)
        res.send(newEvent)
    } catch (error) {
        res.status(401).send({message:'Error to remove event!'})
    }
})

module.exports = events