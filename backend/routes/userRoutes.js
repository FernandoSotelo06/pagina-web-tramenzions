const express = require('express');
const { createUser , getAllUsers } = require('../controllers/userControllers');
const router = express.Router();


// Ruta para crear un nuevo usuario
router.post('/user', createUser );

// Ruta para obtener todos los usuarios
router.get('/users', getAllUsers);

module.exports = router;