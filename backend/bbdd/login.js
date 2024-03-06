function login(email, password) {
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
    var sql_login = `SELECT * FROM usuarios WHERE email = '${email}' AND contraseña = '${password}'`;

    // Ejecutamos la query
    conn.query(sql_login, function(err, result) {
        if (err) throw err;

        if (result.length > 0 ) console.log(`Sesión iniciada! (${email})`)
        else console.log("Credenciales inválidas!")
    })
}
module.exports = {
    login
  };