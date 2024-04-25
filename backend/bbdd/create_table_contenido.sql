CREATE TABLE IF NOT EXISTS Articulos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    nombre_seccion VARCHAR(100) NOT NULL,
    contenido TEXT NOT NULL
);

-- //query de prueba para meter los datos de pagina "secretaria"
-- INSERT INTO `Articulos`(`id`, `titulo`, `nombre_seccion`, `contenido`) VALUES
-- (1,'Secretaria','Secretaria','
--          <p>En els centres d’ensenyament secundari i postobligatoris, la secretaria/oficines és l’agent de gestió
--             administrativa on es realitzen entre altres tasques els tràmits administratius.</p><br>
--         <p><strong>Oficines Institut TIC de Barcelona (5ª planta)</strong><br>
--             <strong>Carrer Sancho d’Àvila, 131 08018 </strong><strong>Barcelona</strong><br><br>
--         </p>
--         <p>Horari:</p>
--         <p>de dilluns a divendres de 8.30 a 10.30h i de 11.00 a 14.00</p>
--         <p>dilluns, dimarts i dijous de 15.00 a 19.00</p><br>
--         <p>Adreça de contacte: oficines<span class="atwho-query">iticbcn.cat</span></p>
--         <p><strong>Models per tràmits</strong></p><br>
--         <ul>
--             <li><a href="https://drive.google.com/file/d/1nPxlJCq4sHBqkQzTRT-TVNPOcngzC5Hw/" target="_blank"
--                     rel="noopener">Petició genèrica</a></li>
--             <li><a href="https://agora.xtec.cat/iticbcn/wp-content/uploads/usu2389/2023/11/sollicitud-baixa-centre.pdf">Sol·licitud
--                     de baixa del centre</a></li>
--         </ul>')

