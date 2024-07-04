const express = require('express');
const { createProject, getProject, getProjects, updateProject, deleteProject } = require('../controllers/projectControllers');

const router = express.Router();

router.post('/', createProject);

router.get('/:id', getProject);

router.get('/', getProjects);

router.put('/:id', updateProject);

router.delete('/:id', deleteProject);

module.exports = router;