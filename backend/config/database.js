const mysql = require('mysql2'); // Asegúrate de usar mysql2

const db = mysql.createPool({
    host: 'localhost',  
    user: 'root',     
    password: '', 
    database: 'dbcss', 
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = db;