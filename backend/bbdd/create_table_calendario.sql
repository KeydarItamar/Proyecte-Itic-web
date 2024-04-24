CREATE TABLE IF NOT EXISTS Eventos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    fecha VARCHAR(100) NOT NULL,
    hora TIME,
    descripcion TEXT,
    ubicacion VARCHAR(255)
);
