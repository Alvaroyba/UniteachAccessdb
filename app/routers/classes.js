const express = require('express');
const { getAllClasses, getClassById, createClass, modifyClass, deleteClass } = require('../models/classesModels');
const router = express.Router();

router.get('/', getAllClasses);

router.get('/:id', getClassById);

router.post('/', createClass);

router.patch('/:id', modifyClass);

router.delete('/:id', deleteClass);

module.exports = router;
