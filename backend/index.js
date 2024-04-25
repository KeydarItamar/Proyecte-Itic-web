//Archivo principal de node.js
const connection = require('./bbdd/connection');
const inserts = require ('./bbdd/inserts');
const calendar = require ('./bbdd/calendario_crud');
const userLogin = require('./bbdd/login')
const content = require('./bbdd/contenido_crud.js')
const { exec } = require('child_process');
const express = require('express');
const cors = require('cors');
const { send } = require('process');
const app = express();
const multer = require('multer');
const path = require('path');

app.use(express.json({ limit: '10mb', extended: true }));


app.use(cors());
//le decimos a python que responda en utf-8
process.env.PYTHONIOENCODING = 'utf-8';

// Escuchar en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor de Node.js escuchando en el puerto 3000');
});

//tirar la query al modelo
app.use(express.json({limit: '10mb', extended: true, charset: 'utf-8'}));

// Conexión a la base de datos y creación de las tablas
app.get('/createTablas', (req, res) => { 
    connection.createTables();
})

// Creación de un usuario
app.get('/usuario', (req, res) => { inserts.createUser(); })

app.post('/insertNoticia', (req, res) => {
    try {
        const { id, titulo, subtitulo, parrafo1, parrafo2, parrafo3, fotoPortada, foto1, foto2, foto3, noticiaFijada } = req.body;

        // Llamar a la función para insertar la noticia
        inserts.createNoticia(id, titulo, subtitulo, parrafo1, parrafo2, parrafo3, fotoPortada, foto1, foto2, foto3, noticiaFijada, (err, result) => {
            if (err) {
                // Manejar el error si ocurre
                console.error(err);
                res.status(500).json({ error: 'Error al insertar la noticia' });
            } else {
                // Si no hay errores, devolver un mensaje de éxito
                res.status(200).json({ message: 'Noticia insertada correctamente' });
            }
        });
    } catch (error) {
        // Manejar cualquier error de forma general
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

//update noticia:
app.put('/updateNoticia', (req, res) => {
    try {
        const { titulo, subtitulo, parrafo1, parrafo2, parrafo3, fotoPortada, foto1, foto2, foto3, noticiaFijada } = req.body.noticia;
        const id = req.body.id
        console.log("Este es el id de la noticia actualzada" + id)
        console.log("data recibida   " + titulo, subtitulo, parrafo1, parrafo2, parrafo3, fotoPortada, foto1, foto2, foto3, noticiaFijada)
        // Llamar a la función para insertar la noticia
        inserts.updateNoticia(id, titulo, subtitulo, parrafo1, parrafo2, parrafo3, fotoPortada, foto1, foto2, foto3, noticiaFijada, (err, result) => {
            if (err) {
                // Manejar el error si ocurre
                console.error(err);
                res.status(500).json({ error: 'Error al actualizar la noticia' });
            } else {
                // Si no hay errores, devolver un mensaje de éxito
                res.status(200).json({ message: 'Noticia actualizada correctamente' });
            }
        });
    } catch (error) {
        // Manejar cualquier error de forma general
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
app.post('/getNoticia', (req, res) => {
    try {
        const id = req.body.id; // Suponiendo que el ID se envía como parte del cuerpo de la solicitud
        console.log('En el backend el Id recibido es: ' + id );
        
        inserts.selectNoticia(id, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Error al obtener la noticia' });
            } else {
                res.status(200).json(result);
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.get('/getAllNoticias', (req, res) => {
    try {
        inserts.selectAllNoticias((err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Error al obtener las noticias' });
            } else {
                res.status(200).json(result);
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.delete('/deleteNoticia/:id', (req, res) => {
    const id = req.params.id;
  
    // Llamar a la función para eliminar la noticia
    inserts.deleteNoticia(id, (err, result) => {
      if (err) {
        // Manejar el error si ocurre
        console.error(err);
        res.status(500).json({ error: 'Error al eliminar la noticia' });
      } else {
        // Si no hay errores, devolver un mensaje de éxito
        res.status(200).json({ message: 'Noticia eliminada correctamente' });
      }
    });
  });

app.post('/login/userLogin', async (req, res) => { 
    try {
        const email = req.body.email;    
        const password = req.body.password;

        userLogin.login(email, password)
            .then((authResult) => {
                console.log('Usuario autenticado (index.js):', authResult.success);

                // Enviar la respuesta solo después de que la promesa se haya resuelto
                res.json({ success: authResult.success, token: authResult.token, rol: authResult.rol });
            })
            .catch((error) => {
                console.error('Error en la autenticación:', error);
                // Manejo de errores aquí
                res.status(500).json({ error: 'Error en la autenticación' });
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});


app.post('/register/userRegister', async (req, res) => {
    try {
        const nombre = req.body.nom;
        const apellido = req.body.cognom;
        const email = req.body.email;
        const password = req.body.password;

        try {
            const result = await inserts.createUser(nombre, apellido, email, password);

            if (result.success) {
                console.log('Usuario autenticado (index.js):', result);

                // Enviar la respuesta con el token
                res.json({ success: true, token: result.token, rol: result.rol});
            } else {
                console.error('Credenciales inválidas');
                res.status(401).json({ success: false, message: 'Credenciales inválidas' });
            }
        } catch (error) {
            console.error('Error en la autenticación:', error);
            res.status(500).json({ error: 'Error en la autenticación' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});


app.post('/enviar-datos', (req, res) => {
    const datos = req.body;
    // Formatear los datos como una cadena JSON válida y escapar comillas dobles
    const datosFormateados = JSON.stringify(datos).replace(/"/g, '\\"');
    
    console.log('entrando en script de python...' )
    console.log(datosFormateados)
    // Lógica para pasar los datos al script de Python
    exec(`python ./python/retrievalModel.py "${datosFormateados}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar el script de Python: ${error}`);
            return res.status(500).send('Error interno del servidor');
        }
        console.log(`${stdout}`);
        //para que la salida sea en utf8 
        res.header('Content-Type', 'text/plain; charset=utf-8');

        res.send(stdout);
    });
});

//Guardar Documento



// Configuración de multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../iticweb/src/assets/img-noticias'); // La carpeta donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // El nombre original del archivo
    }
});

const upload = multer({ storage: storage });

// Ruta para subir archivos
app.post('/subirImagenes', upload.array('files'), (req, res) => {
    console.log('Archivos recibidos:', req.files);
    res.send('Archivos recibidos correctamente');
});


//********************************************************************************************************************************** */
//rutas para los eventos del calendario: 

//ruta para insertar un evento en el calendario
app.post('/createEvento', (req, res) => {
    try {

        const data = req.body;
        console.log('Enviando a función bbdd: ' + data.titulo, data.fecha, data.hora, data.descripcion, data.ubicacion);
        
        // Llamar a la función para insertar en la base de datos
        calendar.createEvento(data.titulo, data.fecha, data.hora, data.descripcion, data.ubicacion, (err, result) => {
            if (err) {
                // Manejar el error si ocurre
                console.error(err);
                res.status(500).json({ error: 'Error al insertar evento' });
            } else {
                // Si no hay errores, devolver un mensaje de éxito
                res.status(200).json({ message: 'Evento insertado correctamente' });
            }
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Endpoint para actualizar un evento por su ID
app.put('/updateEvento/:id', (req, res) => {
    const id = req.params.id;
    const { titulo, fecha, hora, descripcion, ubicacion } = req.body;

    // Llamar a la función para actualizar el evento por su ID
    calendar.updateEvento(id, titulo, fecha, hora, descripcion, ubicacion)
        .then(result => res.status(200).json({ message: 'Evento actualizado correctamente' }))
        .catch(error => res.status(500).json({ error: 'Error al actualizar el evento' }));
});


// Endpoint para obtener todos los eventos del calendario
app.get('/getAllEventos', (req, res) => {
    try {
        // Llamar a la función para obtener todos los eventos
        calendar.getAllEventos()
            .then(eventos => res.status(200).json(eventos))
            .catch(error => res.status(500).json({ error: 'Error al obtener los eventos' }));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Endpoint para eliminar un evento por su ID
app.delete('/deleteEvento/:id', (req, res) => {
    const id = req.params.id;

    // Llamar a la función para eliminar el evento por su ID
    calendar.deleteEvento(id)
        .then(result => res.status(200).json({ message: 'Evento eliminado correctamente' }))
        .catch(error => res.status(500).json({ error: 'Error al eliminar el evento' }));
});

//**************************************************************************************************/


// Ruta para crear un nuevo artículo
app.post('/createArticulo', (req, res) => {
    try {
        const data = req.body;
        console.log('Enviando a función bbdd: ' + data.titulo, data.nombre_seccion, data.contenido);
        
        // Llamar a la función para insertar en la base de datos
        content.createArticulo(data.titulo, data.nombre_seccion, data.contenido)
            .then(result => res.status(200).json({ message: 'Artículo insertado correctamente' }))
            .catch(error => res.status(500).json({ error: 'Error al insertar artículo' }));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Endpoint para actualizar un artículo por su ID
app.post('/updateArticulo', (req, res) => {
    console.log('entrando en endpoint')
    const data = req.body;
    // Llamar a la función para actualizar el artículo por su ID
    content.updateArticulo(data.id, data.articulo)
        .then(result => res.status(200).json({ message: 'Artículo actualizado correctamente' }))
        .catch(error => res.status(500).json({ error: 'Error al actualizar el artículo' }));
 console.log('se ha entrando en el update')
});

// Endpoint para obtener todos los artículos
app.get('/getAllArticulos', (req, res) => {
    try {
        // Llamar a la función para obtener todos los artículos
        content.getAllArticulos()
            .then(articulos => res.status(200).json(articulos))
            .catch(error => res.status(500).json({ error: 'Error al obtener los artículos' }));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Endpoint para obtener un artículo por su ID
app.get('/getArticulo/:id', (req, res) => {
    const id = req.params.id;

    // Llamar a la función para obtener el artículo por su ID
    content.getArticuloById(id)
        .then(articulo => {
            if (articulo.success === false) {
                res.status(404).json({ error: articulo.message });
            } else {
                res.status(200).json(articulo);
            }
        })
        .catch(error => res.status(500).json({ error: 'Error al obtener el artículo' }));
});

// Endpoint para eliminar un artículo por su ID
app.delete('/deleteArticulo/:id', (req, res) => {
    const id = req.params.id;
    // Llamar a la función para eliminar el artículo por su ID
    content.deleteArticulo(id)
        .then(result => res.status(200).json({ message: 'Artículo eliminado correctamente' }))
        .catch(error => res.status(500).json({ error: 'Error al eliminar el artículo' }));
});
