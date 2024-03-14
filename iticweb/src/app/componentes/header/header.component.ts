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

}