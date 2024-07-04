const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization',
        required: true
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    repositoryLink: {
        type: String
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed', 'On Hold', 'Finished'],
        default: 'Not Started',
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    deployedDate: {
        type: Date,
    },
    endDate: {
      type: Date
    },
    budget: {
        type: Number,
        required: true
    },
    priority: {
        type: String,
        enum: ['Low', 'Normal', 'High', 'Critical'],
        default: 'Medium'
    },
    teamMembers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Developer'
    }],
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);