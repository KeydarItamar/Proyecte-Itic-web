const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function login(email, password) {
    return new Promise((resolve, reject) => {
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

            // Variable de query de Select
            var sql_login = `SELECT * FROM usuarios WHERE email = ?`;

            // Ejecutamos la query con un placeholder para evitar SQL injection
            conn.query(sql_login, [email], function (err, result) {
                if (err) {
                    reject(err); // Rechazamos la promesa si hay un error en la consulta
                    return;
                }

                if (result.length > 0) {
                    // Comparamos la contraseña utilizando bcrypt
                    bcrypt.compare(password, result[0].contraseña, function(err, passwordMatch) {
                        if (passwordMatch) {
                            console.log(`Sesión iniciada! (${email})`);

                            // Generar el token JWT
                            const token = jwt.sign({ email: email }, 'pass-itic8assword', { expiresIn: '1h' });

                            resolve({ success: true, token });
                        } else {
                            console.log("Credenciales inválidas!");
                            resolve({ success: false, token: null });
                        }
                    });
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
    login
};
