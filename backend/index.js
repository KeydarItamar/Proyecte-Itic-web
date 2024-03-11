//Archivo principal de node.js
const connection = require('./bbdd/connection');
const inserts = require ('./bbdd/inserts');
const userLogin = require('./bbdd/login')
const { exec } = require('child_process');
const express = require('express');
const cors = require('cors');
const app = express();
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
app.get('/home', (req, res) => { 
    connection.createTables();
})

// Creación de un usuario
app.get('/usuario', (req, res) => { inserts.createUser(); })

// Creación de una noticia
app.get('/noticia', (req, res) => { inserts.createNoticia(); })

app.post('/login/userLogin', async (req, res) => { 
    try {
        const email = req.body.email;    
        const password = req.body.password;

        userLogin.login(email, password)
            .then((isLoggedIn) => {
                console.log('Usuario autenticado (index.js):', isLoggedIn);
                // Enviar la respuesta solo después de que la promesa se haya resuelto
                res.json({ success: isLoggedIn });
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
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const email = req.body.email;    
        const password = req.body.password;

        inserts.createUser(nombre, apellido, email, password)
            .then((isCreated) => {
                console.log('Usuario autenticado (index.js):', isCreated);
                // Enviar la respuesta solo después de que la promesa se haya resuelto
                res.json({ success: isCreated });
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

