const mongoose = require('mongoose');

const userSchema = {
  user: String
}

var User = mongoose.model('User', userSchema);

module.exports = Uin;
