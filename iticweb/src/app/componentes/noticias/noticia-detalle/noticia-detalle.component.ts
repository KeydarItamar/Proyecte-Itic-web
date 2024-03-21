import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/noticias.service';
import { Noticia } from './noticia';


@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.css']
})
export class NoticiaDetalleComponent implements OnInit {

  noticia: Noticia = {
    titulo: 'Título de la noticia',
    subtitulo: 'Subtítulo de la noticia',
    parrafo1: 'Contenido del primer párrafo',
    parrafo2: 'Contenido del segundo párrafo',
    parrafo3: 'Contenido del tercer párrafo',
    fotoPortada: 'ruta/de/la/foto/portada.jpg',
    foto1: 'ruta/de/la/foto1.jpg',
    foto2: 'ruta/de/la/foto2.jpg',
    foto3: 'ruta/de/la/foto3.jpg',
    noticiaFijada: true
  };

  constructor(noticiasService: NoticiasService) { }

  ngOnInit(): void {
  }




}
