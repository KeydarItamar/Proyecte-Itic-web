import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: number[] = [1,2,3,4] 

  constructor() { }

  ngOnInit(): void {
  }
  currentIndex = 1;

  siguienteNoticia() {
    this.currentIndex = (this.currentIndex + 1) % this.noticias.length;
  }

  anteriorNoticia() {
    this.currentIndex = (this.currentIndex - 1 + this.noticias.length) % this.noticias.length;
  }
}
