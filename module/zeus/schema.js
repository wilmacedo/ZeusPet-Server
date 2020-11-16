const mongoose = require('mongoose');
const moment = require('moment');

const zeusSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
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
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true}
});

zeusSchema.index({ title: 1, description: 1, value: 1, date: 1});

module.exports = mongoose.model('zeus', zeusSchema);