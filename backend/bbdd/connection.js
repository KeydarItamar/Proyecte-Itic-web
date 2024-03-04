function createTables() {
    var mysql = require('mysql');

    // Variable con las credenciales de conexión de la base de datos
    var conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "pass-itic8",
        database: "itic_database"
    });

    conn.connect(function(err) {
        if (err) throw err;
        console.log("Conectado a la Base de Datos!");
    })

    // ----TABLA USUARIOS----

    var sql_usuarios = `CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(255),
        apellidos VARCHAR(255),
        rol INT,
        email VARCHAR(255),
        contraseña VARCHAR(255)
    );`;

    // Ejecutamos la query
    conn.query(sql_usuarios, function(err, result) {
        if (err) throw err;
        console.log("Tabla usuarios creada!")
    })

    // ----TABLA NOTICIAS----

    var sql_noticias = `CREATE TABLE IF NOT EXISTS noticias (
        id INT AUTO_INCREMENT PRIMARY KEY,
        titulo VARCHAR(255),
        texto VARCHAR(5000),
        imagenes VARCHAR(255),
        autor_id INT,
        FOREIGN KEY (autor_id) REFERENCES usuarios(id)
    );`;

    // Ejecutamos la query
    conn.query(sql_noticias, function(err, result) {
        if (err) throw err;
        console.log("Tabla noticias creada!")
    })
}

module.exports = {
    createTables
}