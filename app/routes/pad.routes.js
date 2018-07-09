module.exports = (app) => {
    const pads = require('../controllers/pad.controller');

    // Create a new Pad
    app.post('/api/pads', pads.create);

    // Retrieve all Pads
    app.get('/api/pads', pads.findAll);

    // Retrieve a single Pad with padId
    app.get('/api/pads/:padId', pads.findOne);

    // Update a Pad with padId
    app.put('/api/pads/:padId', pads.update);

    // Delete a Pad with padId
    app.delete('/pads/:padId', pads.delete);
}