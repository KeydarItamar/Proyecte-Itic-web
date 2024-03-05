function createUser() {
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

    // Variable de query de Insert
    var sql_usuarios = `INSERT INTO usuarios (nombre, apellidos, rol, email, contraseña) 
        VALUES ('itamar', 'keydar', 1, 'itamar@iticbcn.cat', '123456'); `;

    // Ejecutamos la query
    conn.query(sql_usuarios, function(err, result) {
        if (err) throw err;
        console.log("Insertado usuario!")
    })
}

function createNoticia() {
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

    // Variable de query de Insert
    var sql_noticias = `INSERT INTO noticias (titulo, texto, imagenes, autor_id) 
        VALUES ('itamar', 'keydar', 'alumno', 1); `;

    // Ejecutamos la query
    conn.query(sql_noticias, function(err, result) {
        if (err) throw err;
        console.log("Insertado noticia!")
    })
}

module.exports = {
    createUser,
    createNoticia 
}