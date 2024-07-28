const express = require('express');
const {createInscription, getAllInscriptions, getInscriptionById, deleteInscription } = require('../models/inscriptionsModels');

const router = express.Router();

router.get('/', getAllInscriptions);

router.get('/:id', getInscriptionById);

router.post('/', createInscription);

router.delete('/:id', deleteInscription);

module.exports = router;
