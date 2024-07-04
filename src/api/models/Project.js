const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization'
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    description: {
        type: String,
        required: true
    },
    website: {
        type: string,
        required: true
    },
    repositoryLink: {
        type: String
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed', 'On Hold', 'Finished'],
        default: 'Not Started'
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