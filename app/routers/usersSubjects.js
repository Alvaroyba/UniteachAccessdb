const express = require('express');
const { createUserSubject, deleteUserSubject, getUserSubjects } = require('../models/usersSubjectsModels');

const router = express.Router();

router.post('/', createUserSubject); // Ruta para crear una relación usuario-materia
router.delete('/:userId/:subjectId', deleteUserSubject); // Ruta para eliminar una relación usuario-materia
router.get('/:userId', getUserSubjects); // Ruta para obtener las materias vinculadas a un usuario

module.exports = router;
