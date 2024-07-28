const mysql = require('mysql2/promise');
const { dbConnect } = require('../../config/mysql');

const createUser = async (userData) => {
    const connection = await dbConnect();

    const query = "INSERT INTO users (Username, Password, Name, DNI, Legajo, TypeOfUser, Mail, Phone, University) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        userData.Username,
        userData.Password,
        userData.Name,
        userData.DNI,
        userData.Legajo,
        userData.TypeOfUser,
        userData.Mail,
        userData.Phone,
        userData.University
    ];

    try {
        const [result] = await connection.query(query, values);
        console.log("Usuario creado correctamente");
        return result;
    } catch (err) {
        console.error("Error al crear el usuario:", err);
        throw err;
    } finally {
        connection.end();
    }
};

const getUserById = async (userId) => {
    const connection = await dbConnect();

    const query = "SELECT * FROM users WHERE idUser = ?";

    try {
        const [results] = await connection.query(query, [userId]);
        if (results.length > 0) {
            console.log("Usuario obtenido correctamente");
            return results[0];
        } else {
            console.log("No se encontró ningún usuario con el ID especificado");
            return null;
        }
    } catch (err) {
        console.error("Error al obtener el usuario:", err);
        throw err;
    } finally {
        connection.end();
    }
};

const modifyUser = async (userId, userData) => {
    const connection = await dbConnect();
    
    let query = "UPDATE users SET ";
    const fields = Object.keys(userData);
    const setValues = fields.map(field => `${field} = ?`).join(', ');
    query += setValues + " WHERE idUser = ?";

    const values = fields.map(field => userData[field]);
    values.push(userId);

    try {
        const [result] = await connection.query(query, values);
        console.log("Usuario actualizado correctamente");
        return result;
    } catch (err) {
        console.error("Error al actualizar el usuario:", err);
        throw err;
    } finally {
        connection.end();
    }
};

const deleteUser = async (userId) => {
    const connection = await dbConnect();

    const query = "DELETE FROM users WHERE idUser = ?";

    try {
        const [result] = await connection.query(query, [userId]);
        console.log("Usuario eliminado correctamente");
        return result;
    } catch (err) {
        console.error("Error al eliminar el usuario:", err);
        throw err;
    } finally {
        connection.end();
    }
};

const getAllUsers = async () => {
    const connection = await dbConnect();
    try {
        const [results] = await connection.query("SELECT * FROM users");
        console.log("Usuarios obtenidos correctamente");
        return results;
    } catch (err) {
        console.error("Error al obtener todos los usuarios:", err);
        throw err;
    } finally {
        connection.end();
    }
};

module.exports = { getUserById, createUser, modifyUser, deleteUser, getAllUsers };
