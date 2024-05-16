import { Component, OnInit, Input } from '@angular/core';
import { NoticiasService } from 'src/app/noticias.service';
import { Noticia } from './noticia-detalle/noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: number[] = [];

  constructor(private noticia: NoticiasService) { }
  noticiaDetalle = "noticiaDetalle";
  allNoticias = [];
  noticiaFijada!: Noticia;
  idFix!: number;
  imagenFix!: string;
  tituloFix!: string;
  subtituloFix!: string;
  parrafo1Fix!: string;
  miniNoticia!: Noticia;
  imagen!: string;
  titulo!: string;
  subtitulo!: string;
  parrafo1!: string;
  id: number = 1;
  currentIndex = 0;
  ngOnInit(): void {
    this.selectAllNoticias();
    this.currentIndex = 0;
  }

  getNoticiaFijada() {
    this.imagenFix = this.noticiaFijada.fotoPortada;
    this.tituloFix = this.noticiaFijada.titulo;
    this.parrafo1Fix = this.noticiaFijada.parrafo1;
    this.idFix = this.allNoticias[this.currentIndex]["id"];
  }

  siguienteNoticia() {
    this.noticias = this.allNoticias;
    this.currentIndex = (this.currentIndex + 1) % this.noticias.length;
    this.miniNoticia = this.allNoticias[this.currentIndex];
    if (this.miniNoticia.noticiaFijada) this.siguienteNoticia();
    this.imagen = this.miniNoticia.fotoPortada;
    this.titulo = this.miniNoticia.titulo;
    this.parrafo1 = this.miniNoticia.parrafo1;
    this.id = this.allNoticias[this.currentIndex]["id"];
  }

  anteriorNoticia() {
    this.currentIndex = (this.currentIndex - 1 + this.noticias.length) % this.noticias.length;
    this.miniNoticia = this.allNoticias[this.currentIndex];
    if (this.miniNoticia.noticiaFijada) this.anteriorNoticia();
    this.imagen = this.miniNoticia.fotoPortada;
    this.titulo = this.miniNoticia.titulo;
    this.parrafo1 = this.miniNoticia.parrafo1;
    this.id = this.allNoticias[this.currentIndex]["id"];
  }

  selectAllNoticias() {
    this.noticia.getAllNoticias().subscribe({
      next: response => {
        this.allNoticias = response;
        console.log(this.allNoticias);
        this.allNoticias.forEach(noticia => {
          if (noticia['noticiaFijada'] == 1) {
            this.noticiaFijada = noticia;
            this.getNoticiaFijada();
          }
          this.currentIndex++;
        });
        this.siguienteNoticia();
        console.log(response);
      },
      error: error => {
        console.log('error: ' + error);
      }
    });
  }
}
