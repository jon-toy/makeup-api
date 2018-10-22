const Eyeshadow = require('../../models/product/eyeshadow.model');

// Create and Save a new Eyeshadow
exports.create = (req, res) => {
    // Validate request
    // if(!req.params.id) {
    //     return res.status(400).send({
    //         message: "PadId cannot be empty"
    //     });
    // }

    // Create an Eyeshadow
    const eyeshdaow = new Eyeshadow({
        name: req.body.name,
        brand: req.body.brand,
        eyeshadow: req.body.eyeshadow,
        notes: req.body.notes
    });

    // Save Eyeshadow in the database
    eyeshdaow.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Eyeshadows."
        });
    });
};

// Retrieve and return all eyeshadows from the database.
exports.findAll = (req, res) => {
    Eyeshadow.find()
    .then(eyeshadows => {
        res.send(eyeshadows);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Eyeshadows."
        });
    });
};

// Find a single eyeshadow with a eyeshadowId
exports.findOne = (req, res) => {
    Eyeshadow.findById(req.params.eyeshadowId)
    .then(eyeshadow => {
        if(!eyeshadow) {
            return res.status(404).send({
                message: "Eyeshadow not found with id " + req.params.eyeshadowId
            });            
        }
        res.send(eyeshadow);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Eyeshadow not found with id " + req.params.eyeshadowId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Eyeshadow with id " + req.params.eyeshadowId
        });
    });
};

// Update a Eyeshadow identified by the eyeshadowId in the request
exports.update = (req, res) => {

    // Find Eyeshadow and update it with the request body
    Eyeshadow.findByIdAndUpdate(req.params.eyeshadowId, {
        name: req.body.name,
        brand: req.body.brand,
        eyeshadow: req.body.eyeshadow,
        notes: req.body.notes
    }, {new: true})
    .then(eyeshadow => {
        if(!eyeshadow) {
            return res.status(404).send({
                message: "Eyeshadow not found with id " + req.params.eyeshadowId
            });
        }
        res.send(eyeshadow);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Eyeshadow not found with id " + req.params.eyeshadowId
            });                
        }
        return res.status(500).send({
            message: "Error updating Eyeshadow with id " + req.params.eyeshadowId
        });
    });
};

// Delete a Eyeshadow with the specified eyeshadowId in the request
exports.delete = (req, res) => {
    Eyeshadow.findByIdAndRemove(req.params.eyeshadowId)
    .then(eyeshadow => {
        if(!eyeshadow) {
            return res.status(404).send({
                message: "Eyeshadow not found with id " + req.params.eyeshadowId
            });
        }
        res.send({message: "Eyeshadow deleted successfully!", _id: req.params.eyeshadowId});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Eyeshadow not found with id " + req.params.eyeshadowId
            });                
        }
        return res.status(500).send({
            message: "Could not Eyeshadow with id " + req.params.eyeshadowId
        });
    });
};