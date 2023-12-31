const mongoose = require('mongoose');

//USER Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  emergencyContacts: [{
    name: String,
    phoneNumber: String
  }],
  customMessages: [{
    name: {
      type: String,
    },
    relationship: {
      type: String,
      lowercase: true
    },
    email: {
      type: String,
      lowercase: true
    },
    content: String
  }]
});

//Model
const User = mongoose.model('User', UserSchema);

module.exports = User;