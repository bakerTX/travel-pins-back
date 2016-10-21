var express = require('express');
var router = express.Router();
var Pin = require('../models/pin');


router.get('/', function(req,res,next){
  Pin.find({}, function(err, pins){
    if (err){
      res.status(500).send();
    } else {
      res.json(pins);
    }
  })
})

module.exports = router;
