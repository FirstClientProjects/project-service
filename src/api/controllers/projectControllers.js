const logger = require('../../utils/logger');
const ProjectSchema = require('../models/Project');
const SuccessResponse = require('../../utils/SuccessResponse');
const ErrorResponse = require('../../utils/ErrorResponse');

const createProject = () => {
    try {
        logger.error('Create project query was successful');
        res.status(201).json(
            new SuccessResponse(
                201,
                "Create project query was successful",
                project
            )
        );
    } catch (error) {
        logger.error('Create project internal server error');
        logger.error(error);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Create project internal server error",
                error.message
            )
        );
    }
}

const getProject = () => {
    try {
        logger.error('Get project query was successful');
        res.status(200).json(
            new SuccessResponse(
                200,
                "Get project query was successful",
                project
            )
        );
    } catch (error) {
        logger.error('Get project internal server error');
        logger.error(error);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Get project internal server error",
                error.message
            )
        );
    }
}

const getProjects = () => {
    try {
        logger.error('Get projects query was successful');
        res.status(200).json(
            new SuccessResponse(
                200,
                "Get projects query was successful",
                project
            )
        );
    } catch (error) {
        logger.error('Get projects internal server error');
        logger.error(error);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Get projects internal server error",
                error.message
            )
        );
    }
}

const deleteProject = () => {
    try {
        logger.error('Delete project query was successful');
        res.status(200).json(
            new SuccessResponse(
                200,
                "Delete project query was successful",
                project
            )
        );
    } catch (error) {
        logger.error('Delete project internal server error');
        logger.error(error);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Delete project internal server error",
                error.message
            )
        );
    }
}

const updateProject = () => {
    try {
        logger.error('Update project query was successful');
        res.status(201).json(
            new SuccessResponse(
                201,
                "Update project query was successful",
                project
            )
        );
    } catch (error) {
        logger.error('Update project internal server error');
        logger.error(error);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Update project internal server error",
                error.message
            )
        );
    }
}

module.exports = {
    createProject,
    getProject,
    getProjects,
    deleteProject,
    updateProject
};