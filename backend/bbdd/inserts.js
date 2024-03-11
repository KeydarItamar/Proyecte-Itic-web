function createUser(nombre, apellido, email, password) {
    return new Promise((resolve, reject) => {
        // Verificar que no haya valores vacíos
        if (!nombre || !apellido || !email || !password) {
            reject("Todos los campos son obligatorios");
            return;
        }

        var mysql = require('mysql');

        // Variable con las credenciales de conexión de la base de datos
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "pass-itic8",
            database: "itic_database"
        });
        
        conn.connect(function (err) {
            if (err) {
                reject(err); // Rechazamos la promesa si hay un error de conexión
                return;
            }

            // Variable de query de Insert
            var sql_usuarios = `INSERT INTO usuarios (nombre, apellidos, rol, email, contraseña) 
                VALUES ('${nombre}', '${apellido}', 1, '${email}', '${password}'); `;

            console.log(sql_usuarios);

            // Ejecutamos la query
            conn.query(sql_usuarios, function (err, result) {
                if (err) {
                    reject(err); // Rechazamos la promesa si hay un error en la consulta
                    return;
                }

                if (result.affectedRows > 0) {
                    console.log(`Usuario creado! (${email})`);
                    resolve(true);
                } else {
                    console.log("Credenciales inválidas!");
                    resolve(false);
                }

                // Cerramos la conexión después de completar la consulta
                conn.end();
            });
        });
    });
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