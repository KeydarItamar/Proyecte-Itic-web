var mysql = require('mysql')

// Variable con las credenciales de conexión de la base de datos
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pass-itic8",
    database: "itic_database"
});

conn.connect(function(err) {
    if (err) throw err;
    console.log("Conectado a la Base de Datos!")

    var sql = `CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(255),
        apellidos VARCHAR(255),
        rol INT,
        email VARCHAR(255),
        contraseña VARCHAR(255)
    );`;
    conn.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Tabla usuarios creada!")
    })
})

