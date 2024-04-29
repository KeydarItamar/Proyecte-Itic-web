import { Component, OnInit, Input  } from '@angular/core';
import { NoticiasService } from 'src/app/noticias.service';
import { Noticia } from '../noticia-detalle/noticia';
@Component({
  selector: 'app-mini-noticia',
  templateUrl: './mini-noticia.component.html',
  styleUrls: ['./mini-noticia.component.css']
})
export class MiniNoticiaComponent implements OnInit {
  
  @Input() id!: number;
  @Input() imagen!: string;
  @Input() titulo!: string;
  @Input() parrafo1!: string;
  allNoticias=[]
  miniNoticia!: Noticia;

  constructor( private noticia : NoticiasService) { }

  ngOnInit(): void {
    
  }


  abrirPestanya(id: number){
    window.open(`noticiaDetalle/${id}`);
  }

}
