export const MenuLogin = {
    noLogeado: [
        {
            titulo: "No logeado",
            subtitulos: [
              { text: "Iniciar Sesión", ruta: "/login" }
            ]
        } 
    ],
    usuario: [
        {
            titulo: "Usuario",
            subtitulos: [
              { text: "Cerrar Sesión", ruta: "/login" }
            ]
        }
    ],
    profesor: [
        {
            titulo: "Profesor",
            subtitulos: [
              { text: "Insertar Noticia", ruta: "/insert_noticia" },
              { text: "Form Calendario", ruta: "/FormCalendario"},
              { text: "Cerrar Sesión", ruta: "/login" }
            ]
        }
    ],
    admin: [
        {
            titulo: "Admin",
            subtitulos: [
              { text: "Insertar Noticia", ruta: "/insert_noticia" },
              { text: "Gestionar Noticias", ruta: "/gestor_noticias"},
              { text: "Añadir Usuarios", ruta: "/register" },
              { text: "Form Calendario", ruta: "/FormCalendario"},
              { text: "Cerrar Sesión", ruta: "/login" }
            ]
        }
    ]
}