const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    title: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;