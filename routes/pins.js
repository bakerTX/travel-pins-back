var express = require('express');
var router = express.Router();
var Pin = require('../models/pin');

// GET method
router.get('/', function(req,res,next){
  Pin.find({}, function(err, pins){
    if (err){
      res.status(500).send();
    } else {
      res.json(pins);
    }
  })
})

// POST method
router.post('/', function(req,res,next){
  var pin = new Pin(req.body);
  pin.save(function(err){
    if (err){
      res.status(500).send();
    } else{
      res.json(pin);
    }
  })
})

//PUT method
router.put('/', function (req, res) {
  var updatedPin = Object.assign(res.pin, req.body)
  updatedPin.save(function (err) {
    if (err) {
      res.status(500).send()
    } else {
      res.json(updatedPin)
    }
  })
})

//DELETE method
router.delete('/', function (req, res) {
  pin.remove(function (err) {
    if (err) {
      res.status(500).send()
    } else {
      res.status(204).send()
    }
  })
})

module.exports = router;
