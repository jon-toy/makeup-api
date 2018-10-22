const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const BlushSchema = mongoose.Schema({
    name: String,
    brand: String,
    blush: [
        {
            Color: {
                color: String,
                finish: String
            },
            compositionType: String,
            intensity: Number
        }
    ],
    notes: [
        String
    ]
});

module.exports = mongoose.model('Blush', BlushSchema);