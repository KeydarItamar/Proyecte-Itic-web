import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/noticias.service';
import { Noticia } from './noticia';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.css']
})
export class NoticiaDetalleComponent implements OnInit {
  id!: number;
  noticia!: Noticia;
  noticiatitulo: string = ""
  noticiasubtitulo: string = ""
  noticiaparrafo1: string = ""
  noticiafotoPortada: string = ""
  noticiafoto1: string  = ""

  constructor( private noticiaService: NoticiasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // Convertir el parámetro a número
      console.log('log del nuevo componente: id: ' + this.id);
      this.selectNoticiaById(this.id);
    });
  }

  selectNoticiaById(id: number)  {
    this.noticiaService.getNoticia(id).subscribe({
      next: response =>{
        this.noticia = response[0];

        this.noticiatitulo= this.noticia.titulo
        this.noticiasubtitulo= this.noticia.subtitulo
        this.noticiaparrafo1= this.noticia.parrafo1
        this.noticiafotoPortada= this.noticia.fotoPortada

        console.log( this.noticiatitulo,
          this.noticiasubtitulo,
          this.noticiaparrafo1,
          this.noticiafotoPortada)
        // this.noticiafoto1= this.noticia.foto1
        // console.log(this.noticiafoto1)
        console.log(this.noticia)
      }, 
      error: error =>{
        console.log('error: ' + error)
      }
    })

  }

}
