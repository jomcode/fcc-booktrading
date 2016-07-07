const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TradeSchema = new Schema({
  sentBy: {
    type: String,
    required: true
  },
  receivedBy: {
    type: String,
    required: true
  },
  proposedBook: {
    bookId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    ownerId: {
      type: String,
      required: true
    }
  },
  requestedBook: {
    bookId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    ownerId: {
      type: String,
      required: true
    }
  },
  status: {
    type: String,
    default: 'pending',
    required: true
  }
});

const TradeModel = mongoose.model('Trade', TradeSchema);

module.exports = TradeModel;
