const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConnect = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            connectTimeout: 60000,
            port: process.env.DB_PORT
        });
        console.log('**** CONEXION A DB CORRECTA ****');
        return connection;
    } catch (err) {
        console.error('***** ERROR DE CONEXION A DB*****:', err);
        throw err;
    }
}

module.exports = { dbConnect };
