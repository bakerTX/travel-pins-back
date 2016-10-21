const mongoose = require('mongoose');

const pinSchema = {
  text: String,
  userId: String
}

var Pin = mongoose.model('Pin', pinSchema);

module.exports = Pin;
