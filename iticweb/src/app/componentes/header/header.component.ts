import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu-header';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Secretaria = 'Secretaria'
  Formulario = 'Formulario'
  Menu = Menu
  mostrarSubtitulosFlag: boolean = false;
  constructor() {

  }

  ngOnInit(): void {
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

}