// controllers/userController.js
const db = require('../config/database');

// Crear un nuevo usuario
const createUser = async (req, res) => {
    try {
        const { username, email, password, firstName, lastName, phoneNumber } = req.body;

        // Validación básica para asegurarse de que todos los campos necesarios están presentes
        if (!username || !email || !password || !firstName || !lastName) {
            return res.status(400).json({ message: 'Todos los campos son requeridos' });
        }

        // Prepara la consulta SQL para insertar el nuevo usuario
        const query = `INSERT INTO users (username, email, password, firstName, lastName, phoneNumber) 
                       VALUES (?, ?, ?, ?, ?, ?)`;

        // Ejecuta la consulta SQL
        db.execute(query, [username, email, password, firstName, lastName, phoneNumber], (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ message: 'Error al crear el usuario' });
            }

            // Responde con éxito
            res.status(201).json({ message: 'Usuario creado exitosamente', userId: results.insertId });
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
};

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
    try {
        const query = 'SELECT id, username, email, firstName, lastName, phoneNumber, createdAt, updatedAt FROM users';

        // Ejecuta la consulta SQL para obtener todos los usuarios
        db.execute(query, (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ message: 'Error al obtener los usuarios' });
            }

            // Responde con la lista de usuarios
            res.status(200).json(results);
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
};

module.exports = {
    createUser,
    getAllUsers,
};
