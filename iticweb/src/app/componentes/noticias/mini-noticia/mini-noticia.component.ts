import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/noticias.service';
import { Noticia } from '../noticia-detalle/noticia';
@Component({
  selector: 'app-mini-noticia',
  templateUrl: './mini-noticia.component.html',
  styleUrls: ['./mini-noticia.component.css']
})
export class MiniNoticiaComponent implements OnInit {
  // @Input id!: id; 
  miniNoticia!: Noticia;

  constructor( private noticia : NoticiasService) { }

  ngOnInit(): void {
    this.selectNoticia(1)
  }

  selectNoticia(id: number)  {
    this.noticia.getNoticia(id).subscribe({
      next: response =>{
        this.miniNoticia = response
      }, 
      error: error =>{
        console.log('error: ' + error)
      }
    })

  }


}
