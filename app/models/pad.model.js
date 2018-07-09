const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PadSchema = mongoose.Schema({
    notes: [{type: Schema.ObjectId, ref: 'Note'}],
    meta: {
        title: String,
        dateCreated: { 
            type : Date, 
            default: Date.now 
        },
        dateModified: { 
            type : Date, 
            default: Date.now 
        }
    }
});

module.exports = mongoose.model('Pad', PadSchema);