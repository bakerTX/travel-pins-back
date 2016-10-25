const mongoose = require('mongoose');

const pinSchema = {
  user: String,
  date: String,
  location: String,
  journal: String,
<<<<<<< HEAD
  image: String,
  rating: Number,
  recommendation: String,
  eventAttended: String,
  transportation: String
=======
  lat: Number,
  lon: Number
>>>>>>> 8d156526fe2fc218a5f0b1bd2f05d1fb737bd21e
}

var Pin = mongoose.model('Pin', pinSchema);

module.exports = Pin;
