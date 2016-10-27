const mongoose = require('mongoose');

const pinSchema = {
  user: String,
  date: String,
  location: String,
  journal: String,
  image: String,
  rating: Number,
  recommendation: String,
  eventAttended: String,
  transportation: String,
  lat: Number,
  lon: Number

}

var Pin = mongoose.model('Pin', pinSchema);

module.exports = Pin;
