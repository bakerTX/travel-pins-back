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

module.exports = router;
