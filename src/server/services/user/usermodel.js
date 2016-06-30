const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
