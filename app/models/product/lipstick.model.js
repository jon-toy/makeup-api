const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const LipstickSchema = mongoose.Schema({
    name: String,
    brand: String,
    lipstick: [
        {
            Color: {
                color: String,
                finish: String
            },
            compositionType: String,
            applicator: String
        }
    ],
    notes: [
        String
    ]
});

module.exports = mongoose.model('Lipstick', LipstickSchema);