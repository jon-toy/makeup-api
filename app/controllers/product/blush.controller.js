const Blush = require('../../models/product/blush.model');

// Create and Save a new Blush
exports.create = (req, res) => {
    // Validate request
    // if(!req.params.id) {
    //     return res.status(400).send({
    //         message: "PadId cannot be empty"
    //     });
    // }

    // Create an Blush
    const blush = new Blush({
        name: req.body.name,
        brand: req.body.brand,
        blush: req.body.blush,
        notes: req.body.notes
    });

    // Save Blush in the database
    blush.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Blushs."
        });
    });
};

// Retrieve and return all blushs from the database.
exports.findAll = (req, res) => {
    Blush.find()
    .then(blushs => {
        res.send(blushs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Blushs."
        });
    });
};

// Find a single blush with a blushId
exports.findOne = (req, res) => {
    Blush.findById(req.params.blushId)
    .then(blush => {
        if(!blush) {
            return res.status(404).send({
                message: "Blush not found with id " + req.params.blushId
            });            
        }
        res.send(blush);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Blush not found with id " + req.params.blushId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Blush with id " + req.params.blushId
        });
    });
};

// Update a Blush identified by the blushId in the request
exports.update = (req, res) => {

    // Find Blush and update it with the request body
    Blush.findByIdAndUpdate(req.params.blushId, {
        name: req.body.name,
        brand: req.body.brand,
        blush: req.body.blush,
        notes: req.body.notes
    }, {new: true})
    .then(blush => {
        if(!blush) {
            return res.status(404).send({
                message: "Blush not found with id " + req.params.blushId
            });
        }
        res.send(blush);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Blush not found with id " + req.params.blushId
            });                
        }
        return res.status(500).send({
            message: "Error updating Blush with id " + req.params.blushId
        });
    });
};

// Delete a Blush with the specified blushId in the request
exports.delete = (req, res) => {
    Blush.findByIdAndRemove(req.params.blushId)
    .then(blush => {
        if(!blush) {
            return res.status(404).send({
                message: "Blush not found with id " + req.params.blushId
            });
        }
        res.send({message: "Blush deleted successfully!", _id: req.params.blushId});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Blush not found with id " + req.params.blushId
            });                
        }
        return res.status(500).send({
            message: "Could not Blush with id " + req.params.blushId
        });
    });
};