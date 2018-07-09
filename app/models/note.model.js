const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const NoteSchema = mongoose.Schema({
    content: { 
        contentType: String,
        contentBody: {}
    },
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
    },
    tags: [ 
        { 
            description: String 
        }
    ]
});

module.exports = mongoose.model('Note', NoteSchema);