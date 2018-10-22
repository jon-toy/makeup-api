const Lipstick = require('../../models/product/lipstick.model');

// Create and Save a new Lipstick
exports.create = (req, res) => {
    // Validate request
    // if(!req.params.id) {
    //     return res.status(400).send({
    //         message: "PadId cannot be empty"
    //     });
    // }

    // Create an Lipstick
    const lipstick = new Lipstick({
        name: req.body.name,
        brand: req.body.brand,
        lipstick: req.body.lipstick,
        notes: req.body.notes
    });

    // Save Lipstick in the database
    lipstick.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Lipsticks."
        });
    });
};

// Retrieve and return all lipsticks from the database.
exports.findAll = (req, res) => {
    Lipstick.find()
    .then(lipsticks => {
        res.send(lipsticks);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Lipsticks."
        });
    });
};

// Find a single lipstick with a lipstickId
exports.findOne = (req, res) => {
    Lipstick.findById(req.params.lipstickId)
    .then(lipstick => {
        if(!lipstick) {
            return res.status(404).send({
                message: "Lipstick not found with id " + req.params.lipstickId
            });            
        }
        res.send(lipstick);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Lipstick not found with id " + req.params.lipstickId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Lipstick with id " + req.params.lipstickId
        });
    });
};

// Update a Lipstick identified by the lipstickId in the request
exports.update = (req, res) => {

    // Find Lipstick and update it with the request body
    Lipstick.findByIdAndUpdate(req.params.lipstickId, {
        name: req.body.name,
        brand: req.body.brand,
        lipstick: req.body.lipstick,
        notes: req.body.notes
    }, {new: true})
    .then(lipstick => {
        if(!lipstick) {
            return res.status(404).send({
                message: "Lipstick not found with id " + req.params.lipstickId
            });
        }
        res.send(lipstick);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Lipstick not found with id " + req.params.lipstickId
            });                
        }
        return res.status(500).send({
            message: "Error updating Lipstick with id " + req.params.lipstickId
        });
    });
};

// Delete a Lipstick with the specified lipstickId in the request
exports.delete = (req, res) => {
    Lipstick.findByIdAndRemove(req.params.lipstickId)
    .then(lipstick => {
        if(!lipstick) {
            return res.status(404).send({
                message: "Lipstick not found with id " + req.params.lipstickId
            });
        }
        res.send({message: "Lipstick deleted successfully!", _id: req.params.lipstickId});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Lipstick not found with id " + req.params.lipstickId
            });                
        }
        return res.status(500).send({
            message: "Could not Lipstick with id " + req.params.lipstickId
        });
    });
};