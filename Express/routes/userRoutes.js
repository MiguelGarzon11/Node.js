// routes/userRoutes.js
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.json({ message: 'Lista de usuarios' });
});

router.post('/users', (req, res) => {
    res.json({ message: 'Usuario creado' });
});

module.exports = router;
