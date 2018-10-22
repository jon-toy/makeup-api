module.exports = (app) => {
    const lipstick = require('../../controllers/product/lipstick.controller');

    // Create a new lipstick
    app.post('/api/v1/product/lipstick', lipstick.create);

    // Retrieve all lipsticks
    app.get('/api/v1/product/lipstick', lipstick.findAll);

    // Retrieve a single lipstick with lipstickId
    app.get('/api/v1/product/lipstick/:lipstickId', lipstick.findOne);

    // Update an lipstick with lipstickId
    app.put('/api/v1/product/lipstick/:lipstickId', lipstick.update);

    // Delete an lipstick with lipstickId
    app.delete('/api/v1/product/lipstick/:lipstickId', lipstick.delete);
}