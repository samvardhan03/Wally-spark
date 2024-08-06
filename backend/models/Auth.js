const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Auth schema
const authSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  token: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '1h' // The token will automatically be removed after 1 hour
  }
});

// Create the Auth model
const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;
