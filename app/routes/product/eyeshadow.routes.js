module.exports = (app) => {
    const eyeshadow = require('../../controllers/product/eyeshadow.controller');

    // Create a new Eyeshadow
    app.post('/api/v1/product/eyeshadow', eyeshadow.create);

    // Retrieve all Eyeshadows
    app.get('/api/v1/product/eyeshadow', eyeshadow.findAll);

    // Retrieve a single Eyeshadow with eyeshadowId
    app.get('/api/v1/product/eyeshadow/:eyeshadowId', eyeshadow.findOne);

    // Update an Eyeshadow with eyeshadowId
    app.put('/api/v1/product/eyeshadow/:eyeshadowId', eyeshadow.update);

    // Delete an Eyeshadow with eyeshadowId
    app.delete('/api/v1/product/eyeshadow/:eyeshadowId', eyeshadow.delete);
}