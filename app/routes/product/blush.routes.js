module.exports = (app) => {
    const blush = require('../../controllers/product/blush.controller');

    // Create a new blush
    app.post('/api/v1/product/blush', blush.create);

    // Retrieve all blushs
    app.get('/api/v1/product/blush', blush.findAll);

    // Retrieve a single blush with blushId
    app.get('/api/v1/product/blush/:blushId', blush.findOne);

    // Update an blush with blushId
    app.put('/api/v1/product/blush/:blushId', blush.update);

    // Delete an blush with blushId
    app.delete('/api/v1/product/blush/:blushId', blush.delete);
}