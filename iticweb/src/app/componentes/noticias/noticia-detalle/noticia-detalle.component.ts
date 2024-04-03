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

  constructor( private noticiaService: NoticiasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log('log del nuevo componente: id: ' + this.id);
      this.selectNoticiaById(this.id);
    });
  }

  selectNoticiaById(id: number)  {
    this.noticiaService.getNoticia(id).subscribe({
      next: response =>{
        this.noticia = response
        console.log(this.noticia)
      }, 
      error: error =>{
        console.log('error: ' + error)
      }
    })

  }

}
