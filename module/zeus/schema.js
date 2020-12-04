const mongoose = require('mongoose');

const zeusSchema = mongoose.Schema({
  username: String,
  password: String,
  pets: [{
    name: String,
    items: [{
      title: String,
      value: Number,
      date: Date
    }]
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('zeus', zeusSchema);