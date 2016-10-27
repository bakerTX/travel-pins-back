var express = require('express');
var router = express.Router();
var Pin = require('../models/pin');

// GET method
router.get('/', function(req,res,next){
  console.log('req.user', req.user);
  Pin.find({
    user: req.user.sub
  }, function(err, pins){
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

router.get('/:userID', function(req,res,next){
  Pin.find({
    user: req.params.userID
  }, function(err, pins){
    if (err){
      res.status(500).send();
    } else{
      res.json(pins);
      }
    })
});
//DELETE method
router.delete('/:id', function (req, res) {
  Pin.find({_id: req.params.id}).remove(function (err) {
    if (err) {
      console.log(err);
      res.status(500).send()
    } else {
      res.status(204).send()
    }
  })
})

// //PUT method
// router.put('/', function (req, res) {
//   var updatedPin = Object.assign(res.pin, req.body)
//   updatedPin.save(function (err) {
//     if (err) {
//       res.status(500).send()
//     } else {
//       res.json(updatedPin)
//     }
//   })
// })
//




module.exports = router;
