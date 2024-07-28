const express = require('express');
const { getAllUsers, getUserById, createUser, modifyUser, deleteUser } = require('../models/userModels');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json({ users });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if (user) {
            res.status(200).json({ user });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.status(201).json({ message: "Usuario creado correctamente", user: newUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updatedUser = await modifyUser(req.params.id, req.body);
        res.status(200).json({ message: "Usuario actualizado correctamente", user: updatedUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await deleteUser(req.params.id);
        res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
