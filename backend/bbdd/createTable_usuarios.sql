CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(255),
        apellidos VARCHAR(255),
        rol INT,
        email VARCHAR(255),
        contraseña VARCHAR(255)
);