const mongoose = require('mongoose');

const zeusSchema = mongoose.Schema({
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
}, {});

zeusSchema.index({
    title: 1,
    value: 1,
    date: 1
});

module.exports = mongoose.model('zeus', zeusSchema);