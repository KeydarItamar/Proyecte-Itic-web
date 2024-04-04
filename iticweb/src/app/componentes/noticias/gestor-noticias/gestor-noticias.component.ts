import { Component, OnInit, Input } from '@angular/core';
import { NoticiasService } from 'src/app/noticias.service';
import { Noticia } from '../noticia-detalle/noticia';

@Component({
  selector: 'app-gestor-noticias',
  templateUrl: './gestor-noticias.component.html',
  styleUrls: ['./gestor-noticias.component.css']
})
export class GestorNoticiasComponent implements OnInit {

  constructor(private noticia : NoticiasService) { }

  allNoticias=[]

  ngOnInit(): void {
    this.selectAllNoticias();
    console.log(this.allNoticias)

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