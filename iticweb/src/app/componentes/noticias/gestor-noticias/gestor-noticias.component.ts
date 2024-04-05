import { Component, OnInit, Input } from '@angular/core';
import { NoticiasService } from 'src/app/noticias.service';
import { Noticia } from '../noticia-detalle/noticia';

@Component({
  selector: 'app-gestor-noticias',
  templateUrl: './gestor-noticias.component.html',
  styleUrls: ['./gestor-noticias.component.css']
})
export class GestorNoticiasComponent implements OnInit {

  noticias: number[] = [] 

  constructor( private noticia : NoticiasService) { }
  noticiaDetalle = "noticiaDetalle"
  allNoticias=[]
  miniNoticia!: Noticia;
  imagen!:string;
  titulo!: string;
  subtitulo!: string;
  parrafo1!:string;
  id:number = 1;

  ngOnInit(): void {
    this.selectAllNoticias()
    this.currentIndex = 1;
  }
  currentIndex = 1;

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