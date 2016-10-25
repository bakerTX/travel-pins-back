const mongoose = require('mongoose');

const pinSchema = {
  userId: String,
  date: String,
  location: String,
  journal: String,
  image: String,
  rating: Number,
  recommendation: String,
  eventAttended: String,
  transportation: String
}

var Pin = mongoose.model('Pin', pinSchema);

module.exports = Pin;
