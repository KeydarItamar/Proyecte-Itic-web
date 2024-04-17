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
  Secretaria = 'Secretaria';
  Formulario = 'Formulario';
  FormCalendario = 'FormCalendario';

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

  getMenuLogin() {
    const rol = localStorage.getItem("rol");
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