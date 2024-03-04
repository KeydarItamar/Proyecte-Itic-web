//Archivo principal de node.js
const { exec } = require('child_process');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
//le decimos a python que responda en utf-8
process.env.PYTHONIOENCODING = 'utf-8';

// Escuchar en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor de Node.js escuchando en el puerto 3000');
});

//tirar la query al modelo
app.use(express.json({limit: '10mb', extended: true, charset: 'utf-8'}));

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

