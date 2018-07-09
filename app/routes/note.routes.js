module.exports = (app) => {
    const notes = require('../controllers/note.controller');

    // Create a new Note
    app.post('/api/pads/:padId/notes', notes.create);

    // Retrieve all Notes for this pad
    app.get('/api/pads/:padId/notes', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/api/pads/:padId/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/api/pads/:padId/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/api/pads/:padId/notes/:noteId', notes.delete);
}