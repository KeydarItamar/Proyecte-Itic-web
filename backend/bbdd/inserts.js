const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Para el cifrado seguro de contraseñas

function createUser(nombre, apellido, email, password) {
    return new Promise((resolve, reject) => {
        // Verificar que no haya valores vacíos
        if (!nombre || !apellido || !email || !password) {
            resolve({ success: false, token: null });
            return;
        }
        let rol;
        // Añadimos el rol depende de si es alumno o profesor
        if (email.startsWith(new Date().getFullYear()) || email.startsWith(new Date().getFullYear()-1)) { // Si empieza con el año es alumno
            rol = 1;
        } else { // Si no empieza con año es profesor
            rol = 2; 
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
                VALUES ('${nombre}', '${apellido}', ${rol}, '${email}', '${hashedPassword}'); `;

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

                    resolve({ success: true, token, rol: rol });
                } else {
                    console.log("Credenciales inválidas!");
                    resolve({ success: false, token: null });
                }

                // Cerramos la conexión después de completar la consulta
                
            });
        });
    });
}

function createNoticia(id, titulo, subtitulo,parrafo1,parrafo2,parrafo3, fotoPortada, foto1,foto2,foto3,noticiaFijada ) {
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
    var sql_insert_noticias = `INSERT INTO noticias (titulo, subtitulo, parrafo1, parrafo2, parrafo3, fotoPortada, foto1, foto2, foto3, noticiaFijada, dataCreacion, dataModificacion) 
        VALUES ('${titulo}', '${subtitulo}', '${parrafo1}', '${parrafo2}', '${parrafo3}', '${fotoPortada}', '${foto1}', '${foto2}', '${foto3}', ${noticiaFijada}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP); `;

    // Ejecutamos la query
    conn.query(sql_insert_noticias, function(err, result) {
        if (err) throw err;
        console.log("Insertado noticia!")
    })
     
}

// Función para actualizar una noticia existente
function updateNoticia(id, titulo, subtitulo, parrafo1, parrafo2, parrafo3, fotoPortada, foto1, foto2, foto3, noticiaFijada) {
    var mysql = require('mysql');

    // Variable con las credenciales de conexión de la base de datos
    var conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "pass-itic8",
        database: "itic_database"
    });

    conn.connect(function (err) {
        if (err) throw err;
        console.log("Conectado a la Base de Datos!");

        // Si noticiaFijada es true, desactivamos todas las otras noticias fijadas
        if (noticiaFijada) {
            var sql_desactivar_fijadas = `UPDATE noticias SET noticiaFijada = false WHERE id != ${id} AND noticiaFijada = true;`;
            conn.query(sql_desactivar_fijadas, function (err, result) {
                if (err) throw err;
                console.log("Noticias fijadas desactivadas!");
            });
        }
    });

    // Query para actualizar la noticia
    var sql_update_noticia = `UPDATE noticias SET titulo = '${titulo}', subtitulo = '${subtitulo}', parrafo1 = '${parrafo1}', parrafo2 = '${parrafo2}', parrafo3 = '${parrafo3}', fotoPortada = '${fotoPortada}', foto1 = '${foto1}', foto2 = '${foto2}', foto3 = '${foto3}', noticiaFijada = ${noticiaFijada ? 1 : 0}, dataModificacion = CURRENT_TIMESTAMP WHERE id = ${id};`;

    // Ejecutamos la query
    conn.query(sql_update_noticia, function (err, result) {
        if (err) throw err;
        console.log("Noticia actualizada!");
    });
    
    
}



function deleteNoticia(id ) {
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
    var sql_delete_noticias = `DELETE FROM noticias WHERE id = ${id};
    `
    // Ejecutamos la query
    conn.query(sql_delete_noticias, function(err, result) {
        if (err) throw err;
        console.log("Noticia borrada!")
    })
     
}

function selectNoticia(id,callback) {
    console.log('entrando en selectnoticia.')
    return new Promise((resolve, reject) => {
        var mysql = require('mysql');

        // Credenciales de conexión a la base de datos
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "pass-itic8",
            database: "itic_database"
        });

        conn.connect(function(err) {
            if (err) {
                reject(err);
            } else {
                console.log("Conectado a la Base de Datos!");
                // Query de selección de noticias
                var sql_select_noticia = `SELECT * FROM noticias WHERE id = ${id}`;
                conn.query(sql_select_noticia, function(err, result) {
                    if (err) {
                        callback(err, null);
                        console.log(err)
                    } else {
                        callback(null, result);
                        console.log(result)
                    }
                     
                });
            }
        });
    });
}



function selectAllNoticias(callback) {
    var noticiasJSON;
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
    var sql_select_noticias = `SELECT * FROM noticias;`
    conn.query(sql_select_noticias, function(err, result) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
     
    
}

module.exports = {
    createUser,
    createNoticia, 
    deleteNoticia,
    selectNoticia,
    selectAllNoticias,
    updateNoticia
}