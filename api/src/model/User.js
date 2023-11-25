const mongoose = require('mongoose');
const chatsModel = require('./chats.js');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  chats: [chatsModel],
  refreshToken: {
    type: String,
    default: null,
  }
});

module.exports = mongoose.model('User', userSchema); 
