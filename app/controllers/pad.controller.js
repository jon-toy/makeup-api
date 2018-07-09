const Pad = require('../models/pad.model');

// Create and Save a new Pad
exports.create = (req, res) => {
    // Validate request
    // if(!req.body.title) {
    //     return res.status(400).send({
    //         message: "Pad title cannot be empty"
    //     });
    // }

    // Create a Pad
    const pad = new Pad({
        notes: req.body.notes,
        meta: req.body.meta,
    });

    // Save Pad in the database
    pad.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Pad."
        });
    });
};

// Retrieve and return all pads from the database.
exports.findAll = (req, res) => {
    Pad.find()
    .then(pads => {
        res.send(pads);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving pads."
        });
    });
};

// Find a single pad with a padId
exports.findOne = (req, res) => {
    Pad.findById(req.params.padId)
    .then(pad => {
        if(!pad) {
            return res.status(404).send({
                message: "Pad not found with id " + req.params.padId
            });            
        }
        res.send(pad);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Pad not found with id " + req.params.padId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving pad with id " + req.params.padId
        });
    });
};

// Update a pad identified by the padId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.title) {
        return res.status(400).send({
            message: "Pad title cannot be empty"
        });
    }

    // Find pad and update it with the request body
    Pad.findByIdAndUpdate(req.params.padId, {
        title: req.body.title
    }, {new: true})
    .then(pad => {
        if(!pad) {
            return res.status(404).send({
                message: "Pad not found with id " + req.params.padId
            });
        }
        res.send(pad);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Pad not found with id " + req.params.padId
            });                
        }
        return res.status(500).send({
            message: "Error updating pad with id " + req.params.padId
        });
    });
};

// Delete a pad with the specified padId in the request
exports.delete = (req, res) => {
    Pad.findByIdAndRemove(req.params.padId)
    .then(pad => {
        if(!pad) {
            return res.status(404).send({
                message: "Pad not found with id " + req.params.padId
            });
        }
        res.send({message: "Pad deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Pad not found with id " + req.params.padId
            });                
        }
        return res.status(500).send({
            message: "Could not delete pad with id " + req.params.padId
        });
    });
};