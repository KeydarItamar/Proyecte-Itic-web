CREATE TABLE noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255),
    subtitulo VARCHAR(255),
    parrafo1 TEXT,
    parrafo2 TEXT,
    parrafo3 TEXT,
    fotoPortada VARCHAR(255),
    foto1 VARCHAR(255),
    foto2 VARCHAR(255),
    foto3 VARCHAR(255),
    noticiaFijada BOOLEAN DEFAULT FALSE,
    dataCreacion TIMESTAMP,
    dataModificacion TIMESTAMP
);