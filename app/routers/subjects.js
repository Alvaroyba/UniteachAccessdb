const express = require('express');
const { getAllSubjects, getSubjectById, createSubject, modifySubject, deleteSubject } = require('../models/subjectsModels');
const router = express.Router();

router.get('/', getAllSubjects);

router.get('/:id', getSubjectById);

router.post('/', createSubject);

router.patch('/:id', modifySubject);

router.delete('/:id', deleteSubject);

module.exports = router;
