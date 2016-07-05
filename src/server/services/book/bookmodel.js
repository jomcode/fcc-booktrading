const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  googleId: {
    type: String,
    required: true
  },
  ownerId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

const BookModel = mongoose.model('Book', BookSchema);

module.exports = BookModel;
