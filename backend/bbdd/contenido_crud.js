const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pass-itic8",
    database: "itic_database"
});

// Función para crear un nuevo artículo
function createArticulo(titulo, nombre_seccion, contenido) {
    return new Promise((resolve, reject) => {
        // Verificar que no haya valores vacíos
        if (!titulo || !nombre_seccion || !contenido) {
            reject({ success: false, message: "Falta información requerida" });
            return;
        }

        // Query de inserción con valores parametrizados
        const sql = `INSERT INTO Articulos (titulo, nombre_seccion, contenido) 
                     VALUES (?, ?, ?)`;

        // Ejecutar la query con valores parametrizados
        connection.query(sql, [titulo, nombre_seccion, contenido], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve({ success: true, message: "Artículo creado exitosamente" });
            }
        });
    });
}

// Función para actualizar un artículo
function updateArticulo(id, contenido) {
    return new Promise((resolve, reject) => {
        // Query de actualización
        const sql = `UPDATE Articulos 
                     SET  contenido = ?
                     WHERE id = ?`;

        // Ejecutar la query con valores parametrizados
        connection.query(sql, [contenido, id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve({ success: true, message: "Artículo actualizado exitosamente" });
            }
        });
    });
}

// Función para eliminar un artículo
function deleteArticulo(id) {
    return new Promise((resolve, reject) => {
        // Query de eliminación
        const sql = `DELETE FROM Articulos WHERE id = ?`;

        // Ejecutar la query con valores parametrizados
        connection.query(sql, [id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve({ success: true, message: "Artículo eliminado exitosamente" });
            }
        });
    });
}

// Función para obtener todos los artículos
function getAllArticulos() {
    return new Promise((resolve, reject) => {
        // Query de selección
        const sql = `SELECT * FROM Articulos`;

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
// Función para obtener un artículo por su ID
function getArticuloById(id) {
    return new Promise((resolve, reject) => {
        // Query de selección por ID
        const sql = `SELECT * FROM Articulos WHERE id = ?`;

        // Ejecutar la query con el ID como parámetro
        connection.query(sql, [id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                if (result.length === 0) {
                    resolve({ success: false, message: "No se encontró ningún artículo con ese ID" });
                } else {
                    resolve(result[0]);
                }
            }
        });
    });
}


module.exports = {
    createArticulo,
    updateArticulo,
    deleteArticulo,
    getAllArticulos,
    getArticuloById
};
