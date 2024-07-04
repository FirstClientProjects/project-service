const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({

}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);