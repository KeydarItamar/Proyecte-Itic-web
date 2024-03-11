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

            // Variable de query de Insert
            var sql_login = `SELECT * FROM usuarios WHERE email = '${email}' AND contraseña = '${password}'`;

            // Ejecutamos la query
            conn.query(sql_login, function (err, result) {
                if (err) {
                    reject(err); // Rechazamos la promesa si hay un error en la consulta
                    return;
                }

                if (result.length > 0) {
                    console.log(`Sesión iniciada! (${email})`);
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

module.exports = {
    login
};
