const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Para el cifrado seguro de contraseñas

function createUser(nombre, apellido, email, password) {
    return new Promise((resolve, reject) => {
        // Verificar que no haya valores vacíos
        if (!nombre || !apellido || !email || !password) {
            resolve({ success: false, token: null });
            return;
        }

        // Hash de la contraseña antes de almacenarla en la base de datos
        const hashedPassword = bcrypt.hashSync(password, 10);

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
                VALUES ('${nombre}', '${apellido}', 1, '${email}', '${hashedPassword}'); `;

            console.log(sql_usuarios);

            // Ejecutamos la query
            conn.query(sql_usuarios, function (err, result) {
                if (err) {
                    reject(err); // Rechazamos la promesa si hay un error en la consulta
                    return;
                }

                if (result.affectedRows > 0) {
                    console.log(`Usuario creado! (${email})`);

                    // Generar el token JWT
                    const token = jwt.sign({ email: email }, 'pass-itic8assword', { expiresIn: '1h' });

                    resolve({ success: true, token });
                } else {
                    console.log("Credenciales inválidas!");
                    resolve({ success: false, token: null });
                }

                // Cerramos la conexión después de completar la consulta
                conn.end();
            });
        });
    });
}

module.exports = {
    createUser
};


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