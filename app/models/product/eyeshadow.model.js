const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const EyeshadowSchema = mongoose.Schema({
    name: String,
    brand: String,
    eyeshadow: [
        {
            Color: {
                color: String,
                finish: String
            },
            compositionType: String
        }
    ],
    notes: [
        String
    ]
});

module.exports = mongoose.model('Eyeshadow', EyeshadowSchema);