import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu-header';
import { MenuLogin } from 'src/app/models/menu-login';
import { RouterModule } from '@angular/router';
import { NoticiasService } from 'src/app/noticias.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Secretaria = 'Secretaria'
  Formulario = 'Formulario'
  Menu = Menu
  MenuLogin = MenuLogin
  mostrarSubtitulosFlag: boolean = false;

  constructor(private noticiaService : NoticiasService) {

  }

  ngOnInit(): void {
    this.crearTablas()
  }

  mostrarSubtitulos() {
    this.mostrarSubtitulosFlag = true;
  }

  ocultarSubtitulos() {
    this.mostrarSubtitulosFlag = false;
  }

  getCookie(cookieName: string) {
    // Separar todas las cookies por punto y coma y espacio en blanco
    var cookies = document.cookie.split('; ');

    // Recorrer todas las cookies para encontrar la deseada
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split('=');
        // Si el nombre de la cookie coincide, devolver su valor
        if (cookie[0] === cookieName) {
            return decodeURIComponent(cookie[1]);
        }
    }
    // Si no se encuentra la cookie, devolver null
    return null;
  }

  getMenuLogin() {
    const rol = this.getCookie('rol');
    switch(rol) {
      case '0':
        return this.MenuLogin.admin;
      case '1':
        return this.MenuLogin.usuario;
      case '2':
        return this.MenuLogin.profesor;
      default:
        return this.MenuLogin.noLogeado;
    }
  }
  

 crearTablas(){
   this.noticiaService.createTables().subscribe({
    next: response =>{
      console.log('tablas creadas')
    },
    error : error => {
    console.error('Error al subir imágenes:', error);
  }
   })
 }

}