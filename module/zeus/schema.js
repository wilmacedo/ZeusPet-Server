const mongoose = require('mongoose');

const zeusSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true
  },
  pets: {
    name: {
      type: String,
      require: true
    },
    items: {
      title: {
        type: String,
        require: true
      },
      value: {
        type: Number,
        require: true
      },
      date: {
        type: Date,
        require: true
      }
    }
  }
}, {
  timestamps: true
});

zeusSchema.index({
  username: 1,
  password: 1,
  pets: 1
});

module.exports = mongoose.model('zeus', zeusSchema);