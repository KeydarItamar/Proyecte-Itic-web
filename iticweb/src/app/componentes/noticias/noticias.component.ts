import { Component, OnInit, Input  } from '@angular/core';
import { NoticiasService } from 'src/app/noticias.service';
import { Noticia } from './noticia-detalle/noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: number[] = [] 

  constructor( private noticia : NoticiasService) { }
  noticiaDetalle = "noticiaDetalle"
  allNoticias=[]
  miniNoticia!: Noticia;
  imagen!:string;
  titulo!: string;
  subtitulo!: string;
  parrafo1!:string;
  ngOnInit(): void {
    this.selectAllNoticias()
    this.currentIndex = 0;
  }
  currentIndex = 0;

  siguienteNoticia() {
    this.noticias = this.allNoticias
    this.currentIndex = (this.currentIndex + 1) % this.noticias.length;
    this.miniNoticia = this.allNoticias[this.currentIndex]
    this.imagen = this.miniNoticia.fotoPortada;
    this.titulo = this.miniNoticia.titulo;
    this.parrafo1 = this.miniNoticia.parrafo1;
    console.log(this.currentIndex)
  }
  
  anteriorNoticia() {
    this.currentIndex = (this.currentIndex - 1 + this.noticias.length) % this.noticias.length;
    this.miniNoticia = this.allNoticias[this.currentIndex]
    this.imagen = this.miniNoticia.fotoPortada;
    this.titulo = this.miniNoticia.titulo;
    this.parrafo1 = this.miniNoticia.parrafo1;
    console.log(this.currentIndex)

  }


  selectAllNoticias()  {
    this.noticia.getAllNoticias().subscribe({
      next: response =>{
        this.allNoticias = response
        console.log(response)
      }, 
      error: error =>{
        console.log('error: ' + error)
      }
    })


  }
}
