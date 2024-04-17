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

  // ----TABLA NOTICIAS----
   var sql_noticias= ` CREATE TABLE IF NOT EXISTS noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255),
    subtitulo VARCHAR(255),
    parrafo1 TEXT,
    parrafo2 TEXT,
    parrafo3 TEXT,
    fotoPortada VARCHAR(255),
    foto1 VARCHAR(255),
    foto2 VARCHAR(255),
    foto3 VARCHAR(255),
    noticiaFijada BOOLEAN DEFAULT FALSE,
    dataCreacion TIMESTAMP,
    dataModificacion TIMESTAMP
    )`;
   var sql_calendario = ` CREATE TABLE IF NOT EXISTS Eventos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        titulo VARCHAR(100) NOT NULL,
        fecha DATE NOT NULL,
        hora TIME,
        descripcion TEXT,
        ubicacion VARCHAR(255)
    )`;



    // Ejecutamos la query usuarios
    conn.query(sql_usuarios, function(err, result) {
        if (err) throw err;
        console.log("Tabla usuarios creada!")
    })

    // Ejecutamos la query noticias
    conn.query(sql_noticias, function(err, result) {
        if (err) throw err;
        console.log("Tabla noticias creada!")
    })
 
    // Ejecutamos la query calendario
    conn.query(sql_calendario, function(err, result) {
        if (err) throw err;
        console.log("Tabla calendario creada!")
    })

}

module.exports = {
    createTables
}