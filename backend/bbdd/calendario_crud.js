const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pass-itic8",
    database: "itic_database"
});

function createEvento(titulo, fecha, hora, descripcion, ubicacion) {
    // return new Promise((resolve, reject) => {
    //     // Verificar que no haya valores vacíos
    //     if (!titulo || !fecha) {
    //         resolve({ success: false, message: "Falta información requerida" });
    //         return;
    //     }
        const conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "pass-itic8",
            database: "itic_database"
        });
        conn.connect(function(err) {
            if (err) throw err;
            console.log("Conectado a la Base de Datos!");
        })

        // Query de inserción con valores parametrizados
        const sql = `INSERT INTO Eventos (titulo, fecha, hora, descripcion, ubicacion) 
        VALUES ('${titulo}', '${fecha}', '${hora}', '${descripcion}', '${ubicacion}')`;

        // Ejecutar la query con valores parametrizados
            // Ejecutamos la query
            conn.query(sql, function(err, result) {
                if (err) throw err;
                console.log("Insertado evento!")
            })
            conn.end(); 
}

// Función para actualizar un evento en el calendario
function updateEvento(id, titulo, fecha, hora, descripcion, ubicacion) {
    return new Promise((resolve, reject) => {
        // Query de actualización
        const sql = `UPDATE Eventos 
                     SET titulo = ?, fecha = ?, hora = ?, descripcion = ?, ubicacion = ?
                     WHERE id = ?`;

        // Ejecutar la query
        connection.query(sql, [titulo, fecha, hora, descripcion, ubicacion, id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve({ success: true, message: "Evento actualizado exitosamente" });
            }
        });
    });
}

// Función para eliminar un evento del calendario
function deleteEvento(id) {
    return new Promise((resolve, reject) => {
        // Query de eliminación
        const sql = `DELETE FROM Eventos WHERE id = ?`;

        // Ejecutar la query
        connection.query(sql, [id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve({ success: true, message: "Evento eliminado exitosamente" });
            }
        });
    });
}

// Función para obtener todos los eventos del calendario
function getAllEventos() {
    return new Promise((resolve, reject) => {
        // Query de selección
        const sql = `SELECT * FROM Eventos`;

        // Ejecutar la query
        connection.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = {
    createEvento,
    updateEvento,
    deleteEvento,
    getAllEventos
};
